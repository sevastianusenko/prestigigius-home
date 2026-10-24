import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TrustStrip from "@/components/TrustStrip";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import ProcessBand from "@/components/bands/ProcessBand";
import PromisesBand from "@/components/bands/PromisesBand";
import ReviewsBand from "@/components/bands/ReviewsBand";
import FinancingBand from "@/components/bands/FinancingBand";
import FaqBand from "@/components/bands/FaqBand";
import ServiceAreasBand from "@/components/bands/ServiceAreasBand";
import Band, { type Tone } from "@/components/services/Band";
import CardGrid from "@/components/services/CardGrid";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceProjects from "@/components/services/ServiceProjects";
import ScopeCards from "@/components/services/ScopeCards";
import CostSection from "@/components/services/CostSection";
import LocalNotes from "@/components/services/LocalNotes";
import { faqSchema, serviceSchema, absUrl } from "@/components/services/schema";
import { shortName } from "@/components/services/utils";
import { services, getService } from "@/content/services";
import { photo } from "@/lib/photos";
import type { Service } from "@/content/types";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

/** Services with a dedicated, hand-built page in src/app/services/<slug>/page.tsx. */
const CUSTOM_PAGES = new Set(["impact-windows-doors", "bathroom-remodeling", "kitchen-remodeling", "storm-damage-rebuild", "whole-home-remodeling", "home-additions", "lanai-screen-enclosures", "exterior-remodeling", "roofing", "siding", "painting", "flooring", "outdoor-living", "home-restoration"]);

export function generateStaticParams() {
  return services.filter((s) => !CUSTOM_PAGES.has(s.slug)).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const url = `/services/${service.slug}`;
  const img = photo(service.heroPhoto);
  return {
    title: { absolute: service.seoTitle },
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url: absUrl(url),
      title: service.seoTitle,
      description: service.seoDescription,
      images: [{ url: img.src, width: img.width ?? 1600, height: img.height ?? 1067, alt: img.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
      images: [img.src],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const name = shortName(service);
  const hero = photo(service.heroPhoto);
  // Breadcrumbs prepends "Home" and emits the BreadcrumbList schema itself.
  const crumbs = [
    { label: "Services", href: "/services" },
    { label: service.title, href: `/services/${service.slug}` },
  ];
  const related = service.related
    .map((s) => getService(s))
    .filter((s): s is Service => Boolean(s))
    .slice(0, 3);

  const hasSigns = Boolean(service.signs?.length);
  const hasOptions = Boolean(service.options?.length);
  const hasBenefits = Boolean(service.benefits?.length);

  // Alternate light / paper backgrounds across the light bands that actually render.
  let n = 0;
  const tone = (): Tone => (n++ % 2 === 0 ? "light" : "paper");
  const introTone = tone();
  const signsTone = hasSigns ? tone() : "light";
  const projectsTone = tone();
  const scopesTone = tone();
  const optionsTone = hasOptions ? tone() : "light";
  const benefitsTone = hasBenefits ? tone() : "light";

  return (
    <>
      <Schema
        data={[serviceSchema(service, hero.src), ...(service.faqs.length ? [faqSchema(service.faqs)] : [])]}
      />

      <ServiceHero
        crumbs={crumbs}
        eyebrow="Port Charlotte · North Port · Sarasota · Fort Myers"
        title={`${service.title} in Port Charlotte, FL`}
        tagline={service.headline}
        subhead={service.subhead}
        photo={hero}
        serviceSlug={service.slug}
      />
      <TrustStrip />

      <ServiceIntro
        title="Design, Permits and the Build Under One Contract"
        paragraphs={service.intro}
        items={service.howWeWork}
        tone={introTone}
      />

      {hasSigns && (
        <CardGrid
          id="signs"
          eyebrow="Know the signs"
          title={service.signsTitle ?? `Signs Your Home Is Ready for ${name} Work`}
          items={service.signs}
          columns={4}
          tone={signsTone}
        />
      )}

      <ServiceProjects service={service} tone={projectsTone} />

      <Band
        id="scopes"
        eyebrow={`${name} scopes`}
        title={`Which ${name} Project Fits Your Home?`}
        intro={`Most ${name.toLowerCase()} jobs we price fit one of these ${service.scopes.length}. Turn over a card to see how each level differs.`}
        tone={scopesTone}
      >
        <ScopeCards scopes={service.scopes} />
      </Band>

      {hasOptions && (
        <CardGrid
          id="options"
          eyebrow="Your options"
          title={service.optionsTitle ?? `${name} Options, Compared`}
          intro={service.optionsIntro}
          items={service.options}
          columns={service.options!.length === 2 || service.options!.length === 4 ? 2 : 3}
          tone={optionsTone}
        />
      )}

      {hasBenefits && (
        <CardGrid
          id="benefits"
          eyebrow="What you get"
          title={service.benefitsTitle ?? `What a ${name} Project Changes Day to Day`}
          items={service.benefits}
          tone={benefitsTone}
        />
      )}

      <ProcessBand
        eyebrow="How it works"
        title={service.processTitle ?? "From First Walkthrough to Final Inspection"}
        steps={service.process?.length ? service.process : undefined}
      />

      <PromisesBand
        eyebrow="Why homeowners hire us"
        title="What You Can Hold Us To"
        items={service.promises?.length ? service.promises : undefined}
      />

      <CostSection service={service} />

      <LocalNotes notes={service.localNotes} serviceLabel={name} tone="light" />

      <ReviewsBand service={service.slug} />

      {related.length > 0 && (
        <Band
          id="related"
          eyebrow="Plan it together"
          title={`Goes Well With Your ${name} Project`}
          intro="Same crew, same contract, one schedule. Adding a second scope now usually costs less than coming back later."
          tone="paper"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ServiceCard key={r.slug} service={r} photo={photo(r.heroPhoto)} />
            ))}
          </div>
        </Band>
      )}

      <FinancingBand />

      {service.faqs.length > 0 && (
        <FaqBand eyebrow="FAQ" title={`${name} Questions Homeowners Ask Us`} items={service.faqs} />
      )}

      <ServiceAreasBand />

      <CtaBand
        title={`Ready to Price Your ${name} Project?`}
        text="Book a free in-home consultation. You get a written, itemized fixed price, usually within 48 hours of the visit."
      />
    </>
  );
}
