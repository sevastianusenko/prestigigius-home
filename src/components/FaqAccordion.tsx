"use client";

import { useId, useState } from "react";
import type { Faq } from "@/content/types";

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <div className="divide-y divide-sand-200 overflow-hidden rounded-[14px] border border-navy-900/[.06] bg-white shadow-card">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${base}-q-${i}`;
        const panelId = `${base}-a-${i}`;
        return (
          <div key={`${i}-${item.q}`} className="overflow-hidden rounded-[14px] border border-navy-900/[.06] bg-white shadow-card">
            <h3 className="!m-0 text-base">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left font-heading text-[16px] font-bold text-navy-900 transition-colors hover:bg-navy-50/60 md:px-6 md:py-5 md:text-[17px]"
              >
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition duration-300 ${
                    isOpen ? "rotate-45 border-amber-500 bg-amber-500 text-navy-950" : "border-navy-900/15 text-navy-900"
                  }`}
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M10 4v12M4 10h12" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-5 pb-5 text-[15px] leading-[1.65] text-ink-500 md:px-6 md:pb-6"
            >
              <p className="max-w-3xl">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
