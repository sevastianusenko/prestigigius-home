"use client";

import { useState } from "react";
import { useTabs } from "./useTabs";
import type { Sequence } from "@/content/service-pages/exterior-remodeling";

/** Two orders of work side by side: the right sequence vs. the one that pays twice. */
export default function SequenceToggle({ sequences }: { sequences: Sequence[] }) {
  const [active, setActive] = useState(0);
  const current = sequences[active];
  const bad = current.tone === "bad";
  const tabs = useTabs(sequences.length, active, setActive);

  return (
    <div className="rounded-[18px] border border-sand-200 bg-white p-5 shadow-card sm:p-7">
      <div className="inline-flex rounded-full bg-sand-100 p-1" {...tabs.listProps} aria-label="Order of exterior work">
        {sequences.map((s, i) => {
          const on = i === active;
          return (
            <button
              key={s.label}
              type="button"
              {...tabs.tabProps(i)}
              className={`rounded-full px-5 py-2 font-heading text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                on ? (s.tone === "bad" ? "bg-[#B4442E] text-white" : "bg-navy-900 text-white") : "text-navy-900 hover:text-amber-600"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      <div {...tabs.panelProps} className="mt-7">
        <ol className="grid gap-4 md:grid-cols-5">
          {current.steps.map((s, i) => (
            <li
              key={s.title}
              className={`relative flex flex-col rounded-[14px] border p-4 transition ${
                s.redo ? "border-[#B4442E]/40 bg-[#B4442E]/[.06]" : "border-sand-200 bg-sand-50"
              }`}
            >
              <span
                className={`grid h-9 w-9 place-items-center rounded-full font-heading text-sm font-extrabold ${
                  s.redo ? "bg-[#B4442E] text-white" : "bg-navy-900 text-amber-500"
                }`}
              >
                {i + 1}
              </span>
              <span className="mt-3 font-heading text-[15px] font-bold leading-snug text-navy-900">{s.title}</span>
              <span className="mt-1.5 text-[14px] leading-relaxed text-ink-500">{s.text}</span>
              {s.redo ? (
                <span className="mt-3 w-fit rounded-full bg-[#B4442E] px-2.5 py-0.5 font-heading text-[11px] font-bold uppercase tracking-[.08em] text-white">
                  Paid twice
                </span>
              ) : null}
            </li>
          ))}
        </ol>
        <p
          className={`mt-6 rounded-[12px] px-5 py-4 font-heading text-[1.05rem] font-bold ${
            bad ? "bg-[#B4442E]/10 text-[#8A2F1E]" : "bg-amber-100 text-navy-900"
          }`}
          aria-live="polite"
        >
          {current.result}
        </p>
      </div>
    </div>
  );
}
