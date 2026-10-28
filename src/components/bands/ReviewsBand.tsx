import Link from "next/link";
import type { ReactNode } from "react";
import type { Testimonial } from "@/content/types";
import { testimonials } from "@/content/testimonials";
import { getService } from "@/content/services";
import { site } from "@/content/site";
import { reviewsHeadline } from "@/content/company";
import Testimonials from "@/components/Testimonials";
import Container from "@/components/ui/Container";
import { renderTitle, Stars } from "./BandHead";

export type ReviewsBandProps = {
  title?: ReactNode;
  limit?: number;
  /** service slug: matching reviews are shown first */
  service?: string;
};

const STOP = new Set(["and", "the", "home", "remodeling", "&", "services"]);

function sortForService(list: Testimonial[], slug?: string): Testimonial[] {
  const svc = slug ? getService(slug) : undefined;
  if (!svc) return list;
  const words = `${svc.title} ${svc.navLabel}`
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter((w) => w.length > 3 && !STOP.has(w))
    .map((w) => w.replace(/s$/, ""));
  const score = (t: Testimonial) => {
    const hay = `${t.service ?? ""} ${t.text}`.toLowerCase();
    return words.reduce((n, w) => n + (hay.includes(w) ? 1 : 0), 0);
  };
  return [...list].sort((a, b) => score(b) - score(a));
}

const badges = [
  { name: "Google", value: `${site.ratings.google.score} ★`, note: "Rating", href: site.ratings.google.href },
  { name: "Yelp", value: `${site.ratings.yelp.score} ★`, note: "Rating", href: site.ratings.yelp.href },
  { name: "BBB", value: site.ratings.bbb.grade, note: "Accredited", href: site.ratings.bbb.href },
];

export default function ReviewsBand({ title = reviewsHeadline, limit = 6, service }: ReviewsBandProps) {
  const items = sortForService(testimonials, service);

  return (
    <section className="section-y bg-white">
      <Container>
        <div className="mb-10 grid gap-8 md:mb-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-3">Reviews</p>
            <div className="flex items-center gap-4">
              <span className="font-heading text-[3.25rem] font-extrabold leading-none text-navy-900 md:text-[4rem]">
                {site.ratings.google.score}
              </span>
              <span className="flex flex-col gap-1">
                <Stars className="h-6 w-6" />
                <span className="text-[13px] font-semibold text-ink-500">Google rating</span>
              </span>
            </div>
            <h2 className="h2-display mt-5 max-w-[22ch]">{renderTitle(title)}</h2>
            <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-ink-500">
              Real reviews from real jobs, posted on Google, Yelp and the BBB. Names shortened for privacy.
            </p>
          </div>
          <ul className="grid grid-cols-3 gap-3">
            {badges.map((b) => (
              <li key={b.name}>
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col items-center rounded-[14px] border border-navy-900/[.08] bg-sand-50 px-2 py-4 text-center transition-colors hover:border-amber-500"
                >
                  <span className="font-heading text-[11px] font-bold uppercase tracking-[.14em] text-ink-500">{b.name}</span>
                  <span className="mt-1 font-heading text-[1.5rem] font-extrabold text-navy-900">{b.value.endsWith(" ★") ? (<>{b.value.slice(0, -2)} <span className="text-champagne">★</span></>) : b.value}</span>
                  <span className="text-[12px] text-ink-500">{b.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Testimonials items={items} limit={limit} />

        <div className="mt-8 text-center">
          <Link href="/reviews" className="inline-flex items-center gap-1.5 font-heading text-sm font-bold text-navy-900 hover:text-amber-600">
            Read all reviews <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
