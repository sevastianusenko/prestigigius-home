import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import TrustStrip from "@/components/TrustStrip";
import FaqBand from "@/components/bands/FaqBand";
import DarkHero from "@/components/about/DarkHero";
import KickerCards from "@/components/about/KickerCards";
import FormSection from "@/components/about/FormSection";
import CareersForm from "@/components/forms/CareersForm";
import { careers } from "@/content/about";
import { jobPhoto } from "@/content/project-posts/helpers";

import { OG_DEFAULT } from "@/components/og";
const title = "Construction Jobs in Port Charlotte, FL | Prestigious";
const description =
  "Join a small, licensed Port Charlotte crew. No experience needed: learn windows, doors and remodeling from the owners. Apply in two minutes.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/careers" },
  openGraph: {
    images: [OG_DEFAULT], title, description, url: "/careers", type: "website" },
};

export default function CareersPage() {
  const { hero, startHere, perks, qualities, after, faqs, form } = careers;
  return (
    <>
      <DarkHero
        crumbs={[{ label: "About", href: "/about" }, { label: "Careers" }]}
        eyebrow={hero.eyebrow}
        lines={hero.lines}
        lead={<p>{hero.lead}</p>}
        primary={{ href: "#apply", label: "Send My Application" }}
        bullets={form.bullets}
        photo={jobPhoto(
          "parrish-two-story-block-home-impact-windows",
          4,
          "windows-doors",
          "Double-height opening in a Parrish block home with a four-lite black window above it and a crew member on a ladder inside",
        )}
      />

      <TrustStrip />

      {/* Start here */}
      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>{startHere.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl lg:text-[2.75rem]">{startHere.title}</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-500">
              {startHere.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>
          <ul className="grid content-start gap-4">
            <li className="rounded-[14px] border border-sand-200 bg-white p-6 shadow-card">
              <p className="eyebrow !text-ink-500">{startHere.notNeeded.label}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-900 line-through decoration-ink-500/40">
                {startHere.notNeeded.text}
              </p>
            </li>
            <li className="rounded-[14px] bg-navy-900 p-6 shadow-card">
              <p className="eyebrow">{startHere.needed.label}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-white">{startHere.needed.text}</p>
            </li>
          </ul>
        </div>
      </Section>

      {/* What you get */}
      <Section tone="paper" eyebrow={perks.eyebrow} title={perks.title} intro={perks.intro}>
        <KickerCards items={perks.items} columns={4} />
      </Section>

      {/* What matters */}
      <Section tone="dark" eyebrow={qualities.eyebrow} title={qualities.title}>
        <ol className="grid gap-6 md:grid-cols-3">
          {qualities.items.map((q, i) => (
            <li key={q.title} className="rounded-[14px] border border-white/10 bg-white/5 p-7">
              <span aria-hidden="true" className="font-heading text-3xl font-extrabold text-amber-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-bold !text-white">{q.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-navy-100/85">{q.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Button href="/about/team" variant="white">
            Meet the people you would work with
          </Button>
        </div>
      </Section>

      {/* After you apply */}
      <Section tone="light" eyebrow={after.eyebrow} title={after.title}>
        <KickerCards items={after.steps} columns={3} timeline />
      </Section>

      <FaqBand eyebrow="Frequently asked questions" title="Before You Apply: Common Questions" items={faqs} />

      <FormSection
        id="apply"
        eyebrow={form.eyebrow}
        title={form.title}
        intro={<p>{form.intro}</p>}
        bullets={form.bullets}
        phoneNote="Rather talk it through first? Ask for Tim."
      >
        <CareersForm />
      </FormSection>
    </>
  );
}
