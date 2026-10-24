"use client";

import { useId, useState } from "react";

type Props = { min: number; max: number; start: number; low: number; high: number; note: string };

const fmt = (n: number) => `$${(Math.round(n / 1000) * 1000).toLocaleString("en-US")}`;

/** Square-footage slider: typical cost range for a finished room addition. */
export default function AdditionSizeCost({ min, max, start, low, high, note }: Props) {
  const id = useId();
  const [sqft, setSqft] = useState(start);
  const pct = ((sqft - min) / (max - min)) * 100;

  return (
    <div className="grid gap-8 rounded-[18px] border border-sand-200 bg-white p-5 shadow-card sm:p-7 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12">
      <div>
        <label htmlFor={id} className="flex items-baseline justify-between gap-4">
          <span className="font-heading text-sm font-bold text-navy-900">Size of the new room</span>
          <span className="font-heading text-2xl font-extrabold text-navy-900">
            {sqft} <span className="text-base font-bold text-ink-500">sq ft</span>
          </span>
        </label>
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={10}
          value={sqft}
          onChange={(e) => setSqft(Number(e.target.value))}
          className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full accent-amber-500"
          style={{ background: `linear-gradient(to right, #C9A44C ${pct}%, #E3E3E3 ${pct}%)` }}
        />
        <div className="mt-2 flex justify-between text-[12px] font-semibold text-ink-500">
          <span>{min} sq ft</span>
          <span>{max} sq ft</span>
        </div>
        <p className="mt-5 text-[14px] leading-relaxed text-ink-500">
          For scale: a 12×12 bedroom is about 150 sq ft; a bedroom with a bath and walk-in closet is often 350–450 sq ft.
        </p>
      </div>

      <div className="rounded-[14px] bg-navy-950 p-6 text-white" aria-live="polite">
        <p className="font-heading text-xs font-bold uppercase tracking-[.16em] text-amber-500">Typical finished-room range</p>
        <p className="mt-2 font-heading text-3xl font-extrabold !text-white sm:text-4xl">
          {fmt(sqft * low)} – {fmt(sqft * high)}
        </p>
        <p className="mt-1 text-sm text-navy-100/80">
          at ${low}–${high} per sq ft, 2026 Southwest Florida
        </p>
        <p className="mt-5 border-t border-white/10 pt-4 text-[13px] leading-relaxed text-navy-100/75">{note}</p>
      </div>
    </div>
  );
}
