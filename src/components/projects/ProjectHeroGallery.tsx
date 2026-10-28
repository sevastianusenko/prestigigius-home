"use client";

import Image from "next/image";
import { useState } from "react";
import BeforeAfter from "@/components/BeforeAfter";
import type { Photo } from "@/content/types";

type View = { kind: "compare" } | { kind: "photo"; photo: Photo; tag: string };

/**
 * Project hero gallery for REAL job photos: a large stage with the photo's expert
 * caption underneath and a thumbnail row. The before/after slider is offered only
 * when the project has a genuine before/after pair (`beforeAfter`).
 */
export default function ProjectHeroGallery({
  before,
  after,
  gallery,
  title,
  beforeAfter = false,
}: {
  before: Photo;
  after: Photo;
  gallery: Photo[];
  title: string;
  beforeAfter?: boolean;
}) {
  const seen = new Set<string>();
  const uniq = (p: Photo) => (seen.has(p.src) ? false : (seen.add(p.src), true));
  const views: View[] = [
    { kind: "photo", photo: after, tag: beforeAfter ? "After" : "Photo 1" },
    ...(beforeAfter ? [{ kind: "compare" } as View] : []),
  ];
  uniq(after);
  gallery.filter(uniq).forEach((photo) => views.push({ kind: "photo", photo, tag: `Photo ${views.filter((v) => v.kind === "photo").length + 1}` }));
  if (beforeAfter && uniq(before)) views.push({ kind: "photo", photo: before, tag: "Before" });

  const [active, setActive] = useState(0);
  const view = views[active];
  const total = views.length;

  return (
    <div>
      <div className="mx-auto max-w-5xl">
        {view.kind === "compare" ? (
          <>
            <BeforeAfter before={before} after={after} label={title} />
            <p className="mt-3 text-center text-sm text-ink-500">
              Same wall before and after. Drag the handle, or use the arrow keys, to compare.
            </p>
          </>
        ) : (
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy-950 shadow-card md:aspect-[16/10]">
              <Image
                key={view.photo.src}
                src={view.photo.src}
                alt={view.photo.alt || title}
                fill
                priority={active === 0}
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-contain"
              />
              <span className="absolute left-4 top-4 rounded-full glass-chip px-3 py-1 text-xs font-bold uppercase tracking-[.14em] text-white">
                {view.tag}
              </span>
              {total > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => setActive((active - 1 + total) % total)}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy-900 shadow-card hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    <span aria-hidden="true">&larr;</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActive((active + 1) % total)}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy-900 shadow-card hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </>
              ) : null}
            </div>
            <figcaption className="mt-3 text-[15px] leading-relaxed text-ink-500">
              {view.photo.caption ?? view.photo.alt}
            </figcaption>
          </figure>
        )}
      </div>

      {total > 1 ? (
        <ul className="mx-auto mt-4 flex max-w-5xl gap-3 overflow-x-auto pb-1 [scrollbar-width:thin]" aria-label="Project photos">
          {views.map((v, i) => {
            const on = i === active;
            const thumb = v.kind === "compare" ? after : v.photo;
            const label = v.kind === "compare" ? "Before and after slider" : `${v.tag}: ${v.photo.alt}`;
            return (
              <li key={i} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  aria-label={label}
                  className={`relative block h-16 w-24 overflow-hidden rounded-lg border-2 transition md:h-20 md:w-28 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    on ? "border-amber-500" : "border-transparent opacity-80 hover:opacity-100"
                  }`}
                >
                  <Image src={thumb.src} alt="" fill sizes="112px" className="object-cover" />
                  {v.kind === "compare" ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 bg-navy-950/75 py-0.5 text-center text-[10px] font-bold uppercase tracking-[.12em] text-white"
                    >
                      Compare
                    </span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
