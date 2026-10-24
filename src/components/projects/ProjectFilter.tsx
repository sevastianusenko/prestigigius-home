"use client";

import { useState, type ReactNode } from "react";

export type ProjectFilterOption = { slug: string; title: string; count: number };
export type ProjectFilterItem = { slug: string; serviceSlugs: string[]; card: ReactNode };

type Props = {
  /** Services that have at least one project, in `services` order. */
  options: ProjectFilterOption[];
  /** Server-rendered ProjectCards with the slugs needed to filter them. */
  items: ProjectFilterItem[];
};

const pillBase =
  "shrink-0 snap-start rounded-full border px-4 py-2 text-sm font-medium transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-50";
const pillOff = "border-sand-200 bg-white text-navy-900 hover:border-navy-700 hover:text-navy-700";
const pillOn = "border-navy-900 bg-navy-900 text-white";

export default function ProjectFilter({ options, items }: Props) {
  const [active, setActive] = useState<string>("all");
  const visible = active === "all" ? items : items.filter((i) => i.serviceSlugs.includes(active));
  const activeTitle = options.find((o) => o.slug === active)?.title;

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by service"
        className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        <button
          type="button"
          aria-pressed={active === "all"}
          onClick={() => setActive("all")}
          className={`${pillBase} ${active === "all" ? pillOn : pillOff}`}
        >
          All projects
          <span className={`ml-1.5 text-xs ${active === "all" ? "text-navy-100" : "text-ink-500"}`}>{items.length}</span>
        </button>
        {options.map((o) => {
          const on = active === o.slug;
          return (
            <button
              key={o.slug}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(o.slug)}
              className={`${pillBase} ${on ? pillOn : pillOff}`}
            >
              {o.title}
              <span className={`ml-1.5 text-xs ${on ? "text-navy-100" : "text-ink-500"}`}>{o.count}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-ink-500" aria-live="polite">
        Showing {visible.length} of {items.length} projects
        {activeTitle ? (
          <>
            {" "}
            in <span className="font-medium text-navy-900">{activeTitle}</span>
          </>
        ) : null}
      </p>

      {visible.length > 0 ? (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visible.map((i) => (
            <li key={i.slug} className="min-w-0">
              {i.card}
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8 rounded-xl border border-dashed border-sand-200 bg-white p-10 text-center">
          <p className="font-heading text-lg font-semibold text-navy-900">No projects in this category yet</p>
          <p className="mt-2 text-sm text-ink-500">Client photos for this service are on the way. In the meantime, see all projects.</p>
          <button
            type="button"
            onClick={() => setActive("all")}
            className="mt-5 rounded-full px-5 py-2.5 text-sm font-semibold btn-black"
          >
            Show all projects
          </button>
        </div>
      )}
    </div>
  );
}
