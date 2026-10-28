import type { Testimonial } from "@/content/types";

function Stars() {
  return (
    <div className="flex gap-0.5 text-champagne" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
          <path d="M10 1.5 12.6 7l6 .7-4.5 4.1 1.2 5.9L10 14.8l-5.3 2.9 1.2-5.9L1.4 7.7l6-.7L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ items, limit }: { items: Testimonial[]; limit?: number }) {
  const list = typeof limit === "number" ? items.slice(0, limit) : items;
  return (
    <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {list.map((t, i) => (
        <li key={`${t.name}-${i}`} className="flex">
          <figure className="flex w-full flex-col rounded-[14px] border border-navy-900/[.06] bg-white p-6 shadow-card md:p-7">
            <Stars />
            <blockquote className="mt-4 flex-1 text-[15px] leading-[1.6] text-ink-900">
              <p>&ldquo;{t.text}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-navy-900/[.08] pt-5">
              <span className="min-w-0">
                <span className="block font-heading font-extrabold text-navy-900">{t.name}</span>
                <span className="block text-sm text-ink-500">{[t.city, t.service].filter(Boolean).join(" · ")}</span>
              </span>
              <span className="shrink-0 rounded-full bg-navy-50 px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-[.1em] text-navy-900">
                {t.source}
              </span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
