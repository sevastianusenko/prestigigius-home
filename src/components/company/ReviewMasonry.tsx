import type { Testimonial } from "@/content/types";
import { StarIcon } from "./icons";

function formatDate(d?: string) {
  if (!d) return null;
  const [y, m] = d.split("-").map(Number);
  if (!y) return d;
  if (!m) return String(y);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
}

/** All reviews in a 1/2/3-column masonry (CSS columns). */
export default function ReviewMasonry({ items }: { items: Testimonial[] }) {
  return (
    <ul className="columns-1 gap-6 md:columns-2 lg:columns-3">
      {items.map((t, i) => (
        <li key={`${t.name}-${i}`} className="mb-6 break-inside-avoid">
          <figure className="rounded-xl border border-sand-200 bg-white p-7 shadow-card">
            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-0.5 text-amber-500" role="img" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, k) => (
                  <StarIcon key={k} className="h-5 w-5" />
                ))}
              </div>
              <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-semibold text-ink-500">{t.source}</span>
            </div>
            <blockquote className="mt-5 text-[15px] leading-relaxed text-ink-900">
              <p>&ldquo;{t.text}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-6 border-t border-sand-200 pt-5">
              <span className="block font-heading font-bold text-navy-900">{t.name}</span>
              <span className="mt-0.5 block text-sm text-ink-500">
                {[t.city, t.service, formatDate(t.date)].filter(Boolean).join(" · ")}
              </span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
