import Image from "next/image";
import type { ReactNode } from "react";
import type { Photo } from "@/content/types";
import { photos as allPhotos } from "@/content/photos";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CheckIcon } from "./BandHead";

/** 25 smaller tiles (5 x 5). Tiles are 4:3 like the photos themselves, so nothing is
 *  cropped and stretched (a 3:2 photo in a portrait tile was upscaled ~1.4x and looked
 *  soft). Only the first four load eagerly (see `lcp`). */
const COLS = 5;
const ROWS = 5;

/** Interleave categories so neighbouring tiles show different kinds of work. */
function defaultWall(): Photo[] {
  const order: Photo["category"][] = [
    "kitchen",
    "exterior",
    "bathroom",
    "lanai",
    "windows-doors",
    "whole-home",
    "outdoor-living",
    "addition",
    "flooring",
    "siding-stucco",
    "painting",
    "restoration",
    "florida",
    "hero",
  ];
  // Skip panoramic and small shots that would be upscaled in a 4:3 tile and look soft.
  const sharp = (p: Photo) => !p.height || (p.height >= 1000 && (!p.width || p.width / p.height <= 1.6));
  const buckets = order.map((c) => allPhotos.filter((p) => p.category === c && sharp(p)));
  const out: Photo[] = [];
  for (let round = 0; out.length < COLS * ROWS && round < 20; round++) {
    for (const b of buckets) {
      if (b[round]) out.push(b[round]);
      if (out.length >= COLS * ROWS) break;
    }
  }
  return out;
}

export type HeroWallProps = {
  eyebrow: string;
  /** one entry per headline line; may hold spans that hide on small screens */
  lines: ReactNode[];
  accentLast?: boolean;
  lead: ReactNode;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  bullets?: string[];
  photos?: Photo[];
};

export default function HeroWall({
  eyebrow,
  lines,
  accentLast = true,
  lead,
  primary,
  secondary,
  bullets = [],
  photos,
}: HeroWallProps) {
  const source = photos && photos.length ? photos : defaultWall();
  // Fill COLS x ROWS tiles, wrapping if fewer photos were given.
  const tiles = source.length
    ? Array.from({ length: COLS * ROWS }, (_, i) => source[i % source.length])
    : [];
  const columns = Array.from({ length: COLS }, (_, c) => tiles.filter((_, i) => i % COLS === c));

  return (
    <section className="relative isolate flex min-h-[500px] items-center overflow-hidden bg-navy-950 py-10 sm:min-h-[560px] sm:py-14 md:min-h-[640px] md:py-20">
      {/* Photo mosaic */}
      <div aria-hidden="true" className="hero-wall__grid">
        {columns.map((col, c) => (
          <div
            key={c}
            className={`hero-wall__col ${c >= 4 ? "hidden lg:flex" : c >= 3 ? "hidden md:flex" : ""}`}
          >
            {col.map((p, r) => {
              // The first two rows of the two always-visible columns are the LCP
              // candidates (the grid is rotated, so any of them can be largest on a phone);
              // everything else waits.
              const lcp = c <= 1 && r <= 1;
              return (
                <div key={`${p.id}-${r}`} className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-navy-900">
                  <Image
                    src={p.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 27vw, (min-width: 768px) 34vw, 45vw"
                    quality={85}
                    className="object-cover"
                    priority={lcp}
                    fetchPriority={lcp ? "high" : "low"}
                    loading={lcp ? undefined : "lazy"}
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Navy tint: strongest behind the copy */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgb(17_17_17/.82)_0%,rgb(17_17_17/.55)_50%,rgb(17_17_17/.28)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-navy-950/45 to-transparent"
      />

      <Container className="relative z-[2]">
        <div className="max-w-[640px]">
          <p className="eyebrow eyebrow-dark mb-4">{eyebrow}</p>
          <h1 className="h1-display !text-white">
            {lines.map((line, i) => (
              <span
                key={i}
                className={`block ${accentLast && i === lines.length - 1 ? "text-amber-500" : ""}`}
              >
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-[56ch] text-[1.15rem] leading-[1.6] text-white/88 md:text-[1.3rem]">{lead}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button variant="gold" href={primary.href} size="lg">
              {primary.label}
              <span aria-hidden="true">→</span>
            </Button>
            {secondary && (
              <Button href={secondary.href} size="lg" variant="outline-white">
                {secondary.label}
              </Button>
            )}
          </div>
          {bullets.length > 0 && (
            <ul className="mt-8 flex flex-col gap-x-6 gap-y-2.5 sm:flex-row sm:flex-wrap">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-[15px] font-semibold text-white/92">
                  <CheckIcon className="h-5 w-5 text-amber-500" />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}
