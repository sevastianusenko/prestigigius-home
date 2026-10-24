import type { Metadata } from "next";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import ServicesGridBand from "@/components/bands/ServicesGridBand";
import WhyUsBand from "@/components/bands/WhyUsBand";
import FaqBand from "@/components/bands/FaqBand";
import ServiceAreasBand from "@/components/bands/ServiceAreasBand";
import ServiceHero from "@/components/services/ServiceHero";
import { faqSchema, serviceListSchema } from "@/components/services/schema";
import { services, serviceGroups } from "@/content/services";
import { generalFaqs } from "@/content/faqs";
import { site } from "@/content/site";
import { photo } from "@/lib/photos";

const title = "Home Remodeling Services in Port Charlotte, FL";
const description =
  "Kitchens, baths, additions, impact windows, roofing, lanais and storm rebuilds from one licensed contractor serving Port Charlotte and Southwest Florida.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: `${site.url}/services`,
    title,
    description,
    images: [{ url: photo("hero").src, alt: photo("hero").alt }],
  },
};

const groupEyebrow: Record<string, string> = {
  interior: "Inside the house",
  exterior: "Outside the house",
  restoration: "Bring it back",
};

export default function ServicesPage() {
  const faqs = generalFaqs.slice(0, 6);

  return (
    <>
      <Schema data={[serviceListSchema(services), faqSchema(faqs)]} />

      <ServiceHero
        crumbs={[{ label: "Services", href: "/services" }]}
        eyebrow="Services · Port Charlotte & SWFL"
        title="One Licensed Contractor for the Whole House"
        subhead={`From a single bathroom to a full gut renovation, impact windows to a new roof. We plan it, permit it under ${site.license} and build it with our own crew across Charlotte, Sarasota and Lee County.`}
        photo={photo("whole-home")}
      />
      <TrustStrip />

      {serviceGroups.map((group) => {
        const slugs = services.filter((s) => s.group === group.key).map((s) => s.slug);
        if (slugs.length === 0) return null;
        return (
          <div key={group.key} id={group.key}>
            <ServicesGridBand
              eyebrow={groupEyebrow[group.key] ?? `${slugs.length} services`}
              title={group.title}
              intro={group.intro}
              slugs={slugs}
            />
          </div>
        );
      })}

      <WhyUsBand title="Eight Reasons Gulf Coast Homeowners Call Us First" />

      <FaqBand eyebrow="FAQ" title="Questions to Ask Before You Hire a Contractor" items={faqs} />

      <ServiceAreasBand />

      <CtaBand />
    </>
  );
}
