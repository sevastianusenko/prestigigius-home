import type { Metadata } from "next";
import { OG_DEFAULT } from "@/components/og";
import Section from "@/components/ui/Section";
import TrustStrip from "@/components/TrustStrip";
import LeadForm from "@/components/LeadForm";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import ReviewsBand from "@/components/bands/ReviewsBand";
import FaqBand from "@/components/bands/FaqBand";
import ServiceAreasBand from "@/components/bands/ServiceAreasBand";
import PageHero from "@/components/company/PageHero";
import CheckList from "@/components/company/CheckList";
import { CardIcon } from "@/components/company/icons";
import { financingFaqs, financingPlanSteps, paymentSchedule, qualifyingProjects } from "@/components/company/data";
import { site } from "@/content/site";
import { faqSchema } from "@/lib/seo";

const title = "Home Remodeling Financing";
const description =
  "Financing on credit approval through third-party lenders for remodels, impact windows, kitchens and lanais. Simple steps, a fair payment schedule.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/financing" },
  openGraph: { title, description, url: "/financing", type: "website", images: [OG_DEFAULT] },
};

const crumbs = [{ label: "Financing" }];

export default function FinancingPage() {
  return (
    <>
      <Schema data={faqSchema(financingFaqs)} />

      <PageHero
        tone="dark"
        crumbs={crumbs}
        eyebrow="Financing · Port Charlotte & SWFL"
        title="Start the Work Now."
        accent="Spread the Cost Out."
        intro={
          <p>
            Impact windows, a new bathroom or a kitchen add up fast, and the bill doesn&apos;t have to land in one lump.
            Mention financing at your free estimate and we&apos;ll go over lender options during the same visit.
            Financing is available upon credit approval through third-party lenders.
          </p>
        }
        primary={{ href: "/free-estimate", label: "Get a Free Estimate" }}
        secondary={{ href: site.phoneHref, label: `Call ${site.phone}` }}
        aside={
          <div className="rounded-[14px] bg-white p-7 text-navy-900 shadow-card md:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-amber-100 text-amber-600">
              <CardIcon className="h-6 w-6" />
            </span>
            <p className="mt-5 font-heading text-xl font-bold text-navy-900">Same price, cash or financed</p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
              Our contract price does not move when you finance. Rates, terms and approval come from the lender and are
              shown to you before you accept anything.
            </p>
            <ul className="mt-5 space-y-2 border-t border-sand-200 pt-5 text-[15px] text-ink-900">
              <li>— Whole project or just part of it</li>
              <li>— Works alongside an insurance payout</li>
              <li>— Payments tied to progress you can see</li>
            </ul>
          </div>
        }
      />

      <TrustStrip />

      <Section
        tone="light"
        eyebrow="How it works"
        title="Four Steps From Estimate to Monthly Payment"
        intro="Financing fits inside the visit you were already going to book. Here is how it plays out."
      >
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {financingPlanSteps.map((s) => (
            <li key={s.n} className="flex flex-col rounded-[14px] border border-sand-200 bg-white p-7 shadow-card">
              <span aria-hidden="true" className="font-heading text-4xl font-extrabold leading-none text-amber-500">
                {s.n}
              </span>
              <p className="mt-4 text-xs font-bold uppercase tracking-[.14em] text-ink-500">{s.kicker}</p>
              <h3 className="mt-1.5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Qualifying projects</p>
            <h2 className="mt-4 text-3xl font-bold md:text-[35px]">What You Can Put on a Plan</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              Most of the work we do qualifies. Each lender sets its own minimum and maximum amounts.
            </p>
            <div className="mt-8">
              <CheckList items={qualifyingProjects} />
            </div>
          </div>
          <div>
            <p className="eyebrow">Payment schedule</p>
            <h2 className="mt-4 text-3xl font-bold md:text-[35px]">Half to Start, the Rest When It&apos;s Done</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              Cash or financed, the schedule is simple and written into your contract with the exact amounts.
            </p>
            <ol className="mt-8 overflow-hidden rounded-[14px] border border-sand-200 bg-white shadow-card">
              {paymentSchedule.map((p, i) => (
                <li key={p.stage} className="flex gap-4 border-b border-sand-200 p-5 last:border-b-0">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-900 font-heading text-sm font-bold text-amber-500">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-heading font-bold text-navy-900">{p.stage}</p>
                    <p className="mt-0.5 text-[15px] leading-relaxed text-ink-500">{p.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm leading-relaxed text-ink-500">
              Because our deposit is more than 10% of the contract price, Florida law (§ 489.126, F.S.) requires us to
              apply for permits within 30 days and start work within 90 days after the permit is issued. We follow it on
              every job.
            </p>
          </div>
        </div>
      </Section>

      <ReviewsBand />

      <FaqBand eyebrow="Financing FAQ" title="Financing Questions, Straight Answers" items={financingFaqs} />

      <Section id="apply" tone="light">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">Start here</p>
            <h2 className="mt-4 text-3xl font-bold md:text-[35px]">First a Price, Then a Payment</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              Tell us about the project and mention financing in your message. We bring the lender options to your free
              in-home estimate.
            </p>
          </div>
          <div className="rounded-[14px] border border-sand-200 bg-white p-6 shadow-card md:p-8">
            <LeadForm />
          </div>
        </div>
        <p className="mt-12 max-w-4xl border-t border-sand-200 pt-6 text-xs leading-relaxed text-ink-500">
          Financing is provided by third-party lenders unaffiliated with Prestigious Home Improvements, Inc. All financing
          is subject to credit approval. Rates, terms, fees and eligibility are set by the lender and may vary. We do not
          make credit decisions and do not guarantee approval. Not all applicants will qualify. See the lender&apos;s
          disclosures for full terms.
        </p>
      </Section>

      <ServiceAreasBand />

      <CtaBand
        title="Let's put a real number on it"
        text="Free in-home estimate, written and itemized. Ask about financing while we're there."
      />
    </>
  );
}
