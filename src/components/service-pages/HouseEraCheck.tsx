"use client";

import { useState } from "react";
import type { HouseEra } from "@/content/service-pages/whole-home-remodeling";

function Check() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" fill="currentColor">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.58l7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
    </svg>
  );
}

/** "When was your house built?": pick a decade, see what the walk-through checks for. */
export default function HouseEraCheck({ eras }: { eras: HouseEra[] }) {
  const [active, setActive] = useState(1);
  const current = eras[active];

  return (
    <div className="overflow-hidden rounded-[18px] bg-navy-950 shadow-card">
      <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4" role="tablist" aria-label="Decade the house was built">
        {eras.map((e, i) => {
          const on = i === active;
          return (
            <button
              key={e.label}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls="house-era-panel"
              onClick={() => setActive(i)}
              className={`px-4 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-500 sm:py-5 ${
                on ? "bg-amber-500 text-navy-950" : "bg-navy-950 text-white hover:bg-navy-900"
              }`}
            >
              <span className="block font-heading text-2xl font-extrabold sm:text-3xl">{e.label}</span>
              <span className={`mt-0.5 block text-[13px] ${on ? "text-navy-950/80" : "text-navy-100/70"}`}>{e.years}</span>
            </button>
          );
        })}
      </div>

      <div id="house-era-panel" role="tabpanel" className="p-5 sm:p-7">
        <p className="font-heading text-xs font-bold uppercase tracking-[.16em] text-amber-500">
          What we check in a {current.label} house · {current.checks.length} items
        </p>
        <ul className="mt-5 grid gap-x-8 gap-y-5 md:grid-cols-2">
          {current.checks.map((c) => (
            <li key={c.title} className="flex gap-3">
              <Check />
              <span>
                <span className="block font-heading text-[1.02rem] font-bold leading-snug text-white">{c.title}</span>
                <span className="mt-1 block text-[15px] leading-relaxed text-navy-100/85">{c.text}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 border-t border-white/10 pt-4 text-sm text-navy-100/70">
          Typical findings for the era, not a diagnosis of your house. The walk-through is free, and what we find goes into the price
          before you sign.
        </p>
      </div>
    </div>
  );
}
