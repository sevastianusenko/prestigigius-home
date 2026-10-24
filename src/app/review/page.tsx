import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { reviewPage } from "@/content/about";
import { site } from "@/content/site";

const title = "Leave a Review | Prestigious Home Improvements";
const description =
  "Thank you for letting us work on your house. A short review on Google, Yelp or the BBB helps your neighbors see what working with us is like.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/review" },
  robots: { index: false, follow: false },
};

const hrefs = {
  google: site.ratings.google.href,
  yelp: site.ratings.yelp.href,
  bbb: site.ratings.bbb.href,
} as const;

export default function ReviewPage() {
  return (
    <section className="bg-sand-50 py-10 md:py-16">
      <Container className="max-w-2xl">
        <Breadcrumbs items={[{ label: "Leave a Review" }]} />
        <div className="mt-10 rounded-[14px] border border-sand-200 bg-white p-8 text-center shadow-card md:p-12">
          <p className="eyebrow">From Tim &amp; Vlad</p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight text-navy-900 md:text-5xl">
            {reviewPage.title}
          </h1>
          <p className="mt-4 font-heading text-xl font-bold text-navy-900">{reviewPage.ask}</p>
          <p className="mx-auto mt-3 max-w-md text-ink-500">{reviewPage.lead}</p>

          <ul className="mt-8 grid gap-3 text-left">
            {reviewPage.platforms.map((p) => (
              <li key={p.key}>
                <a
                  href={hrefs[p.key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between gap-4 rounded-full px-6 py-4 transition-colors ${
                    p.primary
                      ? " btn-black"
                      : "border border-sand-200 bg-white text-navy-900 hover:border-navy-900"
                  }`}
                >
                  <span>
                    <span className="block font-heading text-lg font-bold">
                      Review us on {p.label}
                      {p.primary ? <span className="ml-2 text-xs font-semibold uppercase tracking-[.14em]">Start here</span> : null}
                    </span>
                    <span className={`block text-sm ${p.primary ? "text-navy-950/80" : "text-ink-500"}`}>{p.note}</span>
                  </span>
                  <span aria-hidden="true" className="text-xl">
                    ↗
                  </span>
                  <span className="visually-hidden">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-ink-500">
            {reviewPage.problem}{" "}
            <a href={site.phoneHref} className="font-semibold text-sea-600 hover:underline">
              {site.phone}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
