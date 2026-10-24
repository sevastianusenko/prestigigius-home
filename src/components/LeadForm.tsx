"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";

const OTHER = "Other / not sure";
const serviceOptions = [...nav.services.map((s) => s.label), OTHER];

function labelForSlug(slug?: string): string {
  if (!slug) return "";
  const match = nav.services.find((s) => s.href === `/services/${slug}`);
  return match?.label ?? "";
}

type Status = "idle" | "sending" | "success" | "error";

const field =
  "block w-full rounded-lg border border-sand-200 bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-500/60 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30";
const lbl = "mb-1.5 block text-sm font-medium text-navy-900";

export default function LeadForm({ compact = false, service }: { compact?: boolean; service?: string }) {
  const pathname = usePathname();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      address: String(fd.get("address") ?? "").trim(),
      service: String(fd.get("service") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      company: String(fd.get("company") ?? ""),
      page: pathname ?? "",
    };
    if (!payload.name || (!payload.phone && !payload.email)) {
      setStatus("error");
      setError("Please add your name and a phone number or email so we can reach you.");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-xl border border-sand-200 bg-white p-8 text-center shadow-card">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-amber-100 text-amber-600">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2.2}>
            <path d="m5 12 5 5 9-10" />
          </svg>
        </div>
        <h3 className="mt-5 text-2xl font-bold">Thanks. We got your request.</h3>
        <p className="mt-3 text-ink-500">
          Tim or Vlad will phone you within one business day, and together you'll pick a time for your free estimate. In a hurry? Call{" "}
          <a href={site.phoneHref} className="font-semibold text-sea-600 hover:underline">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const defaultService = labelForSlug(service);

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={`rounded-xl border border-sand-200 bg-white shadow-card ${compact ? "p-6" : "p-6 md:p-8"}`}
    >
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="lf-name" className={lbl}>
            Full name <span className="text-amber-600">*</span>
          </label>
          <input id="lf-name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="lf-phone" className={lbl}>
            Phone <span className="text-amber-600">*</span>
          </label>
          <input id="lf-phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} />
        </div>
        <div>
          <label htmlFor="lf-email" className={lbl}>
            Email
          </label>
          <input id="lf-email" name="email" type="email" autoComplete="email" className={field} />
        </div>
        {!compact && (
          <div>
            <label htmlFor="lf-address" className={lbl}>
              Project address or city
            </label>
            <input id="lf-address" name="address" type="text" autoComplete="street-address" className={field} />
          </div>
        )}
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="lf-service" className={lbl}>
            What are you planning?
          </label>
          <select id="lf-service" name="service" defaultValue={defaultService} className={`${field} appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10`} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%235B6472'%3E%3Cpath d='M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z'/%3E%3C/svg%3E\")" }}>
            <option value="">Choose a service</option>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="lf-message" className={lbl}>
            Tell us about the project
          </label>
          <textarea
            id="lf-message"
            name="message"
            rows={compact ? 3 : 5}
            placeholder="Rooms, rough size, timing, HOA, anything we should know."
            className={field}
          />
        </div>
        {/* honeypot */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="lf-company">Company</label>
          <input id="lf-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {status === "error" && error && (
        <p role="alert" className="mt-4 rounded-lg bg-amber-100 px-4 py-3 text-sm text-navy-900">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full px-7 font-semibold btn-black disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Request my free estimate"}
      </button>
      <p className="mt-3 text-center text-xs text-ink-500">
        No spam, no sharing. We reply within one business day. Prefer to talk?{" "}
        <a href={site.phoneHref} className="font-semibold text-sea-600 hover:underline">
          {site.phone}
        </a>
      </p>
    </form>
  );
}
