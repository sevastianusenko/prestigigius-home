"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import type { Photo } from "@/content/types";

export type FeaturedSlide = {
  slug: string;
  title: string;
  /** "April 2026 · Port Charlotte" */
  meta: string;
  summary: string;
  photo: Photo;
};

/**
 * Featured-projects carousel. Manual only (no autoplay): prev/next buttons,
 * dot buttons and Left/Right arrow keys while focus is inside the carousel.
 * Follows the WAI-ARIA carousel pattern (region + slide roledescriptions).
 */
export default function FeaturedCarousel({ slides }: { slides: FeaturedSlide[] }) {
  const [index, setIndex] = useState(0);
  const id = useId();
  const count = slides.length;
  if (count === 0) return null;

  const go = (i: number) => setIndex(((i % count) + count) % count);
  const current = slides[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured projects"
      className="relative"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(index - 1);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          go(index + 1);
        }
      }}
    >
      <div className="overflow-hidden rounded-[14px] bg-white shadow-card">
        <div
          id={`${id}-slide`}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${count}: ${current.title}`}
          className="grid lg:grid-cols-[1.25fr_1fr]"
        >
          <div className="relative aspect-[4/3] bg-sand-100 lg:aspect-auto lg:min-h-[440px]">
            <Image
              key={current.photo.src}
              src={current.photo.src}
              alt={current.photo.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 660px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="eyebrow">Featured project</p>
            <p className="mt-3 text-sm font-medium text-ink-500">{current.meta}</p>
            <h3 className="mt-2 font-heading text-2xl font-extrabold leading-tight text-navy-900 md:text-[1.75rem]">
              {current.title}
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-500">{current.summary}</p>
            <Link
              href={`/projects/${current.slug}`}
              className="mt-7 inline-flex h-12 w-fit items-center gap-2 rounded-full px-6 font-semibold btn-black"
            >
              View full project <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {count > 1 ? (
        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show project ${i + 1}: ${s.title}`}
                aria-current={i === index ? "true" : undefined}
                aria-controls={`${id}-slide`}
                className="grid h-8 w-8 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span
                  aria-hidden="true"
                  className={`block h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-navy-900" : "w-2.5 bg-sand-200"}`}
                />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-controls={`${id}-slide`}
              aria-label="Previous project"
              className="grid h-11 w-11 place-items-center rounded-full border border-sand-200 bg-white text-navy-900 transition-colors hover:border-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12.5 4.5 7 10l5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-controls={`${id}-slide`}
              aria-label="Next project"
              className="grid h-11 w-11 place-items-center rounded-full border border-sand-200 bg-white text-navy-900 transition-colors hover:border-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M7.5 4.5 13 10l-5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      ) : null}

      <p className="visually-hidden" aria-live="polite" aria-atomic="true">
        {`Project ${index + 1} of ${count}: ${current.title}`}
      </p>
    </section>
  );
}
