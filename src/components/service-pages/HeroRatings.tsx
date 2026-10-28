import { site } from "@/content/site";

/**
 * Three rating badges for dark service / city-service heroes. Every value
 * comes from `site.ratings` (verified facts), never typed in by hand.
 */
export default function HeroRatings({ className = "" }: { className?: string }) {
  const { google, yelp, bbb } = site.ratings;
  const badges = [
    { href: google.href, value: `${google.score} ★`, name: "Google", note: "Rating" },
    { href: yelp.href, value: `${yelp.score} ★`, name: "Yelp", note: "Rating" },
    { href: bbb.href, value: bbb.grade, name: "BBB", note: "Accredited" },
  ];

  return (
    <ul className={`flex flex-wrap gap-2 border-t border-white/15 pt-6 ${className}`} aria-label="Ratings">
      {badges.map((b) => (
        <li key={b.name}>
          <a
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full glass px-3.5 py-2 text-sm text-navy-100 ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:ring-amber-500/60"
          >
            <span className="font-heading font-extrabold text-amber-500">{b.value.endsWith(" ★") ? (<>{b.value.slice(0, -2)} <span className="text-champagne">★</span></>) : b.value}</span>
            <span className="font-semibold text-white">{b.name}</span>
            <span aria-hidden="true" className="text-navy-100/50">
              ·
            </span>
            <span className="text-navy-100/85">{b.note}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
