"use client";

import { useId, useState } from "react";
import type { FloorMaterial } from "@/content/service-pages/flooring";

type Range = { low: number; high: number };
type Props = {
  materials: FloorMaterial[];
  tileRemoval: Range;
  leveling: Range;
  min: number;
  max: number;
  start: number;
  note: string;
};

const fmt = (n: number) => `$${(Math.round(n / 100) * 100).toLocaleString("en-US")}`;

/** Square footage × material, plus optional tile removal and heavy leveling. */
export default function FloorCostCalculator({ materials, tileRemoval, leveling, min, max, start, note }: Props) {
  const id = useId();
  const [sqft, setSqft] = useState(start);
  const [mat, setMat] = useState(0);
  const [removeTile, setRemoveTile] = useState(false);
  const [heavyLevel, setHeavyLevel] = useState(false);

  const m = materials[mat];
  const low = m.low + (removeTile ? tileRemoval.low : 0) + (heavyLevel ? leveling.low : 0);
  const high = m.high + (removeTile ? tileRemoval.high : 0) + (heavyLevel ? leveling.high : 0);
  const pct = ((sqft - min) / (max - min)) * 100;

  const toggle = (on: boolean, set: (v: boolean) => void, label: string, extra: Range) => (
    <label
      className={`flex cursor-pointer items-start gap-3 rounded-[12px] border p-4 transition focus-within:ring-2 focus-within:ring-amber-500 ${
        on ? "border-amber-500 bg-amber-100/60" : "border-sand-200 bg-white hover:border-amber-500/60"
      }`}
    >
      <input type="checkbox" checked={on} onChange={(e) => set(e.target.checked)} className="mt-1 h-4 w-4 accent-amber-500" />
      <span>
        <span className="block font-heading text-[15px] font-bold text-navy-900">{label}</span>
        <span className="mt-0.5 block text-[13px] text-ink-500">
          adds ${extra.low}–${extra.high} per sq ft
        </span>
      </span>
    </label>
  );

  return (
    <div className="grid gap-8 rounded-[18px] border border-sand-200 bg-white p-5 shadow-card sm:p-7 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
      <div className="space-y-7">
        <fieldset>
          <legend className="font-heading text-sm font-bold text-navy-900">Floor</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {materials.map((x, i) => (
              <label
                key={x.label}
                className={`cursor-pointer rounded-[12px] border px-4 py-3 font-heading text-[15px] font-bold transition focus-within:ring-2 focus-within:ring-amber-500 ${
                  mat === i ? "border-navy-900 bg-navy-900 text-white" : "border-sand-200 text-navy-900 hover:border-amber-500/60"
                }`}
              >
                <input type="radio" className="sr-only" name={`${id}-mat`} checked={mat === i} onChange={() => setMat(i)} />
                {x.label}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor={`${id}-sqft`} className="flex items-baseline justify-between gap-4">
            <span className="font-heading text-sm font-bold text-navy-900">Area</span>
            <span className="font-heading text-2xl font-extrabold text-navy-900">
              {sqft.toLocaleString("en-US")} <span className="text-base font-bold text-ink-500">sq ft</span>
            </span>
          </label>
          <input
            id={`${id}-sqft`}
            type="range"
            min={min}
            max={max}
            step={50}
            value={sqft}
            onChange={(e) => setSqft(Number(e.target.value))}
            className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full accent-amber-500"
            style={{ background: `linear-gradient(to right, #C9A44C ${pct}%, #E3E3E3 ${pct}%)` }}
          />
          <div className="mt-2 flex justify-between text-[12px] font-semibold text-ink-500">
            <span>{min} sq ft</span>
            <span>{max.toLocaleString("en-US")} sq ft</span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {toggle(removeTile, setRemoveTile, "Old tile comes out first", tileRemoval)}
          {toggle(heavyLevel, setHeavyLevel, "Slab needs heavy leveling", leveling)}
        </div>
      </div>

      <div className="flex flex-col rounded-[14px] bg-navy-950 p-6 text-white" aria-live="polite">
        <p className="font-heading text-xs font-bold uppercase tracking-[.16em] text-amber-500">Typical installed range</p>
        <p className="mt-2 font-heading text-3xl font-extrabold !text-white sm:text-4xl">
          {fmt(sqft * low)} – {fmt(sqft * high)}
        </p>
        <p className="mt-1 text-sm text-navy-100/80">
          {m.label}, ${low}–${high} per sq ft
        </p>
        <p className="mt-4 text-[14px] leading-relaxed text-navy-100/85">{m.note}</p>
        <p className="mt-auto border-t border-white/10 pt-4 text-[12px] leading-relaxed text-navy-100/60">{note}</p>
      </div>
    </div>
  );
}
