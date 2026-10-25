import type { Metadata } from "next";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import FaqBand from "@/components/bands/FaqBand";
import ServiceAreasBand from "@/components/bands/ServiceAreasBand";
import MapEmbed from "@/components/company/MapEmbed";
import { AREA_MAP_EMBED_URL } from "@/components/company/utils";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, ShieldIcon } from "@/components/company/icons";
import { contactNext } from "@/content/company";
import { generalFaqs } from "@/content/faqs";
import { site } from "@/content/site";
import { ORG_ID, absoluteUrl, faqSchema } from "@/lib/seo";

import { OG_DEFAULT } from "@/components/og";
const title = "Contact Us, Port Charlotte";
const description = `Call ${site.phone} or send a message for a free in-home estimate, Sarasota to Bonita Springs. ${site.hours}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    images: [OG_DEFAULT], title, description, url: "/contact", type: "website" },
};

const crumbs = [{ label: "Contact" }];

const h2Cls = "font-heading text-3xl font-extrabold leading-tight text-navy-900 md:text-[2.2rem]";

/** "You Hear Back From Tim, Not a Call Center" — four short promises about the reply. */
const replyPromises: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Quick replies on weekdays",
    text: `Messages are answered during office hours, ${site.hours}. We call back within one business day.`,
    icon: <ClockIcon className="h-5 w-5" />,
  },
  {
    title: "An owner, not a call center",
    text: "The person who calls you back is part of the family business, and the same people price and run your job.",
    icon: <ShieldIcon className="h-5 w-5" />,
  },
  {
    title: "Call, text or email",
    text: "Use whatever is easiest for you. Photos sent by text or email help us show up prepared.",
    icon: <PhoneIcon className="h-5 w-5" />,
  },
  {
    title: "Free, with no obligation",
    text: "The visit and the written estimate cost nothing, and nobody will push you to sign on the spot.",
    icon: <MailIcon className="h-5 w-5" />,
  },
];

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Prestigious Home Improvements",
    url: absoluteUrl("/contact"),
    description,
    mainEntity: {
      "@type": "GeneralContractor",
      "@id": ORG_ID,
      name: site.name,
      telephone: site.phone,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.zip,
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone,
        email: site.email,
        contactType: "customer service",
        areaServed: "US-FL",
        availableLanguage: ["English"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      },
    },
  };

  const quick = [
    { label: "Call", value: site.phone, href: site.phoneHref, icon: <PhoneIcon className="h-4 w-4" /> },
    { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: <MailIcon className="h-4 w-4" /> },
    { label: "Hours", value: site.hours, icon: <ClockIcon className="h-4 w-4" /> },
    { label: "Service area", value: site.counties.join(", "), icon: <PinIcon className="h-4 w-4" /> },
  ];

  return (
    <>
      <Schema data={contactSchema} />
      <Schema data={faqSchema(generalFaqs)} />

      {/* 1. Hero with the form beside it */}
      <section className="bg-sand-100">
        <Container className="pb-14 pt-8 md:pb-[72px]">
          <Breadcrumbs items={crumbs} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
            <div>
              <Eyebrow>Contact us</Eyebrow>
              <h1 className="mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-900 md:text-5xl lg:text-[3.5rem]">
                Get in touch with Prestigious Home Improvements.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
                Thinking about a remodel, new windows or a repair that has waited too long? Send a few details and someone
                from our team will help you figure out the next step.
              </p>
              <ul className="mt-8 space-y-4">
                {quick.map((q) => (
                  <li key={q.label} className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-600">
                      {q.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-[.14em] text-ink-500">{q.label}</span>
                      {q.href ? (
                        <a href={q.href} className="break-all font-semibold text-navy-900 hover:text-sea-600">
                          {q.value}
                        </a>
                      ) : (
                        <span className="font-semibold text-navy-900">{q.value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div id="estimate-form">
              <h2 className="visually-hidden">Request a free estimate</h2>
              <LeadForm />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Trust strip */}
      <TrustStrip />

      {/* 3. What happens next */}
      <section className="bg-sand-50 py-16 md:py-[72px]" aria-labelledby="next-heading">
        <Container>
          <div className="max-w-[1010px]">
            <Eyebrow>What happens next</Eyebrow>
            <h2 id="next-heading" className={`mt-3 ${h2Cls}`}>
              One Call, Three Simple Steps From Here.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
              No sales pressure and nothing to sign, just a straightforward path from your first call to a price on
              paper. Your written estimate holds for 90 days.
            </p>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {contactNext.map((step, i) => (
              <li key={step.title} className="rounded-[14px] bg-white p-7 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-navy-900 font-heading text-lg font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#estimate-form"
              className="inline-flex h-12 items-center rounded-full px-6 font-semibold btn-black"
            >
              Get my free estimate
            </a>
            <a href={site.phoneHref} className="font-semibold text-navy-900 hover:text-sea-600">
              {site.phone}
            </a>
          </div>
        </Container>
      </section>

      {/* 4. A real person */}
      <section className="bg-sand-100 py-16 md:py-[72px]" aria-labelledby="reply-heading">
        <Container>
          <div className="max-w-[1010px]">
            <Eyebrow>When you reach out</Eyebrow>
            <h2 id="reply-heading" className={`mt-3 ${h2Cls}`}>
              You Hear Back From Tim, Not a Call Center
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
              Your message lands with a small local team, not an inbox nobody checks. This is what the reply looks like.
            </p>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {replyPromises.map((r) => (
              <li key={r.title} className="rounded-[14px] bg-white p-6 shadow-card">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-amber-100 text-amber-600">{r.icon}</span>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy-900">{r.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{r.text}</p>
              </li>
            ))}
          </ul>
          <dl className="mt-10 grid gap-6 rounded-[14px] bg-navy-900 p-7 text-navy-100 md:grid-cols-3 md:p-8">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[.14em] text-navy-100/70">Phone</dt>
              <dd className="mt-1">
                <a href={site.phoneHref} className="text-lg font-bold text-white hover:text-amber-500">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[.14em] text-navy-100/70">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="break-all font-semibold text-white hover:text-amber-500">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[.14em] text-navy-100/70">Hours</dt>
              <dd className="mt-1 font-semibold text-white">{site.hours}</dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* 5. Where we work from (area map, no street address) */}
      <section className="bg-sand-50 py-16 md:py-[72px]" aria-labelledby="where-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-14">
            <div>
              <Eyebrow>Where we are</Eyebrow>
              <h2 id="where-heading" className={`mt-3 ${h2Cls}`}>
                Where We Work From
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">
                We are a licensed, family-owned contractor based in {site.address.city}, working in homes across{" "}
                {site.counties.join(", ").replace(/, ([^,]*)$/, " and $1")}. Estimates happen at your house, so there is
                no showroom to visit.
              </p>
              <ul className="mt-6 space-y-2 text-[15px] text-ink-900">
                <li className="flex items-center gap-2">
                  <PinIcon className="h-4 w-4 text-amber-600" />
                  {site.address.city}, {site.address.state} · {site.address.county}
                </li>
                <li className="flex items-center gap-2">
                  <ShieldIcon className="h-4 w-4 text-amber-600" />
                  {site.licenseLabel}
                </li>
              </ul>
            </div>
            <MapEmbed src={AREA_MAP_EMBED_URL} title={`Map of the ${site.address.city}, Florida area`} />
          </div>
        </Container>
      </section>

      {/* 6. FAQ */}
      <FaqBand eyebrow="Frequently asked questions" title="Questions Homeowners Ask Before They Call" items={generalFaqs} />

      {/* 7. Service areas */}
      <ServiceAreasBand />

      {/* 8. CTA */}
      <CtaBand />
    </>
  );
}
