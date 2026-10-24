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

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM ?? `${site.name} <onboarding@resend.dev>`,
      to: [process.env.CONTACT_TO ?? site.email],
      ...(lead.email ? { replyTo: lead.email } : {}),
      subject: `New estimate request: ${lead.name}${lead.service ? ` · ${lead.service}` : ""}`,
      text,
      html: `<h2>New estimate request</h2><table cellpadding="6">${rows
        .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escape(v || "-").replace(/\n/g, "<br>")}</td></tr>`)
        .join("")}</table>`,
    });
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err, "\n" + text);
    return NextResponse.json(
      { ok: false, error: `We couldn't send that. Please call us at ${site.phone}.` },
      { status: 500 },
    );
  }
}
