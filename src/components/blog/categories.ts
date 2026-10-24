import type { Post } from "@/content/types";
import { getService } from "@/content/services";

export type Category = { slug: string; label: string; count: number };

/** Short label for a service slug ("kitchen-remodeling" -> "Kitchen Remodeling"). */
export function categoryLabel(slug: string): string {
  return getService(slug)?.navLabel ?? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Primary category of a post = its first related service. */
export function postCategory(post: Post): { slug: string; label: string } | null {
  const slug = post.relatedServices[0];
  return slug ? { slug, label: categoryLabel(slug) } : null;
}

/** Every service referenced by any post, most-used first (ties keep first-seen order). */
export function postCategories(posts: Post[]): Category[] {
  const counts = new Map<string, number>();
  for (const p of posts) for (const s of p.relatedServices) counts.set(s, (counts.get(s) ?? 0) + 1);
  return [...counts.entries()]
    .map(([slug, count]) => ({ slug, label: categoryLabel(slug), count }))
    .sort((a, b) => b.count - a.count);
}
