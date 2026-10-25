import type { Photo } from "@/content/types";
import { photos } from "@/content/photos";

export const fallbackPhoto: Photo = {
  id: "fallback-hero",
  src: "/images/stock/hero-01.jpg",
  alt: "Renovated home exterior",
  category: "hero",
  width: 1600,
  height: 1067,
};

function byCategory(category: Photo["category"]): Photo[] {
  const list: Photo[] = Array.isArray(photos) ? photos : [];
  return list.filter((p) => p.category === category);
}

/** Pick the i-th photo of a category (wraps around); falls back to a neutral hero photo. */
export function photo(category: Photo["category"], i = 0): Photo {
  const list = byCategory(category);
  if (list.length === 0) {
    const hero = byCategory("hero");
    if (hero.length === 0) return fallbackPhoto;
    return hero[((i % hero.length) + hero.length) % hero.length];
  }
  return list[((i % list.length) + list.length) % list.length];
}

/** n photos of a category (wrapping if fewer exist). */
export function photosOf(category: Photo["category"], n: number): Photo[] {
  return Array.from({ length: Math.max(0, n) }, (_, i) => photo(category, i));
}
