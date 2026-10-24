import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { homeownersIntro } from "@/content/about";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";

/**
 * "Hear It From the Homeowners": three real written reviews (the reference
 * uses a video compilation; we do not have one, so we use verbatim text).
 */
export default function HomeownerQuotes() {
  const picked = homeownersIntro.names
    .map((n) => testimonials.find((t) => t.name === n))
    .filter((t): t is (typeof testimonials)[number] => Boolean(t));
  const items = picked.length >= 3 ? picked : testimonials.slice(0, 3);

  return (
    <Section tone="light" eyebrow={homeownersIntro.eyebrow} title={homeownersIntro.title} intro={homeownersIntro.intro}>
      <ul className="grid gap-6 lg:grid-cols-3">
        {items.map((t) => (
          <li key={t.name} className="flex flex-col rounded-[14px] border border-sand-200 bg-white p-7 shadow-card">
            <p aria-label="5 out of 5 stars" className="text-amber-500">
              <span aria-hidden="true">★★★★★</span>
            </p>
            <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-900">&ldquo;{t.text}&rdquo;</blockquote>
            <footer className="mt-6 border-t border-sand-200 pt-4 text-sm">
              <span className="block font-semibold text-navy-900">{t.name}</span>
              <span className="block text-ink-500">
                {[t.service, t.city].filter(Boolean).join(" · ")}
                {t.service || t.city ? " · " : ""}via {t.source}
              </span>
            </footer>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button href="/reviews" variant="ghost">
          Read all reviews
        </Button>
        <p className="text-sm text-ink-500">
          Rated {site.ratings.google.score} on Google and {site.ratings.yelp.score} on Yelp, {site.ratings.bbb.grade} with the BBB.
        </p>
      </div>
    </Section>
  );
}
