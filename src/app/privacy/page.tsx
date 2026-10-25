import type { Metadata } from "next";
import { OG_DEFAULT } from "@/components/og";
import CtaBand from "@/components/CtaBand";
import TrustStrip from "@/components/TrustStrip";
import PageHero from "@/components/company/PageHero";
import LegalDoc from "@/components/company/LegalDoc";
import { LEGAL_UPDATED, LEGAL_UPDATED_ISO } from "@/components/company/data";
import { privacySections } from "@/components/company/legal";

const title = "Privacy Policy";
const description =
  "How Prestigious Home Improvements collects, uses and protects the information you share through our website, forms, calls and texts.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title, description, url: "/privacy", type: "website", images: [OG_DEFAULT] },
};

const crumbs = [{ label: "Privacy Policy" }];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Legal · Prestigious Home Improvements"
        title="Privacy Policy"
        intro={
          <p>
            Last updated: <time dateTime={LEGAL_UPDATED_ISO}>{LEGAL_UPDATED}</time>. The short version: we use your
            information to answer your request and do your project, and we never sell it.
          </p>
        }
        primary={{ href: "/contact", label: "Questions? Contact Us" }}
      />
      <TrustStrip />
      <LegalDoc sections={privacySections} />
      <CtaBand
        title="Questions about this page?"
        text="Call or email the office and an owner will answer. Or skip the paperwork and book a free in-home estimate."
      />
    </>
  );
}
