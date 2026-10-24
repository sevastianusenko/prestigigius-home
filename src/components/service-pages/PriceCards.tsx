import type { ServiceScope } from "@/content/types";

/**
 * Compact project/price cards: title, summary, typical range and duration up front,
 * "What's included" in a native <details> (no JS, no empty flip-card space).
 */
export default function PriceCards({ scopes, featured = 0 }: { scopes: ServiceScope[]; featured?: number }) {
  return (
    <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {scopes.map((s, i) => (
        <li
          key={s.title}
          className={`flex flex-col rounded-[16px] border bg-white p-6 shadow-card ${i === featured ? "frame-gold" : "border-sand-200"}`}
        >
          {i === featured ? (
            <span className="mb-3 w-fit rounded-full bg-amber-100 px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-[.1em] text-navy-900">
              Most requested
            </span>
          ) : null}
          <h3 className="font-heading text-lg font-extrabold leading-snug text-navy-900">{s.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{s.summary}</p>
          <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-sand-200 pt-4">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[.14em] text-ink-500">Typical range</dt>
              <dd className="mt-1 font-heading text-[1.05rem] font-extrabold text-navy-900">{s.priceRange ?? "Priced on site"}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[.14em] text-ink-500">Timeline</dt>
              <dd className="mt-1 text-[14px] font-semibold leading-snug text-navy-900">{s.duration ?? "Set at estimate"}</dd>
            </div>
          </dl>
          <details className="group mt-4 border-t border-sand-200 pt-3">
            <summary className="flex cursor-pointer list-none items-center justify-between font-heading text-sm font-bold text-navy-900 marker:hidden hover:text-amber-600">
              What&apos;s included
              <span aria-hidden="true" className="text-amber-500 transition-transform group-open:rotate-45">+</span>
            </summary>
            <ul className="mt-3 space-y-2">
              {s.changes.map((c) => (
                <li key={c.label} className="text-[14px] leading-snug text-ink-500">
                  <span className="font-semibold text-navy-900">{c.label}:</span> {c.detail}
                </li>
              ))}
            </ul>
          </details>
        </li>
      ))}
    </ul>
  );
}
