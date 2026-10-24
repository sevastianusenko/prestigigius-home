"use client";

import { useRef, useState } from "react";
import type { ServiceScope } from "@/content/types";

/**
 * "Which project is yours?" flip cards.
 * Both faces share one grid cell so the card always fits the taller face.
 * The hidden face is `inert` so keyboard and screen-reader users only meet
 * the visible side; focus moves to the matching button after each flip.
 */
function ScopeCard({ scope, index }: { scope: ServiceScope; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const frontBtn = useRef<HTMLButtonElement>(null);
  const backBtn = useRef<HTMLButtonElement>(null);
  const id = `scope-${index}`;

  function flip(next: boolean) {
    setFlipped(next);
    // wait for the inert attribute to be removed before focusing
    requestAnimationFrame(() => (next ? backBtn.current : frontBtn.current)?.focus());
  }

  return (
    <li className="[perspective:1600px]">
      <div
        className={`grid h-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div
          inert={flipped}
          aria-hidden={flipped}
          className="card col-start-1 row-start-1 flex flex-col p-6 [backface-visibility:hidden]"
        >
          <h3 id={`${id}-title`} className="text-xl">
            {scope.title}
          </h3>
          <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-500">{scope.summary}</p>
          {(scope.priceRange || scope.duration) && (
            <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-sand-200 pt-4 text-sm">
              {scope.priceRange && (
                <div>
                  <dt className="text-xs uppercase tracking-[.12em] text-ink-500">Typical range</dt>
                  <dd className="mt-1 font-heading text-base font-bold text-navy-900">{scope.priceRange}</dd>
                </div>
              )}
              {scope.duration && (
                <div>
                  <dt className="text-xs uppercase tracking-[.12em] text-ink-500">Duration</dt>
                  <dd className="mt-1 font-heading text-base font-bold text-navy-900">{scope.duration}</dd>
                </div>
              )}
            </dl>
          )}
          <button
            ref={frontBtn}
            type="button"
            onClick={() => flip(true)}
            aria-describedby={`${id}-title`}
            className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-amber-500 hover:text-white"
          >
            See what changes
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
              <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Back */}
        <div
          inert={!flipped}
          aria-hidden={!flipped}
          className="col-start-1 row-start-1 flex flex-col rounded-[12px] bg-navy-900 p-6 text-white shadow-[0_10px_30px_-12px_rgb(17_17_17/.25)] [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <p className="eyebrow">What changes</p>
          <h3 className="mt-2 text-lg !text-white">{scope.title}</h3>
          <dl className="mt-4 flex-1 space-y-3">
            {scope.changes.map((c) => (
              <div key={c.label} className="border-t border-navy-700 pt-3">
                <dt className="text-sm font-semibold text-amber-500">{c.label}</dt>
                <dd className="mt-0.5 text-sm leading-relaxed text-navy-100">{c.detail}</dd>
              </div>
            ))}
          </dl>
          <button
            ref={backBtn}
            type="button"
            onClick={() => flip(false)}
            aria-label={`Back to ${scope.title} summary`}
            className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-navy-100/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-amber-500 hover:text-amber-500"
          >
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
              <path d="M16 10H4M9 5l-5 5 5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>
        </div>
      </div>
    </li>
  );
}

export default function ScopeCards({ scopes }: { scopes: ServiceScope[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {scopes.map((s, i) => (
        <ScopeCard key={s.title} scope={s} index={i} />
      ))}
    </ul>
  );
}
