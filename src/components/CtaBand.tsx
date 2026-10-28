import { site } from "@/content/site";
import Container from "./ui/Container";
import Button from "./ui/Button";

const checks = [
  `Licensed and insured, FL ${site.license}`,
  "No charge, even if you pick someone else",
  "We measure in person and price on paper",
];

export default function CtaBand({
  title = "Get Your Free Estimate From Prestigious",
  text = "We come to the house, measure, talk through the work and leave you with a written, itemized number. Free and no-obligation, anywhere from Sarasota and Lakewood Ranch down to Fort Myers and Bonita Springs.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 section-y">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-navy-700/50 blur-3xl"
      />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow-dark mb-3">Free estimate · {site.address.city} &amp; SWFL</p>
            <h2 className="h2-display !text-white md:!text-[2.5rem]">{title}</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-navy-100/85">{text}</p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-1">
              {checks.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-[15px] text-navy-100">
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" fill="currentColor">
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.3 7.3-7.3a1 1 0 0 1 1.4 0Z" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[14px] border border-white/10 glass p-6 md:p-8">
            <p className="font-heading text-[13px] font-bold uppercase tracking-[.14em] text-amber-100">Prefer to call?</p>
            <a
              href={site.phoneHref}
              className="mt-2 flex items-center gap-3 font-heading text-[1.75rem] font-extrabold leading-tight text-white hover:text-amber-500 md:text-[2rem]"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 shrink-0 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
              </svg>
              {site.phone}
            </a>
            <p className="mt-2 text-sm text-navy-100/70">{site.hours}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button variant="gold" href="/free-estimate" size="lg" className="w-full sm:w-auto">
                Get a Free Estimate
              </Button>
              <Button href="/estimate-builder" variant="outline-white" size="lg" className="w-full sm:w-auto">
                Build a Ballpark
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
