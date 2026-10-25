import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/CtaBand";
import DarkHero from "@/components/about/DarkHero";
import TeamGrid from "@/components/about/TeamGrid";
import { teamPage } from "@/content/about";

import { OG_DEFAULT } from "@/components/og";
const title = "Our Team";
const description =
  "Meet the owners and crew behind Prestigious Home Improvements in Port Charlotte: the same faces from your free estimate to the final walkthrough.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about/team" },
  openGraph: {
    images: [OG_DEFAULT], title, description, url: "/about/team", type: "website" },
};

export default function TeamPage() {
  return (
    <>
      <DarkHero
        crumbs={[{ label: "About", href: "/about" }, { label: "Our Team" }]}
        eyebrow={teamPage.eyebrow}
        lines={[teamPage.title]}
        accentLast={false}
        lead={<p>{teamPage.lead}</p>}
        primary={{ href: "/free-estimate", label: "Get a Free Estimate" }}
      />

      <Section tone="light" eyebrow="Owners & crew" title="Who You Will Actually Meet">
        <TeamGrid />
      </Section>

      <Section tone="paper">
        <div className="flex flex-col gap-6 rounded-[14px] bg-navy-900 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold !text-white md:text-3xl">{teamPage.careers.title}</h2>
            <p className="mt-3 text-navy-100/85">{teamPage.careers.text}</p>
          </div>
          <Button href="/careers" size="lg">
            {teamPage.careers.cta}
          </Button>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
