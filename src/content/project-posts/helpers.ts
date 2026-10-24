import type { Photo } from "../types";
import { projectPhotoDims } from "./dims";

/**
 * Build a Photo for a REAL client job photo.
 * Files live at /public/images/projects/<slug>/<NN>.jpg (EXIF/GPS stripped).
 *
 * @param slug     project slug (folder name)
 * @param n        1-based photo number (01.jpg = 1)
 * @param category Photo category
 * @param alt      what is literally visible in the photo (for screen readers + image SEO)
 * @param caption  short expert note shown under the photo ("What you're looking at")
 */
export function jobPhoto(
  slug: string,
  n: number,
  category: Photo["category"],
  alt: string,
  caption?: string,
): Photo {
  const dims = projectPhotoDims[slug]?.[n - 1];
  if (!dims) throw new Error(`jobPhoto: no photo #${n} for "${slug}"`);
  const nn = String(n).padStart(2, "0");
  return {
    id: `${slug}-${nn}`,
    src: `/images/projects/${slug}/${nn}.jpg`,
    alt,
    category,
    width: dims[0],
    height: dims[1],
    caption,
    credit: "Prestigious Home Improvements",
  };
}
