import type { Metadata } from "next";
import { OG_DEFAULT } from "@/components/og";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import ReviewsBand from "@/components/bands/ReviewsBand";
import FinancingBand from "@/components/bands/FinancingBand";
import FaqBand from "@/components/bands/FaqBand";
import ServiceAreasBand from "@/components/bands/ServiceAreasBand";
import PageHero from "@/components/company/PageHero";
import CheckList from "@/components/company/CheckList";
import NumberedCards from "@/components/company/NumberedCards";
import { DocIcon, MailIcon, PhoneIcon } from "@/components/company/icons";
import {
  manufacturerWarranties,
  warrantyClaimSteps,
  warrantyCovered,
  warrantyExclusions,
  warrantyFaqs,
} from "@/components/company/data";
import { site } from "@/content/site";
import { faqSchema } from "@/lib/seo";

const title = "Written Workmanship Warranty";
const description =
  "Every job comes with a written workmanship warranty, plus manufacturer warranties passed through to you. See what is covered and how to file a claim.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/warranty" },
  openGraph: { title, description, url: "/warranty", type: "website", images: [OG_DEFAULT] },
};

const crumbs = [{ label: "Warranty" }];

export default function WarrantyPage() {
  return (
    <>
      <Schema data={faqSchema(warrantyFaqs)} />

      <PageHero
        crumbs={crumbs}
        eyebrow="Warranty · Every project"
        title="Built Right. Put in Writing."
        accent="Backed by a Local Crew."
        intro={
          <p>
            Every job ends with a written workmanship warranty signed by us, plus the manufacturer warranties for every
            product we installed. If something we built fails, you call one local number and we come back to make it
            right.
          </p>
        }
        primary={{ href: "/free-estimate", label: "Get a Free Estimate" }}
        secondary={{ href: "#claim", label: "How to Make a Claim" }}
        aside={
          <div className="rounded-[14px] bg-navy-900 p-7 text-navy-100 shadow-card md:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-amber-500">
              <DocIcon className="h-6 w-6" />
            </span>
            <p className="mt-5 font-heading text-xl font-bold text-white">What you get at the walkthrough</p>
            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-navy-100/85">
              <li>— Our written workmanship warranty, with its term for your scope</li>
              <li>— Manufacturer warranty cards, registrations and NOA numbers</li>
              <li>— Product names, colors and care instructions</li>
              <li>— Closed permit and final inspection record</li>
            </ul>
          </div>
        }
      />

      <TrustStrip />

      <Section
        tone="light"
        eyebrow="What's covered"
        title="Our Workmanship Warranty"
        intro="It covers how we installed and built the work in your contract. The exact term is written into that contract and depends on the scope."
      >
        <div className="rounded-[14px] border border-sand-200 bg-white p-7 shadow-card md:p-9">
          <CheckList items={warrantyCovered} columns={2} />
        </div>
      </Section>

      <Section
        tone="paper"
        eyebrow="Passed through to you"
        title="Manufacturer Warranties"
        intro="Products carry their own coverage from the companies that made them. We register what needs registering and keep the paperwork on file, so you never have to dig for it."
      >
        <ul className="grid gap-6 sm:grid-cols-2">
          {manufacturerWarranties.map((m) => (
            <li key={m.title} className="rounded-[14px] border border-sand-200 bg-white p-7 shadow-card">
              <h3 className="text-lg font-bold">{m.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{m.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="claim" tone="dark" eyebrow="How to make a claim" title="Something Wrong? Here's What Happens.">
        <NumberedCards items={warrantyClaimSteps} tone="dark" />
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={site.phoneHref}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 font-semibold btn-black"
          >
            <PhoneIcon className="h-5 w-5" />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}?subject=Warranty%20request`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <MailIcon className="h-5 w-5" />
            Email a warranty request
          </a>
        </div>
      </Section>

      <Section
        tone="light"
        eyebrow="Exclusions"
        title="What the Warranty Does Not Cover"
        intro="Better to say it now than argue about it later. These are the usual exclusions; your written warranty lists them for your job."
      >
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="rounded-[14px] border border-sand-200 bg-white p-7 shadow-card md:p-9">
            <CheckList items={warrantyExclusions} variant="x" columns={2} />
          </div>
          <div className="rounded-[14px] border border-amber-500/30 bg-amber-100 p-7">
            <p className="font-heading text-lg font-bold text-navy-900">Not sure if it&apos;s covered?</p>
            <p className="mt-2 text-[15px] leading-relaxed text-navy-900">
              Call anyway. If it is not our workmanship, we will tell you what it is, who covers it, and what a fix costs,
              with no charge for the look.
            </p>
            <div className="mt-5">
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <ReviewsBand />

      <FinancingBand />

      <FaqBand eyebrow="Warranty FAQ" title="Warranty Questions, Answered" items={warrantyFaqs} />

      <ServiceAreasBand />

      <CtaBand
        title="Work that comes with a promise"
        text="Book a free estimate at your home and get the warranty terms for your project on paper."
      />
    </>
  );
}
