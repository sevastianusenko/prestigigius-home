import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/content/site";

export const runtime = "nodejs";

type Lead = {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
  page: string;
};

const str = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden "company" field. Pretend success.
  if (str(body.company)) return NextResponse.json({ ok: true });

  const lead: Lead = {
    name: str(body.name, 120),
    phone: str(body.phone, 40),
    email: str(body.email, 200),
    address: str(body.address, 300),
    service: str(body.service, 120),
    message: str(body.message, 5000),
    page: str(body.page, 300),
  };

  if (!lead.name) return NextResponse.json({ ok: false, error: "Please add your name." }, { status: 400 });
  if (!lead.phone && !lead.email)
    return NextResponse.json({ ok: false, error: "Please add a phone number or email." }, { status: 400 });
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email))
    return NextResponse.json({ ok: false, error: "That email address doesn't look right." }, { status: 400 });
  if (lead.phone && lead.phone.replace(/\D/g, "").length < 10)
    return NextResponse.json({ ok: false, error: "Please enter a 10-digit phone number." }, { status: 400 });

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["Address", lead.address],
    ["Service", lead.service],
    ["Message", lead.message],
    ["Page", lead.page],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v || "-"}`).join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("[contact] New lead (RESEND_API_KEY not set)\n" + text);
    return NextResponse.json({ ok: true });
  }

  // prestigiousimprovements.com is verified in Resend, so any address on it can send.
  const from = process.env.CONTACT_FROM ?? `${site.name} <website@${site.domain}>`;
  const office = process.env.CONTACT_TO ?? site.email;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [office],
      ...(lead.email ? { replyTo: lead.email } : {}),
      subject: `New estimate request: ${lead.name}${lead.service ? ` · ${lead.service}` : ""}`,
      text,
      html: `<h2 style="font-family:Arial,sans-serif">New estimate request</h2><table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">${rows
        .map(([k, v]) => `<tr><td valign="top"><strong>${k}</strong></td><td>${escape(v || "-").replace(/\n/g, "<br>")}</td></tr>`)
        .join("")}</table>${
        lead.phone ? `<p style="font-family:Arial,sans-serif"><a href="tel:${escape(lead.phone.replace(/[^\d+]/g, ""))}">Call ${escape(lead.name)}</a></p>` : ""
      }`,
    });
    if (error) throw new Error(error.message);

    // Confirmation to the homeowner. Best effort: the lead is already with the office.
    if (lead.email) {
      const first = lead.name.split(/\s+/)[0];
      const confirm = [
        `Hi ${first},`,
        "",
        `Thanks for contacting ${site.name}. We got your request${lead.service ? ` about ${lead.service.toLowerCase()}` : ""}.`,
        "Tim or Vlad will call you within one business day to pick a time for your free in-home estimate.",
        "",
        `In a hurry? Call ${site.phone} or just reply to this email.`,
        "",
        site.name,
        `Licensed contractor ${site.license}`,
        site.url,
      ].join("\n");
      const { error: confirmError } = await resend.emails.send({
        from: `${site.name} <${site.email}>`,
        to: [lead.email],
        replyTo: office,
        subject: `We got your request · ${site.name}`,
        text: confirm,
        html: `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#141414">${escape(confirm)
          .replace(/\n/g, "<br>")
          .replace(escape(site.url), `<a href="${site.url}">${site.domain}</a>`)}</div>`,
      });
      if (confirmError) console.error("[contact] confirmation failed", confirmError.message);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err, "\n" + text);
    return NextResponse.json(
      { ok: false, error: `We couldn't send that. Please call us at ${site.phone}.` },
      { status: 500 },
    );
  }
}
