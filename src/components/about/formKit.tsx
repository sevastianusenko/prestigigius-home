"use client";

import type { ReactNode } from "react";
import { site } from "@/content/site";

/** Shared styling + helpers for CareersForm and ReferralForm (match LeadForm). */
export const fieldCls =
  "block w-full rounded-lg border border-sand-200 bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-500/60 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30";
export const labelCls = "mb-1.5 block text-sm font-medium text-navy-900";
export const submitCls =
  "mt-6 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full px-7 font-semibold btn-black disabled:cursor-wait disabled:opacity-70";

export type FormStatus = "idle" | "sending" | "success" | "error";

export type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
  service: string;
  page: string;
  company: string;
};

/** POST to /api/contact; throws with the server's message on failure. */
export async function postContact(payload: ContactPayload): Promise<void> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
  if (!res.ok || !data.ok) throw new Error(data.error || `Something went wrong. Please call ${site.phone}.`);
}

export function Field({
  id,
  label,
  required = false,
  children,
  className = "",
}: {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelCls}>
        {label} {required ? <span className="text-amber-600">*</span> : <span className="font-normal text-ink-500">(optional)</span>}
      </label>
      {children}
    </div>
  );
}

export function Honeypot({ id }: { id: string }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label htmlFor={id}>Company</label>
      <input id={id} name="company" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function SuccessCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div role="status" className="rounded-[14px] border border-sand-200 bg-white p-8 text-center shadow-card">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-amber-100 text-amber-600">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2.2}>
          <path d="m5 12 5 5 9-10" />
        </svg>
      </div>
      <h3 className="mt-5 text-2xl font-bold">{title}</h3>
      <div className="mt-3 text-ink-500">{children}</div>
    </div>
  );
}

export function ErrorNote({ message }: { message: string }) {
  return (
    <p role="alert" className="mt-4 rounded-lg bg-amber-100 px-4 py-3 text-sm text-navy-900">
      {message}
    </p>
  );
}

export const val = (fd: FormData, key: string) => String(fd.get(key) ?? "").trim();
