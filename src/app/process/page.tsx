import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import ProcessBand from "@/components/bands/ProcessBand";
import PromisesBand from "@/components/bands/PromisesBand";
import ReviewsBand from "@/components/bands/ReviewsBand";
import FinancingBand from "@/components/bands/FinancingBand";
import FaqBand from "@/components/bands/FaqBand";
import ServiceAreasBand from "@/components/bands/ServiceAreasBand";
import PageHero from "@/components/company/PageHero";
import StageTimeline from "@/components/company/StageTimeline";
import CheckList from "@/components/company/CheckList";
import { needFromYou, processStages } from "@/components/company/data";
import { generalFaqs } from "@/content/faqs";
import { site } from "@/content/site";
import { absoluteUrl, faqSchema } from "@/lib/seo";
import { photo } from "@/lib/photos";

const title = "Our Remodeling Process, Step by Step";
const description =
  "From free estimate to final walkthrough: the 8 stages of a Prestigious Home Improvements project, what we handle, and what we need from you.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/process" },
  openGraph: { title, description, url: "/process", type: "website" },
};

const crumbs = [{ label: "About", href: "/about" }, { label: "Our Process" }];

/** pricing changes, timeline, payment schedule, who does the work, how to prepare */
const PROCESS_FAQ_QUESTIONS = [
  "How do you price a job, and what happens if something changes?",
  "How long does a typical project take?",
  "How does the payment schedule work?",
  "Who actually does the work?",
  "How should I prepare for a remodel?",
];

export default function ProcessPage() {
  const picked = generalFaqs.filter((f) => PROCESS_FAQ_QUESTIONS.includes(f.q));
  const faqs = picked.length ? picked : generalFaqs.slice(6);

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How a home remodeling project works with Prestigious Home Improvements",
    url: absoluteUrl("/process"),
    step: processStages.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.we.join(". "),
    })),
  };

  return (
    <>
      <Schema data={faqs.length ? [howTo, faqSchema(faqs)] : howTo} />

      <PageHero
        tone="dark"
        crumbs={crumbs}
        eyebrow="How we work · Charlotte, Sarasota & Lee County"
        title="One Crew. One Contract."
        accent="No Guesswork."
        photo={photo("team", 0)}
        intro={
          <p>
            Most remodels go sideways because nobody explains what comes next. Below is every stage of a job with us:
            what we take care of, roughly how long it runs, and the short list of things we need from you.
          </p>
        }
        primary={{ href: "/free-estimate", label: "Book a Free Estimate" }}
        secondary={{ href: "#timeline", label: "See All 8 Stages" }}
        bullets={["Fixed written price", "We pull every permit", "Written workmanship warranty"]}
      />

      <TrustStrip />

      <ProcessBand
        eyebrow="The short version"
        title="Four Steps. No Surprises."
        intro="Straight answers from the first phone call to the last walkthrough."
      />

      <Section
        id="timeline"
        tone="paper"
        eyebrow="The full timeline"
        title="What Happens at Every Stage"
        intro="Times shown are typical for a mid-size remodel in Charlotte, Sarasota or Lee County. Your contract carries the schedule for your own job."
      >
        <StageTimeline stages={processStages} />
      </Section>

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">Your checklist</p>
            <h2 className="mt-4 text-3xl font-bold md:text-[35px]">The Few Things We Need From You</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              Most remodeling delays come from waiting on a decision or a document. Have these ready and the crew keeps
              moving.
            </p>
          </div>
          <div className="rounded-[14px] border border-sand-200 bg-white p-7 shadow-card md:p-9">
            <CheckList items={needFromYou} />
          </div>
        </div>
      </Section>

      <PromisesBand eyebrow="In writing" title="The Commitments We Make Before Day One" />

      <ReviewsBand />

      <FinancingBand />

      {faqs.length > 0 && <FaqBand eyebrow="Process questions" title="How It Works, Answered" items={faqs} />}

      <ServiceAreasBand />

      <CtaBand
        title="Ready for step one?"
        text={`Book a free in-home estimate. We usually visit within 48 hours, anywhere in ${site.counties.join(", ")}.`}
      />
    </>
  );
}
