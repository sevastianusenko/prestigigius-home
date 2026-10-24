"use client";

import { useId, useMemo, useState } from "react";
import PostCard, { type PostCardData } from "./PostCard";

export type ResourceItem = {
  post: PostCardData;
  /** label of the primary category */
  category?: string;
  /** every related service slug (chip filter) */
  tags: string[];
  /** lowercased title + excerpt + keywords for the search box */
  haystack: string;
};

type Props = {
  items: ResourceItem[];
  categories: { slug: string; label: string; count: number }[];
};

const ALL = "all";

/**
 * Resource hub list: search box, category chips, featured guide and grid.
 * Without JS every guide is rendered (featured + grid), so nothing is hidden.
 */
export default function ResourceGrid({ items, categories }: Props) {
  const [active, setActive] = useState(ALL);
  const [query, setQuery] = useState("");
  const searchId = useId();

  const q = query.trim().toLowerCase();
  const filtered = useMemo(
    () =>
      items.filter(
        (it) => (active === ALL || it.tags.includes(active)) && (!q || q.split(/\s+/).every((w) => it.haystack.includes(w))),
      ),
    [items, active, q],
  );

  const showFeatured = active === ALL && !q && filtered.length > 0;
  const [featured, ...rest] = filtered;
  const grid = showFeatured ? rest : filtered;
  const activeLabel = categories.find((c) => c.slug === active)?.label;

  const chip = (selected: boolean) =>
    `inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors ${
      selected
        ? "border-navy-900 bg-navy-900 text-white"
        : "border-sand-200 bg-white text-navy-900 hover:border-navy-900"
    }`;

  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={active === ALL} onClick={() => setActive(ALL)} className={chip(active === ALL)}>
            All guides <span className="text-xs opacity-70">{items.length}</span>
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              aria-pressed={active === c.slug}
              onClick={() => setActive(c.slug)}
              className={chip(active === c.slug)}
            >
              {c.label} <span className="text-xs opacity-70">{c.count}</span>
            </button>
          ))}
        </div>
        <div className="relative w-full lg:max-w-xs">
          <label htmlFor={searchId} className="visually-hidden">
            Search resources
          </label>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides"
            className="block h-11 w-full rounded-full border border-sand-200 bg-white pl-10 pr-4 text-[15px] text-ink-900 placeholder:text-ink-500/70 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
          />
        </div>
      </div>

      <p role="status" aria-live="polite" className="visually-hidden">
        {filtered.length} {filtered.length === 1 ? "guide" : "guides"}
        {activeLabel ? ` in ${activeLabel}` : ""}
        {q ? ` matching “${query.trim()}”` : ""}
      </p>

      {showFeatured && featured ? (
        <div className="mt-10">
          <PostCard post={featured.post} category={featured.category} featured priority />
        </div>
      ) : null}

      {grid.length > 0 ? (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {grid.map((it) => (
            <li key={it.post.slug} className="min-w-0">
              <PostCard post={it.post} category={it.category} />
            </li>
          ))}
        </ul>
      ) : null}

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-[14px] border border-dashed border-sand-200 bg-white p-10 text-center">
          <p className="font-heading text-lg font-bold text-navy-900">No guides match that yet.</p>
          <p className="mt-2 text-ink-500">Try a broader word, or show every guide.</p>
          <button
            type="button"
            onClick={() => {
              setActive(ALL);
              setQuery("");
            }}
            className="mt-5 text-sm font-semibold text-sea-600 hover:underline"
          >
            Show all guides
          </button>
        </div>
      ) : null}
    </div>
  );
}
