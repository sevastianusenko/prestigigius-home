"use client";

import { useState } from "react";
import type { TimelineScope } from "@/content/service-pages/kitchen-remodeling";

const COLORS = ["bg-navy-950", "bg-amber-500", "bg-navy-700", "bg-ink-500", "bg-[#8C8C8C]", "bg-navy-100"];

/**
 * "How long will I be without a kitchen?": one stacked bar per project type,
 * scaled to the longest schedule so the scopes can be compared at a glance.
 */
export default function KitchenTimeline({ scopes }: { scopes: TimelineScope[] }) {
  const [active, setActive] = useState(1);
  const current = scopes[active];
  const total = (s: TimelineScope) => s.phases.reduce((n, p) => n + p.weeks, 0);
  const max = Math.max(...scopes.map(total));
  const ticks = Array.from({ length: Math.ceil(max) + 1 }, (_, i) => i);

  return (
    <div className="rounded-[18px] border border-sand-200 bg-white p-5 shadow-card sm:p-7">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Kitchen project type">
        {scopes.map((s, i) => {
          const on = i === active;
          return (
            <button
              key={s.title}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls="kitchen-timeline-panel"
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 font-heading text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                on ? "bg-navy-900 text-white" : "bg-sand-100 text-navy-900 hover:bg-amber-100"
              }`}
            >
              {s.title}
            </button>
          );
        })}
      </div>

      <div id="kitchen-timeline-panel" role="tabpanel" className="mt-7">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <p className="font-heading text-xs font-bold uppercase tracking-[.16em] text-amber-600">Without a working kitchen</p>
          <p className="font-heading text-3xl font-extrabold text-navy-900">{current.range}</p>
        </div>

        {/* bar */}
        <div className="mt-4">
          <div className="flex h-12 overflow-hidden rounded-[10px] bg-sand-100" aria-hidden="true">
            {current.phases.map((p, i) => (
              <div
                key={p.label}
                className={`${COLORS[i % COLORS.length]} flex items-center justify-center border-r-2 border-white transition-[width] duration-500 last:border-r-0`}
                style={{ width: `${(p.weeks / max) * 100}%` }}
              >
                <span className={`font-heading text-xs font-extrabold ${COLORS[i % COLORS.length] === "bg-navy-100" || COLORS[i % COLORS.length] === "bg-amber-500" ? "text-navy-950" : "text-white"}`}>
                  {i + 1}
                </span>
              </div>
            ))}
          </div>
          <div className="relative mt-2 h-5 text-[11px] font-semibold text-ink-500" aria-hidden="true">
            {ticks.map((t) => (
              <span
                key={t}
                className={`absolute whitespace-nowrap ${t === 0 ? "" : t >= max ? "-translate-x-full" : "-translate-x-1/2"} ${t < max && (t % 2 || t > max - 2) ? "hidden sm:inline" : ""}`}
                style={{ left: `${(t / max) * 100}%` }}
              >
                {t === 0 ? "Demo" : `wk ${t}`}
              </span>
            ))}
          </div>
        </div>

        {/* phases */}
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {current.phases.map((p, i) => (
            <li key={p.label} className="flex gap-3">
              <span
                className={`${COLORS[i % COLORS.length]} grid h-8 w-8 shrink-0 place-items-center rounded-full font-heading text-xs font-extrabold ${
                  COLORS[i % COLORS.length] === "bg-navy-100" || COLORS[i % COLORS.length] === "bg-amber-500" ? "text-navy-950" : "text-white"
                }`}
              >
                {i + 1}
              </span>
              <span>
                <span className="block font-heading text-[15px] font-bold text-navy-900">
                  {p.label} <span className="font-semibold text-ink-500">· ~{p.weeks < 1 ? "a few days" : `${p.weeks} wk`}</span>
                </span>
                <span className="mt-1 block text-[14px] leading-relaxed text-ink-500">{p.text}</span>
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-6 border-t border-sand-200 pt-4 text-sm text-ink-500">
          A typical schedule at the long end of the range. Your contract has your own start and finish dates; inspections and
          stone fabrication are the usual variables.
        </p>
      </div>
    </div>
  );
}
