"use client";

import { useId, useState } from "react";
import type { SystemRow } from "@/content/service-pages/home-restoration";

const TONE = {
  ok: { label: "Usually fine", dot: "bg-[#4E8A5B]", text: "text-[#3C6E47]" },
  watch: { label: "Worth a look", dot: "bg-amber-500", text: "text-navy-900" },
  flag: { label: "Likely flagged", dot: "bg-[#B4442E]", text: "text-[#8A2F1E]" },
} as const;

/** Pick what the house has for each system; see what a four-point inspector is likely to note. */
export default function FourPointCheck({ systems, note }: { systems: SystemRow[]; note: string }) {
  const id = useId();
  const [picks, setPicks] = useState<number[]>(() => systems.map(() => 0));

  const chosen = systems.map((s, i) => ({ row: s.label, ...s.options[picks[i]] }));
  const flags = chosen.filter((c) => c.status === "flag").length;
  const watches = chosen.filter((c) => c.status === "watch").length;

  const summary =
    flags > 0
      ? `${flags} item${flags > 1 ? "s" : ""} likely to be flagged. A systems restoration fixes these at the source, with permit records your insurer can see.`
      : watches > 0
        ? "Nothing obviously flagged, but worth a closer look before you renew or remodel."
        : "On paper, the systems look sound. A cosmetic refresh may be all the house needs.";

  return (
    <div className="grid gap-6 rounded-[18px] border border-sand-200 bg-white p-5 shadow-card sm:p-7 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
      <div className="space-y-6">
        {systems.map((s, i) => (
          <fieldset key={s.label}>
            <legend className="font-heading text-[15px] font-bold text-navy-900">{s.label}</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-3">
              {s.options.map((o, j) => {
                const on = picks[i] === j;
                return (
                  <label
                    key={o.label}
                    className={`flex cursor-pointer items-center gap-2 rounded-[10px] border px-3 py-2.5 text-[14px] font-semibold leading-snug transition focus-within:ring-2 focus-within:ring-amber-500 ${
                      on ? "border-navy-900 bg-navy-900 text-white" : "border-sand-200 text-navy-900 hover:border-amber-500/60"
                    }`}
                  >
                    <input
                      type="radio"
                      className="sr-only"
                      name={`${id}-${i}`}
                      checked={on}
                      onChange={() => setPicks((p) => p.map((v, k) => (k === i ? j : v)))}
                    />
                    <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${TONE[o.status].dot}`} />
                    {o.label}
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="flex flex-col rounded-[14px] bg-sand-50 p-6" aria-live="polite">
        <p className="font-heading text-xs font-bold uppercase tracking-[.16em] text-amber-600">What an inspector is likely to note</p>
        <ul className="mt-4 space-y-4">
          {chosen.map((c) => (
            <li key={c.row}>
              <p className="flex items-center justify-between gap-3">
                <span className="font-heading text-[15px] font-bold text-navy-900">{c.row}</span>
                <span className={`flex items-center gap-1.5 whitespace-nowrap text-[13px] font-bold ${TONE[c.status].text}`}>
                  <span aria-hidden="true" className={`h-2 w-2 rounded-full ${TONE[c.status].dot}`} />
                  {TONE[c.status].label}
                </span>
              </p>
              <p className="mt-0.5 text-[13px] leading-snug text-ink-500">{c.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 rounded-[10px] bg-navy-950 p-4 font-heading text-[15px] font-bold leading-snug text-white">{summary}</p>
        <p className="mt-4 text-[12px] leading-relaxed text-ink-500">{note}</p>
      </div>
    </div>
  );
}
