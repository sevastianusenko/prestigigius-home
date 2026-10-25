import type { Metadata } from "next";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import HeroWall from "@/components/bands/HeroWall";
import ServicesGridBand from "@/components/bands/ServicesGridBand";
import ProcessBand from "@/components/bands/ProcessBand";
import RecentProjectsBand from "@/components/bands/RecentProjectsBand";
import ReviewsBand from "@/components/bands/ReviewsBand";
import FinancingBand from "@/components/bands/FinancingBand";
import FaqBand from "@/components/bands/FaqBand";
import ServiceAreasBand from "@/components/bands/ServiceAreasBand";
import AboutTeaser from "@/components/home/AboutTeaser";
import MoreServices from "@/components/home/MoreServices";
import { photosOf } from "@/lib/photos";
import { generalFaqs } from "@/content/faqs";
import Schema from "@/components/Schema";
import { faqSchema } from "@/lib/seo";

/** The four services the company is strongest in (reviews + history). Everything else is secondary. */
/** The FAQ items the page renders; the FAQPage schema uses the same list. */
const HOME_FAQS = generalFaqs.slice(0, 8);

const CORE = ["impact-windows-doors", "bathroom-remodeling", "kitchen-remodeling", "storm-damage-rebuild"];

export const metadata: Metadata = {
  title: { absolute: "Impact Windows, Kitchen & Bath Remodeling, Port Charlotte FL" },
  description:
    "Licensed contractor (CRC1327831) rated 5.0 on Google: impact windows and doors, kitchen and bath remodels, storm rebuilds in Port Charlotte & Sarasota, FL.",
  alternates: { canonical: "/" },
};

/** Home — section order mirrors the reference home (docs/REFERENCE-MAP.md, "Home — section order"). */
export default function HomePage() {
  return (
    <>
      <Schema data={faqSchema(HOME_FAQS)} />
      <HeroWall
        eyebrow="FAMILY-OWNED · LICENSED CRC1327831 · 5.0 ON GOOGLE"
        lines={[
          <>
            Impact Windows<span className="hidden sm:inline"> &amp; Doors</span>,
          </>,
          "Kitchens and Baths",
          <>
            in Port Charlotte<span className="hidden sm:inline"> &amp; Sarasota</span>
          </>,
        ]}
        accentLast
        lead={
          <>
            We started as window and door installers, and that is still what homeowners hire us for most. Today the
            same crew also remodels kitchens and bathrooms and rebuilds after storm and water damage.
            <span className="hidden sm:inline"> One point of contact, one written price, permits included.</span>
          </>
        }
        primary={{ href: "/free-estimate", label: "Get a Free Estimate" }}
        secondary={{ href: "/projects", label: "Read Customer Stories" }}
        bullets={["Free in-home estimate", "Written, itemized price", "Written workmanship warranty"]}
        photos={[
          ...photosOf("windows-doors", 4),
          ...photosOf("bathroom", 3),
          ...photosOf("kitchen", 3),
          ...photosOf("florida", 2),
        ]}
      />
      <TrustStrip />
      <ServicesGridBand
        eyebrow="What we do best"
        title="Four Things Homeowners Hire Us For"
        intro="Impact windows and doors are where we started and what most of our reviews are about. Kitchens, bathrooms and storm-damage rebuilds are run the same way: our own crew, a written price and permits handled for you."
        slugs={CORE}
      />
      <MoreServices exclude={CORE} />
      <AboutTeaser />
      <ProcessBand
        eyebrow="Our process"
        title="Four Steps. No Surprises."
        intro="Straight answers and a written plan, from the first phone call to the last walkthrough."
      />
      <RecentProjectsBand eyebrow="Recent jobs" />
      <ReviewsBand />
      <FinancingBand
        title="Start the Remodel Now, Pay for It Over Time"
        text="A new kitchen, a full set of impact windows or a whole-home remodel is a serious number, and it does not have to be paid in one go. Ask about financing at your free estimate and we will walk you through the options, subject to credit approval."
      />
      <FaqBand eyebrow="FAQ" title="Questions Homeowners Ask Us" items={HOME_FAQS} />
      <ServiceAreasBand />
      <CtaBand />
    </>
  );
}
