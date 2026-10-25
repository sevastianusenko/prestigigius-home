import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import LeadForm from "@/components/LeadForm";
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
import { PhoneIcon } from "@/components/company/icons";
import { estimateBenefits, nextSteps } from "@/components/company/data";
import { generalFaqs } from "@/content/faqs";
import { getService } from "@/content/services";
import { site } from "@/content/site";
import { faqSchema } from "@/lib/seo";

import { OG_DEFAULT } from "@/components/og";
/** Lowercase a service title for use mid-sentence, keeping proper nouns ("Florida"). */
function inSentence(title: string): string {
  return title
    .split(" ")
    .map((w) => (/^Florida/.test(w) ? w : w.toLowerCase()))
    .join(" ");
}

const title = "Free In-Home Estimate, Port Charlotte & SWFL | Prestigious";
const description =
  "Request a free, no-obligation in-home estimate for your remodel, impact windows, kitchen or lanai. Written, itemized price. Licensed FL contractor.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/free-estimate" },
  openGraph: {
    images: [OG_DEFAULT], title, description, url: "/free-estimate", type: "website" },
};

const crumbs = [{ label: "Free Estimate" }];

/** free estimate, license, permits, pricing, service area */
const ESTIMATE_FAQ_QUESTIONS = [
  "Is the estimate really free?",
  "Are you licensed and insured?",
  "Do you pull the permits?",
  "How do you price a job, and what happens if something changes?",
  "What areas do you serve?",
];

export default async function FreeEstimatePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const raw = Array.isArray(sp.service) ? sp.service[0] : sp.service;
  const service = raw ? getService(raw) : undefined;
  const picked = generalFaqs.filter((f) => ESTIMATE_FAQ_QUESTIONS.includes(f.q));
  const faqs = picked.length ? picked : generalFaqs.slice(0, 3);

  return (
    <>
      {faqs.length > 0 && <Schema data={faqSchema(faqs)} />}

      <PageHero
        tone="dark"
        crumbs={crumbs}
        eyebrow={service ? `Free estimate · ${service.title}` : "Free estimate · Port Charlotte & SWFL"}
        title="Get Your Free"
        accent="In-Home Estimate"
        intro={
          <p>
            {service
              ? `Tell us about your ${inSentence(service.title)} project. `
              : "Tell us what you want to change. "}
            An owner calls you back, walks the house with you, measures, and sends a written, itemized price, usually within a week of the visit. Free,
            whether or not you hire us.
          </p>
        }
        aside={
          <div className="rounded-[14px] bg-white p-6 text-navy-900 shadow-card md:p-9">
            <h2 className="text-2xl font-bold">Tell us about your project</h2>
            <p className="mt-1.5 text-sm text-ink-500">Takes about a minute. We never share your information.</p>
            <div className="mt-6">
              <LeadForm service={service?.slug} />
            </div>
          </div>
        }
      >
        <CheckList items={estimateBenefits} tone="dark" />
        <a
          href={site.phoneHref}
          className="mt-8 inline-flex items-center gap-3 rounded-[14px] border border-white/15 bg-white/5 px-5 py-4 transition hover:bg-white/10"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-amber-500 text-navy-950">
            <PhoneIcon className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[.14em] text-navy-100/75">Rather call?</span>
            <span className="block font-heading text-lg font-bold text-white">{site.phone}</span>
            <span className="block text-xs text-navy-100/75">{site.hours}</span>
          </span>
        </a>
      </PageHero>

      <TrustStrip />

      <Section
        tone="light"
        eyebrow="After you hit send"
        title="Here's What Happens Next"
        intro="No call center and no sales script. The same people who price the job are the ones who build it."
      >
        <NumberedCards items={nextSteps} />
      </Section>

      <ReviewsBand />

      <FinancingBand />

      {faqs.length > 0 && <FaqBand eyebrow="Before you book" title="Questions Homeowners Ask Us" items={faqs} />}

      <ServiceAreasBand />

      <CtaBand
        title="Prefer to talk it through first?"
        text={`Call ${site.phone}. You will reach an owner, not a call center.`}
      />
    </>
  );
}
