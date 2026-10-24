"use client";

import { useId, useState } from "react";

const fmt = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;
const parse = (v: string) => Number(v.replace(/[^0-9.]/g, "")) || 0;

/**
 * Rough 50% substantial-damage self-check for FEMA flood zones: repair cost as a
 * share of the structure's market value. Informational only; the building
 * department makes the actual determination.
 */
export default function SubstantialDamageCheck({ note }: { note: string }) {
  const id = useId();
  const [value, setValue] = useState("250,000");
  const [repair, setRepair] = useState("90,000");

  const v = parse(value);
  const r = parse(repair);
  const pct = v > 0 ? (r / v) * 100 : 0;
  const level = pct >= 50 ? "over" : pct >= 40 ? "close" : "under";
  const headroom = Math.max(0, v * 0.5 - r);

  const field = (label: string, hint: string, val: string, set: (s: string) => void, key: string) => (
    <label htmlFor={`${id}-${key}`} className="block">
      <span className="block font-heading text-sm font-bold text-navy-900">{label}</span>
      <span className="mt-0.5 block text-[13px] text-ink-500">{hint}</span>
      <span className="mt-2 flex items-center rounded-[10px] border border-sand-200 bg-white px-3 focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-500/30">
        <span className="font-heading font-bold text-ink-500">$</span>
        <input
          id={`${id}-${key}`}
          inputMode="numeric"
          autoComplete="off"
          value={val}
          onChange={(e) => set(e.target.value)}
          onBlur={() => set(parse(val) ? parse(val).toLocaleString("en-US") : "")}
          className="min-h-12 w-full bg-transparent px-2 font-heading text-lg font-bold text-navy-900 outline-none"
        />
      </span>
    </label>
  );

  return (
    <div className="grid gap-6 rounded-[18px] border border-sand-200 bg-white p-5 shadow-card sm:p-7 lg:grid-cols-[1fr_1.2fr] lg:gap-10">
      <div className="space-y-5">
        {field("Structure market value", "The house only, not the land", value, setValue, "value")}
        {field("Estimated repair cost", "All repairs, at market rates", repair, setRepair, "repair")}
      </div>

      <div className="flex flex-col justify-center" aria-live="polite">
        <p className="font-heading text-xs font-bold uppercase tracking-[.16em] text-amber-600">Repairs as a share of the structure</p>
        <p className="mt-1 font-heading text-5xl font-extrabold text-navy-900">{v > 0 ? `${Math.round(pct)}%` : "—"}</p>

        <div className="relative mt-5" aria-hidden="true">
          <div className="h-4 overflow-hidden rounded-full bg-sand-100">
            <div
              className={`h-full rounded-full transition-[width] duration-500 ${level === "over" ? "bg-[#B4442E]" : level === "close" ? "bg-amber-500" : "bg-navy-900"}`}
              style={{ width: `${Math.min(100, pct)}%` }}
            />
          </div>
          <div className="absolute -top-1 bottom-[-4px] left-1/2 w-0.5 bg-navy-950" />
          <div className="mt-2 flex justify-between text-[11px] font-semibold text-ink-500">
            <span>0%</span>
            <span className="-translate-x-1">50% threshold</span>
            <span>100%</span>
          </div>
        </div>

        <p className="mt-5 text-[15px] leading-relaxed text-ink-900">
          {v <= 0
            ? "Enter the structure value to see the share."
            : level === "over"
              ? "At or over 50%. If the house is in a special flood hazard area, expect the building department to review it as substantially damaged before repairs are permitted. Talk to us before demolition goes further."
              : level === "close"
                ? `Close to the line: about ${fmt(headroom)} of headroom. Hidden damage found mid-job can push a project over, so we check this before the rebuild starts.`
                : `Under the threshold, with about ${fmt(headroom)} of headroom. Repairs can usually be permitted as ordinary repairs.`}
        </p>
        <p className="mt-4 border-t border-sand-200 pt-4 text-[13px] leading-relaxed text-ink-500">{note}</p>
      </div>
    </div>
  );
}
