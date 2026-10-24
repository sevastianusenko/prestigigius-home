import Link from "next/link";
import { clusterOf } from "@/content/blog-clusters";
import type { Post } from "@/content/types";

/** "More on this topic": links between a pillar article and its supporting articles. */
export default function TopicCluster({ slug, posts }: { slug: string; posts: Post[] }) {
  const cluster = clusterOf(slug);
  if (!cluster) return null;
  const items = [cluster.pillar, ...cluster.children]
    .filter((s) => s !== slug)
    .map((s) => posts.find((p) => p.slug === s))
    .filter((p): p is Post => Boolean(p));
  if (!items.length) return null;
  return (
    <aside className="mt-12 rounded-[14px] border border-sand-200 bg-sand-50 p-6 md:p-7" aria-labelledby="topic-cluster-heading">
      <p className="eyebrow">More on this topic</p>
      <h2 id="topic-cluster-heading" className="mt-2 font-heading text-xl font-extrabold text-navy-900">
        {cluster.topic}
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((p) => (
          <li key={p.slug}>
            <Link href={`/resources/${p.slug}`} className="group flex items-start gap-3">
              <span aria-hidden="true" className="mt-1 text-amber-500">→</span>
              <span>
                <span className="font-semibold text-navy-900 group-hover:text-amber-600">{p.title}</span>
                <span className="mt-0.5 block text-sm text-ink-500">{p.excerpt}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
