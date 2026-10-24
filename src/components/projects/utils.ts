import type { Project } from "@/content/types";

/** "Port Charlotte" -> "port-charlotte" (used for /service-areas/[slug] links). */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** "2026-03" | "2026-03-15" -> "March 2026" */
export function formatMonthYear(date: string): string {
  const [y, m] = date.split("-").map(Number);
  if (!y || !m) return date;
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Newest first. Dates are ISO-like strings, so a string compare is correct. */
export function sortByDateDesc<T extends { date: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.date.localeCompare(a.date));
}

/** Up to `n` other projects: those sharing a service first, then the newest. */
export function relatedProjects(current: Project, all: Project[], n = 3): Project[] {
  const others = sortByDateDesc(all.filter((p) => p.slug !== current.slug));
  const shares = (p: Project) => p.serviceSlugs.some((s) => current.serviceSlugs.includes(s));
  return [...others.filter(shares), ...others.filter((p) => !shares(p))].slice(0, n);
}

/** Trim a meta description to `max` chars on a word boundary. */
export function clamp(text: string, max = 155): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(" "), 0)).replace(/[,;:\s]+$/, "")}…`;
}

/** Absolute URL for a site path. */
export function absUrl(path: string, base: string): string {
  return `${base}${path === "/" ? "" : path.startsWith("/") ? path : `/${path}`}`;
}

/** BreadcrumbList JSON-LD from the same items passed to <Breadcrumbs>. */
export function breadcrumbList(items: { label: string; href?: string }[], base: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: absUrl(c.href, base) } : {}),
    })),
  };
}

/** "2026-10-20" -> "October 20, 2026" */
export function formatLongDate(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  if (!y || !m) return date;
  return new Date(Date.UTC(y, m - 1, d || 1)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
