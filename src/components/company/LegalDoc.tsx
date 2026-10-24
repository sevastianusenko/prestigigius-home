import Container from "@/components/ui/Container";
import type { LegalSection } from "./data";

function anchor(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Long-form legal text with an on-page table of contents. */
export default function LegalDoc({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="bg-sand-50 py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">On this page</p>
            <ol className="mt-4 space-y-2 border-l border-sand-200 text-sm">
              {sections.map((s) => (
                <li key={s.title}>
                  <a
                    href={`#${anchor(s.title)}`}
                    className="-ml-px block border-l-2 border-transparent pl-4 text-ink-500 hover:border-amber-500 hover:text-navy-900"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="max-w-3xl">
            {sections.map((s, i) => (
              <section key={s.title} id={anchor(s.title)} className={i === 0 ? "" : "mt-12"}>
                <h2 className="text-2xl font-bold md:text-[1.75rem]">
                  <span className="mr-2 text-amber-500">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                {s.body.map((p, j) => (
                  <p key={j} className="mt-4 text-[16px] leading-relaxed text-ink-900">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
