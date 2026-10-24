"use client";

import { useId, useState } from "react";
import type { BuilderOption } from "@/content/service-pages/outdoor-living";

type Props = {
  pavers: { low: number; high: number; min: number; max: number; start: number };
  covers: BuilderOption[];
  kitchens: BuilderOption[];
  note: string;
};

const fmt = (n: number) => `$${(Math.round(n / 500) * 500).toLocaleString("en-US")}`;

function Choice({ name, options, value, onChange }: { name: string; options: BuilderOption[]; value: number; onChange: (i: number) => void }) {
  return (
    <div className="grid gap-2 sm:grid-cols-3">
      {options.map((o, i) => (
        <label
          key={o.label}
          className={`cursor-pointer rounded-[12px] border px-3 py-3 text-center font-heading text-[14px] font-bold transition focus-within:ring-2 focus-within:ring-amber-500 ${
            value === i ? "border-navy-900 bg-navy-900 text-white" : "border-sand-200 text-navy-900 hover:border-amber-500/60"
          }`}
        >
          <input type="radio" className="sr-only" name={name} checked={value === i} onChange={() => onChange(i)} />
          {o.label}
        </label>
      ))}
    </div>
  );
}

/** Pavers + cover + kitchen: a summed ballpark for a backyard project. */
export default function BackyardBuilder({ pavers, covers, kitchens, note }: Props) {
  const id = useId();
  const [sqft, setSqft] = useState(pavers.start);
  const [cover, setCover] = useState(2);
  const [kitchen, setKitchen] = useState(1);

  const parts = [
    { label: sqft ? `${sqft} sq ft of pavers` : "No new pavers", low: sqft * pavers.low, high: sqft * pavers.high },
    { label: covers[cover].label, low: covers[cover].low, high: covers[cover].high },
    { label: kitchens[kitchen].label, low: kitchens[kitchen].low, high: kitchens[kitchen].high },
  ];
  const low = parts.reduce((n, p) => n + p.low, 0);
  const high = parts.reduce((n, p) => n + p.high, 0);
  const pct = ((sqft - pavers.min) / (pavers.max - pavers.min)) * 100;

  return (
    <div className="grid gap-8 rounded-[18px] border border-sand-200 bg-white p-5 shadow-card sm:p-7 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
      <div className="space-y-7">
        <div>
          <label htmlFor={`${id}-sqft`} className="flex items-baseline justify-between gap-4">
            <span className="flex items-center gap-3 font-heading text-[1.05rem] font-bold text-navy-900">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-navy-900 text-xs font-extrabold text-amber-500">1</span>
              Pavers
            </span>
            <span className="font-heading text-2xl font-extrabold text-navy-900">
              {sqft} <span className="text-base font-bold text-ink-500">sq ft</span>
            </span>
          </label>
          <input
            id={`${id}-sqft`}
            type="range"
            min={pavers.min}
            max={pavers.max}
            step={25}
            value={sqft}
            onChange={(e) => setSqft(Number(e.target.value))}
            className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full accent-amber-500"
            style={{ background: `linear-gradient(to right, #C9A44C ${pct}%, #E3E3E3 ${pct}%)` }}
          />
          <div className="mt-2 flex justify-between text-[12px] font-semibold text-ink-500">
            <span>None</span>
            <span>{pavers.max.toLocaleString("en-US")} sq ft</span>
          </div>
        </div>
        <fieldset>
          <legend className="flex items-center gap-3 font-heading text-[1.05rem] font-bold text-navy-900">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-navy-900 text-xs font-extrabold text-amber-500">2</span>
            Cover overhead
          </legend>
          <div className="mt-3">
            <Choice name={`${id}-cover`} options={covers} value={cover} onChange={setCover} />
          </div>
        </fieldset>
        <fieldset>
          <legend className="flex items-center gap-3 font-heading text-[1.05rem] font-bold text-navy-900">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-navy-900 text-xs font-extrabold text-amber-500">3</span>
            Outdoor kitchen
          </legend>
          <div className="mt-3">
            <Choice name={`${id}-kitchen`} options={kitchens} value={kitchen} onChange={setKitchen} />
          </div>
        </fieldset>
      </div>

      <div className="flex flex-col rounded-[14px] bg-navy-950 p-6 text-white" aria-live="polite">
        <p className="font-heading text-xs font-bold uppercase tracking-[.16em] text-amber-500">Typical project range</p>
        <p className="mt-2 font-heading text-3xl font-extrabold !text-white sm:text-4xl">{high ? `${fmt(low)} – ${fmt(high)}` : "Choose at least one"}</p>
        <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-[14px]">
          {parts
            .filter((p) => p.high > 0)
            .map((p) => (
              <li key={p.label} className="flex justify-between gap-4">
                <span className="text-navy-100/85">{p.label}</span>
                <span className="whitespace-nowrap font-semibold text-white">
                  {fmt(p.low)}–{fmt(p.high)}
                </span>
              </li>
            ))}
        </ul>
        <p className="mt-auto pt-5 text-[12px] leading-relaxed text-navy-100/60">{note}</p>
      </div>
    </div>
  );
}
