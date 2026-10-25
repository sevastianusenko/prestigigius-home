import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import TrustStrip from "@/components/TrustStrip";
import FaqBand from "@/components/bands/FaqBand";
import DarkHero, { CheckDot } from "@/components/about/DarkHero";
import KickerCards from "@/components/about/KickerCards";
import FormSection from "@/components/about/FormSection";
import ReferralForm from "@/components/forms/ReferralForm";
import { referral } from "@/content/about";
import { site } from "@/content/site";

import { OG_DEFAULT } from "@/components/og";
// TODO confirm reward amount with client (site.referral.reward is a placeholder)
const reward = site.referral.reward;
const rewardNote = site.referral.rewardNote;

const title = `Refer a Friend, Get ${reward}`;
const description = `Past customer? Send us a friend who needs work done. When their project is finished, we send you ${reward}. No limit on referrals.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/referral" },
  openGraph: {
    images: [OG_DEFAULT], title, description, url: "/referral", type: "website" },
};

export default function ReferralPage() {
  const { hero, payout, steps, who, faqs, form } = referral;
  return (
    <>
      <DarkHero
        crumbs={[{ label: "About", href: "/about" }, { label: "Refer a Friend" }]}
        eyebrow={hero.eyebrow}
        lines={["Send Us a Friend.", `We Send You ${reward}.`]}
        lead={<p>{hero.lead(reward)}</p>}
        primary={{ href: "#refer", label: "Refer Someone" }}
      />

      <TrustStrip />

      {/* How it pays */}
      <Section tone="light">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>{payout.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl lg:text-[2.75rem]">{payout.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">{payout.intro}</p>
          </div>
          <div className="rounded-[14px] bg-navy-900 p-8 shadow-card md:p-10">
            <p className="font-heading text-5xl font-extrabold text-amber-500">{reward}</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[.14em] text-navy-100/80">Per finished referral</p>
            <ul className="mt-8 space-y-4">
              {payout.bullets(reward, rewardNote).map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-white">
                  <CheckDot className="mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 3 steps */}
      <Section tone="paper" eyebrow={steps.eyebrow} title={steps.title} intro={steps.intro}>
        <KickerCards items={steps.items(reward)} columns={3} timeline />
      </Section>

      {/* Who you know */}
      <Section tone="light" eyebrow={who.eyebrow} title={who.title} intro={who.intro}>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {who.items.map((it) => (
            <li key={it.service} className="flex flex-col justify-between rounded-[14px] border border-sand-200 bg-white p-6 shadow-card">
              <p className="text-[16px] leading-relaxed text-ink-900">{it.who}</p>
              <p className="eyebrow mt-4 !text-[11px]">{it.service}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-heading text-lg font-bold text-navy-900">{who.outro}</p>
      </Section>

      <FaqBand eyebrow="Frequently asked questions" title="Referral Questions, Answered Plainly" items={faqs(reward)} />

      <FormSection
        id="refer"
        eyebrow={form.eyebrow}
        title={form.title}
        intro={<p>{form.intro(reward)}</p>}
        bullets={[`${reward} for every completed referral.`, "There is no cap on how many people you refer.", "You pass along a name; we take care of everything else."]}
        phoneNote="Easier by phone? Give us their name and number."
      >
        <ReferralForm />
      </FormSection>
    </>
  );
}
