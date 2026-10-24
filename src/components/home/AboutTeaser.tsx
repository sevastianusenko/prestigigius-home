import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { site } from "@/content/site";
import { photo } from "@/lib/photos";

/**
 * Home "Why Prestigious" teaser. Mirrors the reference's
 * tradespeople-and-trust band: short origin story,
 * founder quote card, link to the full story.
 * Paragraphs adapted from about.story (src/content/about.ts).
 */
const paragraphs = [
  `Before Prestigious had its own name on the truck, Tim Fomin and Vlad Filippov spent years as the installers other Southwest Florida contractors sent out after the sale was made. We set impact windows and doors across Charlotte, Sarasota and Lee counties, through the building boom and the long rebuild after Hurricane Ian. In October ${site.founded} we opened our own company in Port Charlotte, and today it is a licensed Florida Certified Residential Contractor (${site.license}) running kitchens, baths, additions, lanais, roofing and storm repairs as well as windows.`,
  "What we learned on other people's jobs is that most renovation trouble is not the carpentry, it is the hand-off. A promise made at the kitchen table never reaches the crew, and the homeowner cannot get anyone on the phone. So we keep it simple: the person who prices your job is the person who runs it, from the first measurement to the final inspection.",
];

/** Real customer quote (Yelp, Aug 2025) — verbatim excerpt from testimonials.ts. */
const customerQuote =
  "It truly is a family business and Tim and Vlad are extremely knowledgeable in the skills needed for executing replacement and installation of doors and windows according to county building codes.";

export default function AboutTeaser() {
  const team = photo("team");
  return (
    <Section id="why-us" tone="paper">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>Why Prestigious</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl lg:text-[2.2rem]">Built by Installers. Run on Trust.</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-500">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-navy-900 underline decoration-amber-500 decoration-2 underline-offset-4 transition-colors hover:text-amber-600"
          >
            Read our story <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-sand-200 shadow-card">
            <Image src={team.src} alt={team.alt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
          </div>
          <figure className="relative mx-4 -mt-14 rounded-[14px] bg-navy-900 p-6 text-white shadow-card sm:mr-0 sm:ml-10 sm:max-w-md">
            <blockquote className="text-base leading-relaxed text-navy-100">
              &ldquo;{customerQuote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-semibold text-white">Jwb M., Sarasota</span>
              <span className="text-amber-500"> · 5-star review on Yelp</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}
