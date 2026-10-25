import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import ReviewsBand from "@/components/bands/ReviewsBand";
import ServiceAreasBand from "@/components/bands/ServiceAreasBand";
import { StarIcon } from "@/components/company/icons";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";
import { ORG_ID, absoluteUrl } from "@/lib/seo";

import { OG_DEFAULT } from "@/components/og";
const title = "Reviews: 5.0 on Google and Yelp, A+ BBB | Prestigious";
const description =
  "Read real reviews from Sarasota, Englewood and Manatee County homeowners. 5.0 on Google and Yelp, BBB A+ accredited. Leave your own review.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/reviews" },
  openGraph: {
    images: [OG_DEFAULT], title, description, url: "/reviews", type: "website" },
};

const crumbs = [{ label: "Reviews" }];

export default function ReviewsPage() {
  const google = site.ratings.google;

  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": ORG_ID,
    name: site.name,
    url: absoluteUrl("/"),
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
  };

  const stats = [
    { value: `${google.score} stars`, label: "Average on Google" },
    { value: `${site.ratings.yelp.score} stars`, label: "Average on Yelp" },
    { value: site.ratings.bbb.grade, label: "BBB rating, accredited" },
  ];

  const leave = [
    { label: "Google", href: google.href },
    { label: "Yelp", href: site.ratings.yelp.href },
    { label: "BBB", href: site.ratings.bbb.href },
  ];

  return (
    <>
      <Schema data={ratingSchema} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"
        />
        <Container className="relative pb-16 pt-8 md:pb-[72px]">
          <div className="[&_a]:!text-navy-100/75 [&_a:hover]:!text-white [&_span]:!text-navy-100/90 [&_svg]:!text-navy-100/40">
            <Breadcrumbs items={crumbs} />
          </div>
          <div className="mt-10 max-w-[1010px]">
            <Eyebrow className="!text-amber-100">Homeowner reviews</Eyebrow>
            <h1 className="mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight !text-white md:text-[3.5rem]">
              Skip Our Sales Pitch. <span className="text-amber-500">Read Our Neighbors.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100/85">
              Real customers from around Southwest Florida, describing their jobs in their own words. Every review here
              was posted publicly on Google, Yelp or the BBB; we shorten last names to an initial and trim long reviews with an ellipsis.
            </p>
            <div className="mt-6 flex gap-0.5 text-amber-500" role="img" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-6 w-6" />
              ))}
            </div>
            <ul className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
              {stats.map((s) => (
                <li key={s.label} className="rounded-[14px] border border-white/15 bg-white/5 px-5 py-4">
                  <span className="block font-heading text-2xl font-extrabold text-white">{s.value}</span>
                  <span className="mt-1 block text-sm text-navy-100/75">{s.label}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-navy-100/75">
              Worked with us? Leave a review on{" "}
              {leave.map((l, i) => (
                <span key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white underline-offset-2 hover:underline"
                  >
                    {l.label}
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                  {i < leave.length - 2 ? ", " : i === leave.length - 2 ? " or " : "."}
                </span>
              ))}
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Trust strip */}
      <TrustStrip />

      {/* 3. All reviews */}
      <ReviewsBand limit={testimonials.length} />

      {/* 4. Service areas */}
      <ServiceAreasBand />

      {/* 5. CTA */}
      <CtaBand
        title="Ready to be our next five-star review?"
        text="Free in-home estimate anywhere from Sarasota and Lakewood Ranch down to Fort Myers and Bonita Springs. Written, itemized and free of pressure."
      />
    </>
  );
}
