"use client";

import { useState } from "react";

type Layer = { title: string; text: string; bullets?: string[] };

/** Band styles for the cross-section, studs on the left, tile on the right. */
const BANDS = [
  { width: "24%", style: { background: "repeating-linear-gradient(0deg,#9A9A9A 0 14px,#7A7A7A 14px 16px)" } },
  { width: "18%", style: { background: "repeating-radial-gradient(circle at 30% 30%,#A3A3A6 0 1px,#8E8E92 1px 3px)" } },
  { width: "12%", style: { background: "#C9A44C" } },
  { width: "12%", style: { background: "repeating-linear-gradient(135deg,#5A5A5A 0 6px,#C9A44C 6px 12px)" } },
  { width: "34%", style: { background: "repeating-linear-gradient(0deg,#F7F7F7 0 46px,#D6D6D6 46px 49px)" } },
];

/**
 * "What goes behind the tile": a schematic wall cross-section. Picking a layer on
 * the left highlights it in the diagram. A drawing, not a job photo, so it never
 * claims to show our own work.
 */
export default function WallLayers({
  layers,
  label = "Shower wall layers",
  inside = "Inside the wall",
  outside = "Your side",
}: {
  layers: Layer[];
  label?: string;
  inside?: string;
  outside?: string;
}) {
  const [active, setActive] = useState(0);
  const current = layers[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-12">
      <ol className="space-y-3" role="tablist" aria-label={label}>
        {layers.map((l, i) => {
          const on = i === active;
          return (
            <li key={l.title}>
              <button
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls="wall-layer-panel"
                onClick={() => setActive(i)}
                className={`flex w-full items-start gap-4 rounded-[14px] border p-4 text-left transition md:p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  on ? "border-amber-500 bg-white shadow-card" : "border-sand-200 bg-white/60 hover:border-amber-500/60 hover:bg-white"
                }`}
              >
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-heading text-sm font-extrabold transition ${
                    on ? "bg-amber-500 text-navy-950" : "bg-navy-900 text-white"
                  }`}
                >
                  0{i + 1}
                </span>
                <span className="min-w-0">
                  <span className="block font-heading text-[1.05rem] font-bold leading-snug text-navy-900">{l.title}</span>
                  <span className={`mt-1 block text-[15px] leading-relaxed text-ink-500 ${on ? "" : "line-clamp-2 lg:line-clamp-none"}`}>
                    {l.text}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <figure id="wall-layer-panel" role="tabpanel" className="lg:sticky lg:top-24">
        <div className="overflow-hidden rounded-[18px] bg-navy-950 p-5 shadow-card sm:p-7">
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[.16em] text-navy-100/70">
            <span>{inside}</span>
            <span>{outside}</span>
          </div>
          <div className="mt-3 flex h-[260px] overflow-hidden rounded-[10px] ring-1 ring-white/10 sm:h-[320px]" aria-hidden="true">
            {BANDS.slice(0, layers.length).map((b, i) => (
              <button
                key={i}
                type="button"
                tabIndex={-1}
                onClick={() => setActive(i)}
                className={`relative h-full transition-[opacity,filter,box-shadow] duration-300 ${i === active ? "z-10 shadow-[0_0_0_3px_#C9A44C]" : ""}`}
                style={{ width: b.width, ...b.style, opacity: i === active ? 1 : 0.5, filter: i === active ? "none" : "saturate(.5)" }}
              >
                <span
                  className={`absolute left-1/2 top-3 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full font-heading text-xs font-extrabold ${
                    i === active ? "bg-navy-950 text-amber-500" : "bg-navy-950/70 text-white"
                  }`}
                >
                  {i + 1}
                </span>
              </button>
            ))}
          </div>
          <figcaption className="mt-5">
            <p className="font-heading text-xs font-bold uppercase tracking-[.16em] text-amber-500">
              Layer {active + 1} of {layers.length} · schematic
            </p>
            <p className="mt-1 font-heading text-xl font-bold text-white">{current.title}</p>
            {current.bullets?.length ? (
              <ul className="mt-3 space-y-1.5">
                {current.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-[15px] leading-snug text-navy-100">
                    <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
