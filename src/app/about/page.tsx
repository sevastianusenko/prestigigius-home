import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import PromisesBand from "@/components/bands/PromisesBand";
import ServicesGridBand from "@/components/bands/ServicesGridBand";
import ReviewsBand from "@/components/bands/ReviewsBand";
import ServiceAreasBand from "@/components/bands/ServiceAreasBand";
import DarkHero from "@/components/about/DarkHero";
import KickerCards from "@/components/about/KickerCards";
import TrackRecord from "@/components/about/TrackRecord";
import MeetOwner from "@/components/about/MeetOwner";
import HomeownerQuotes from "@/components/about/HomeownerQuotes";
import { aboutHero, origin, whoWeAre } from "@/content/about";
import { site } from "@/content/site";
import { jobPhoto } from "@/content/project-posts/helpers";
import { RealJobBadge } from "@/components/ProjectMedia";
import { absoluteUrl, organizationRef } from "@/lib/seo";

import { OG_DEFAULT } from "@/components/og";
const title = "About Us, Port Charlotte FL";
const description =
  "Former window and door installers turned licensed Florida contractors (CRC1327831). Our story, our owners, and the promises we make on every SWFL home.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    images: [OG_DEFAULT], title, description, url: "/about", type: "website" },
};

export default function AboutPage() {
  const heroPhoto = jobPhoto(
    "parrish-two-story-block-home-impact-windows",
    7,
    "windows-doors",
    "Front of a new two-story concrete block home in Parrish with black impact windows set in red liquid-flashed openings and a covered entry",
  );
  const sidePhoto = jobPhoto(
    "manatee-county-lanai-wall-block-rebuild",
    3,
    "lanai",
    "New white stucco block wall on a Manatee County lanai with storm-rated windows, a full-lite door and a tall narrow window under the screen enclosure",
  );

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Prestigious Home Improvements",
    url: absoluteUrl("/about"),
    description,
    mainEntity: organizationRef(),
  };

  return (
    <>
      <Schema data={aboutSchema} />

      <DarkHero
        crumbs={[{ label: "About" }]}
        eyebrow={aboutHero.eyebrow}
        lines={aboutHero.lines}
        lead={<p>{aboutHero.lead}</p>}
        primary={{ href: "/free-estimate", label: "Get a Free Estimate" }}
        bullets={[`Licensed & insured · ${site.license}`, `${site.ratings.google.score} on Google`, `BBB ${site.ratings.bbb.grade}`]}
        photo={heroPhoto}
      />

      <TrustStrip />

      {/* Who we are */}
      <Section tone="light">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>{whoWeAre.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl lg:text-[2.75rem]">{whoWeAre.title}</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-500">
              {whoWeAre.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-sand-100 shadow-card">
            <Image src={sidePhoto.src} alt={sidePhoto.alt} fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
            <RealJobBadge />
          </div>
        </div>
      </Section>

      {/* Origin story */}
      <Section tone="paper" eyebrow={origin.eyebrow} title={origin.title}>
        <KickerCards items={origin.steps} columns={4} timeline />
      </Section>

      <TrackRecord />

      <MeetOwner />

      <HomeownerQuotes />

      <PromisesBand />

      <ServicesGridBand />

      <ReviewsBand />

      <ServiceAreasBand />

      <CtaBand
        title="Get Your Free Estimate"
        text="Tim comes out, measures, and leaves you with a written, itemized price, usually within a week of the visit. It costs nothing, even if you go with someone else."
      />
    </>
  );
}
