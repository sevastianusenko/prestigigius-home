import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import TrustStrip from "@/components/TrustStrip";
import PageHero from "@/components/company/PageHero";
import LegalDoc from "@/components/company/LegalDoc";
import { LEGAL_UPDATED, LEGAL_UPDATED_ISO } from "@/components/company/data";
import { termsSections } from "@/components/company/legal";

const title = "Terms of Use";
const description =
  "Terms for using the Prestigious Home Improvements website: information only, estimates and contracts, financing, licensing and Florida governing law.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  openGraph: { title, description, url: "/terms", type: "website" },
};

const crumbs = [{ label: "Terms of Use" }];

export default function TermsPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Legal · Prestigious Home Improvements"
        title="Terms of Use"
        intro={
          <p>
            Last updated: <time dateTime={LEGAL_UPDATED_ISO}>{LEGAL_UPDATED}</time>. The website is general information;
            your signed contract is what governs any work we do.
          </p>
        }
        primary={{ href: "/contact", label: "Questions? Contact Us" }}
      />
      <TrustStrip />
      <LegalDoc sections={termsSections} />
      <CtaBand
        title="Questions about this page?"
        text="Call or email the office and an owner will answer. Or skip the paperwork and book a free in-home estimate."
      />
    </>
  );
}
