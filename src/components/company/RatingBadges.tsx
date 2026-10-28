import { site } from "@/content/site";
import { ShieldIcon, StarIcon } from "./icons";

const badges = [
  {
    label: "Google",
    value: site.ratings.google.score,
    sub: "Homeowner reviews",
    href: site.ratings.google.href,
    star: true,
  },
  {
    label: "Yelp",
    value: site.ratings.yelp.score,
    sub: "Homeowner reviews",
    href: site.ratings.yelp.href,
    star: true,
  },
  {
    label: "BBB",
    value: site.ratings.bbb.grade,
    sub: `Accredited since ${site.ratings.bbb.accreditedSince}`,
    href: site.ratings.bbb.href,
    star: false,
  },
];

/** Linked rating badges (Google, Yelp, BBB) built from site.ratings. */
export default function RatingBadges({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {badges.map((b) => (
        <li key={b.label}>
          <a
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-full items-center gap-4 rounded-xl border p-5 transition duration-300 hover:-translate-y-0.5 ${
              dark
                ? "border-white/15 bg-white/5 hover:bg-white/10"
                : "border-sand-200 bg-white shadow-card hover:shadow-card-hover"
            }`}
          >
            <span
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${
                dark ? "bg-white/10 text-amber-500" : "bg-amber-100 text-amber-600"
              }`}
            >
              {b.star ? <StarIcon className="h-6 w-6" /> : <ShieldIcon className="h-6 w-6" />}
            </span>
            <span className="min-w-0">
              <span
                className={`block font-heading text-2xl font-extrabold leading-none ${dark ? "text-white" : "text-navy-900"}`}
              >
                {b.value}
                <span className={`ml-2 text-sm font-semibold ${dark ? "text-navy-100/80" : "text-ink-500"}`}>
                  on {b.label}
                </span>
              </span>
              <span className={`mt-1.5 block text-sm ${dark ? "text-navy-100/70" : "text-ink-500"}`}>
                {b.sub} <span aria-hidden="true">↗</span>
                <span className="visually-hidden"> (opens in a new tab)</span>
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
