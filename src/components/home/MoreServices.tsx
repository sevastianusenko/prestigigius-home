import Link from "next/link";
import Container from "@/components/ui/Container";
import { services } from "@/content/services";

/**
 * Secondary services as a compact link list, so the home page leads with the
 * four core services instead of fourteen equal cards.
 */
export default function MoreServices({ exclude }: { exclude: string[] }) {
  const rest = services.filter((s) => !exclude.includes(s.slug));
  return (
    <section className="bg-sand-50 pb-16 md:pb-[72px]" aria-labelledby="more-services-heading">
      <Container>
        <div className="rounded-[14px] border border-sand-200 bg-white p-6 shadow-card md:p-8">
          <h2 id="more-services-heading" className="font-heading text-xl font-extrabold md:text-2xl">
            Also under the same contract
          </h2>
          <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-ink-500">
            When a bigger project needs more than windows, a kitchen or a bath, we handle the rest of the house too,
            with permits and inspections included.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {rest.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex min-h-10 items-center rounded-full border border-sand-200 bg-sand-50 px-4 text-[14px] font-semibold text-navy-900 transition-colors hover:border-amber-500 hover:bg-white"
                >
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
