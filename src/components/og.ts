import { site } from "@/content/site";

/**
 * Default Open Graph image (src/app/opengraph-image.tsx). In Next, a page's
 * `openGraph` object replaces the parent's, so pages that define `openGraph`
 * without their own image must list this one explicitly.
 */
export const OG_DEFAULT = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name} — Home Remodeling & Restoration in Port Charlotte, FL`,
};
