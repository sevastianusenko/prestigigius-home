import type { Post } from "@/content/types";
import { slugify } from "@/components/projects/utils";

export type TocItem = { id: string; label: string };

/** Stable id for a "## Heading" line. */
export function headingId(text: string): string {
  return slugify(text) || "section";
}

/** H2 headings in post order, de-duplicated ids (matches PostBody). */
export function postToc(body: string[]): TocItem[] {
  const seen = new Map<string, number>();
  const out: TocItem[] = [];
  for (const block of body) {
    for (const piece of block.split("\n")) {
      const line = piece.trim();
      if (!line.startsWith("## ")) continue;
      const label = line.slice(3).trim();
      out.push({ id: uniqueId(headingId(label), seen), label });
    }
  }
  return out;
}

export function uniqueId(base: string, seen: Map<string, number>): string {
  const n = seen.get(base) ?? 0;
  seen.set(base, n + 1);
  return n === 0 ? base : `${base}-${n + 1}`;
}

/** Up to `n` other posts: shared related services first, then newest. */
export function relatedPosts(current: Post, all: Post[], n = 3): Post[] {
  const others = [...all.filter((p) => p.slug !== current.slug)].sort((a, b) => b.date.localeCompare(a.date));
  const shares = (p: Post) => p.relatedServices.some((s) => current.relatedServices.includes(s));
  return [...others.filter(shares), ...others.filter((p) => !shares(p))].slice(0, n);
}
