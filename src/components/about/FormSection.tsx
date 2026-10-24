import type { ReactNode } from "react";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { site } from "@/content/site";
import { CheckDot } from "./DarkHero";

/** Two-column form band (reference: careers "Tell us about yourself", referral "Know someone…"). */
export default function FormSection({
  id,
  eyebrow,
  title,
  intro,
  bullets,
  phoneNote,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro: ReactNode;
  bullets: string[];
  phoneNote: string;
  children: ReactNode;
}) {
  return (
    <Section id={id} tone="paper">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">{title}</h2>
          <div className="mt-5 text-lg leading-relaxed text-ink-500">{intro}</div>
          <ul className="mt-8 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[15px] text-ink-900">
                <CheckDot className="mt-0.5" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-[14px] bg-navy-900 p-6">
            <a href={site.phoneHref} className="font-heading text-2xl font-extrabold text-white hover:text-amber-500">
              {site.phone}
            </a>
            <p className="mt-1 text-sm text-navy-100/80">{phoneNote}</p>
            <p className="mt-1 text-xs text-navy-100/60">{site.hours}</p>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </Section>
  );
}
