"use client";

import Image from "next/image";
import { useCallback, useId, useRef, useState } from "react";
import type { Photo } from "@/content/types";

export default function BeforeAfter({ before, after, label }: { before: Photo; after: Photo; label?: string }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <figure className="w-full">
      <div
        ref={ref}
        className={`relative aspect-[4/3] w-full touch-pan-y select-none overflow-hidden rounded-[14px] bg-navy-50 shadow-card md:aspect-[16/10] ${
          dragging ? "cursor-grabbing" : "cursor-ew-resize"
        }`}
        onPointerDown={(e) => {
          (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
          setDragging(true);
          update(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging) update(e.clientX);
        }}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
      >
        {/* AFTER (base layer) */}
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes="(min-width: 1024px) 1100px, 100vw"
          className="pointer-events-none object-cover"
          draggable={false}
        />
        {/* BEFORE (clipped layer) */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image
            src={before.src}
            alt={before.alt}
            fill
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="pointer-events-none object-cover"
            draggable={false}
          />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-navy-950/80 px-3 py-1 font-heading text-[11px] font-bold tracking-[.14em] text-white">
          BEFORE
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-amber-500 px-3 py-1 font-heading text-[11px] font-bold tracking-[.14em] text-navy-950">
          AFTER
        </span>

        {/* Divider + handle */}
        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }} aria-hidden="true">
          <div className="absolute inset-y-0 -translate-x-1/2 w-0.5 bg-white shadow-[0_0_0_1px_rgb(0_0_0/0.1)]" />
          <div className="absolute top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-amber-500 text-navy-950 shadow-card">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6-6 6 6 6M15 6l6 6-6 6" />
            </svg>
          </div>
        </div>

        {/* Accessible control: keyboard + screen readers */}
        <label htmlFor={id} className="sr-only">
          {label ? `${label}: ` : ""}Before and after comparison. Use arrow keys to reveal more of the before or after photo.
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          step={1}
          value={Math.round(pos)}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-valuetext={`${Math.round(pos)}% before photo shown`}
          className="peer absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          onPointerDown={(e) => e.stopPropagation()}
          style={{ pointerEvents: "none" }}
        />
        <div className="pointer-events-none absolute inset-0 rounded-[14px] ring-amber-500 ring-offset-2 peer-focus-visible:ring-2" />
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-ink-500">
        <span className="font-heading font-bold text-navy-900">{label}</span>
        <span className="inline-flex shrink-0 items-center gap-1.5 font-heading text-[12px] font-bold uppercase tracking-[.12em]">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />
          </svg>
          Drag to compare
        </span>
      </figcaption>
    </figure>
  );
}
