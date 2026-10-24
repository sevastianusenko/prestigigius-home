"use client";

import { useId, useState } from "react";

type Props = {
  interior: { low: number; high: number; min: number; max: number; start: number };
  exterior: { label: string; range: string }[];
  note: string;
};

const fmt = (n: number) => `$${(Math.round(n / 100) * 100).toLocaleString("en-US")}`;

/** Interior (sq ft slider) or exterior (house type) painting ballpark. */
export default function PaintEstimator({ interior, exterior, note }: Props) {
  const id = useId();
  const [mode, setMode] = useState<"interior" | "exterior">("interior");
  const [sqft, setSqft] = useState(interior.start);
  const [house, setHouse] = useState(0);
  const pct = ((sqft - interior.min) / (interior.max - interior.min)) * 100;

  return (
    <div className="rounded-[18px] border border-sand-200 bg-white p-5 shadow-card sm:p-7">
      <div className="inline-flex rounded-full bg-sand-100 p-1" role="tablist" aria-label="Interior or exterior painting">
        {(["interior", "exterior"] as const).map((m) => (
          <button
            key={m}
            type="button"
            role="tab"
            aria-selected={mode === m}
            onClick={() => setMode(m)}
            className={`rounded-full px-5 py-2 font-heading text-sm font-bold capitalize transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
              mode === m ? "bg-navy-900 text-white" : "text-navy-900 hover:text-amber-600"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="mt-7 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12">
        {mode === "interior" ? (
          <div>
            <label htmlFor={id} className="flex items-baseline justify-between gap-4">
              <span className="font-heading text-sm font-bold text-navy-900">Floor area being painted</span>
              <span className="font-heading text-2xl font-extrabold text-navy-900">
                {sqft.toLocaleString("en-US")} <span className="text-base font-bold text-ink-500">sq ft</span>
              </span>
            </label>
            <input
              id={id}
              type="range"
              min={interior.min}
              max={interior.max}
              step={50}
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
              className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full accent-amber-500"
              style={{ background: `linear-gradient(to right, #C9A44C ${pct}%, #E3E3E3 ${pct}%)` }}
            />
            <div className="mt-2 flex justify-between text-[12px] font-semibold text-ink-500">
              <span>{interior.min.toLocaleString("en-US")} sq ft</span>
              <span>{interior.max.toLocaleString("en-US")} sq ft</span>
            </div>
            <p className="mt-5 text-[14px] leading-relaxed text-ink-500">Walls, ceilings and trim, measured by the floor area of the rooms you want painted.</p>
          </div>
        ) : (
          <fieldset>
            <legend className="font-heading text-sm font-bold text-navy-900">Which is closer to your house?</legend>
            <div className="mt-3 grid gap-3">
              {exterior.map((e, i) => (
                <label
                  key={e.label}
                  className={`flex cursor-pointer items-center justify-between gap-4 rounded-[12px] border p-4 transition focus-within:ring-2 focus-within:ring-amber-500 ${
                    house === i ? "border-amber-500 bg-amber-100/60" : "border-sand-200 hover:border-amber-500/60"
                  }`}
                >
                  <input type="radio" className="sr-only" name={`${id}-house`} checked={house === i} onChange={() => setHouse(i)} />
                  <span className="font-heading text-[15px] font-bold text-navy-900">{e.label}</span>
                </label>
              ))}
            </div>
            <p className="mt-5 text-[14px] leading-relaxed text-ink-500">Includes washing, mildewcide, crack repair, primer where needed, and trim, fascia and doors.</p>
          </fieldset>
        )}

        <div className="rounded-[14px] bg-navy-950 p-6 text-white" aria-live="polite">
          <p className="font-heading text-xs font-bold uppercase tracking-[.16em] text-amber-500">
            Typical {mode} repaint
          </p>
          <p className="mt-2 font-heading text-3xl font-extrabold !text-white sm:text-4xl">
            {mode === "interior" ? `${fmt(sqft * interior.low)} – ${fmt(sqft * interior.high)}` : exterior[house].range}
          </p>
          {mode === "interior" ? (
            <p className="mt-1 text-sm text-navy-100/80">
              at ${interior.low}–${interior.high} per sq ft of floor area
            </p>
          ) : null}
          <p className="mt-5 border-t border-white/10 pt-4 text-[13px] leading-relaxed text-navy-100/75">{note}</p>
        </div>
      </div>
    </div>
  );
}
