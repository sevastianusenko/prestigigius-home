import Link from "next/link";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { initials } from "@/components/company/utils";
import { about, owner } from "@/content/about";

/**
 * "Meet the Owners": pull quote + first-person-adjacent bio for Tim Fomin, then
 * a compact "the team he built" row linking to /about/team. Initials avatars,
 * no stock portraits of people who are not ours.
 */
export default function MeetOwner() {
  return (
    <Section tone="paper">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <Eyebrow>{owner.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">{owner.title}</h2>
          {/* Tim's own words (owner.quote). */}
          <figure className="mt-8 rounded-[14px] bg-navy-900 p-8 shadow-card">
            <p className="eyebrow eyebrow-dark mb-4">Why Tim started the company</p>
            <blockquote className="font-heading text-lg font-bold leading-snug text-white md:text-xl">
              &ldquo;{owner.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-amber-500 font-heading text-lg font-extrabold text-navy-950"
              >
                {initials(owner.name)}
              </span>
              <span>
                <span className="block font-semibold text-white">{owner.name}</span>
                <span className="block text-sm text-navy-100/80">{owner.role.split("·")[0].trim()}, Prestigious Home Improvements</span>
              </span>
            </figcaption>
          </figure>
        </div>
        <div>
          <div className="space-y-5 text-[17px] leading-relaxed text-ink-900">
            {owner.bio.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <div className="mt-10 border-t border-sand-200 pt-8">
            <h3 className="text-xl font-bold">The team</h3>
            <ul className="mt-5 flex flex-wrap gap-4">
              {about.team.map((m) => (
                <li key={m.name} className="flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-5 shadow-card">
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 place-items-center rounded-full bg-navy-900 font-heading text-sm font-extrabold text-amber-500"
                  >
                    {initials(m.name)}
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold text-navy-900">{m.name}</span>
                    <span className="block text-xs text-ink-500">{m.role.split("·")[0].trim()}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/about/team"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sea-600 hover:text-navy-900 hover:underline"
            >
              Meet the team <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
