"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import { useTabs } from "./useTabs";
import type { Photo } from "@/content/types";

type Step = { n: string; title: string; text: string; photo: Photo };

/**
 * "How an impact window goes in": step list on the left, the matching real job
 * photo on the right. Works as a plain list on mobile (each step shows its photo).
 */
export default function InstallSteps({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);
  const current = steps[active];
  const tabs = useTabs(steps.length, active, setActive);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-12">
      <div className="space-y-3" {...tabs.listProps} aria-orientation="vertical" aria-label="Installation steps">
        {steps.map((s, i) => {
          const on = i === active;
          return (
            <Fragment key={s.n}>
              <button
                type="button"
                {...tabs.tabProps(i)}
                className={`group flex w-full items-start gap-4 rounded-[14px] border p-4 text-left transition md:p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  on ? "border-amber-500 bg-white shadow-card" : "border-sand-200 bg-white/60 hover:border-amber-500/60 hover:bg-white"
                }`}
              >
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-heading text-sm font-extrabold transition ${
                    on ? "bg-amber-500 text-navy-950" : "bg-navy-900 text-white"
                  }`}
                >
                  {s.n}
                </span>
                <span className="min-w-0">
                  <span className="block font-heading text-[1.05rem] font-bold leading-snug text-navy-900">{s.title}</span>
                  <span className={`mt-1 block text-[15px] leading-relaxed text-ink-500 ${on ? "" : "line-clamp-2 lg:line-clamp-none"}`}>
                    {s.text}
                  </span>
                </span>
              </button>
              {/* mobile: photo under the active step (decorative copy; the tabpanel carries it for screen readers) */}
              {on ? (
                <figure aria-hidden="true" className="mt-3 lg:hidden">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-navy-950">
                    <Image src={s.photo.src} alt="" fill sizes="100vw" className="object-cover" />
                  </div>
                  {s.photo.caption ? <figcaption className="mt-2 text-sm text-ink-500">{s.photo.caption}</figcaption> : null}
                </figure>
              ) : null}
            </Fragment>
          );
        })}
      </div>

      <figure {...tabs.panelProps} className="sr-only lg:not-sr-only lg:sticky! lg:top-24">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-navy-950 shadow-card">
          <Image key={current.photo.src} src={current.photo.src} alt={current.photo.alt} fill sizes="560px" className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent p-5 pt-16">
            <p className="font-heading text-xs font-bold uppercase tracking-[.16em] text-amber-500">
              Step {current.n} · our job photo
            </p>
            <p className="mt-1 text-[15px] leading-snug text-white">{current.photo.caption ?? current.photo.alt}</p>
          </div>
        </div>
      </figure>
    </div>
  );
}
