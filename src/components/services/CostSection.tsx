import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { Service } from "@/content/types";
import { BandEyebrow } from "./Band";
import { CheckIcon } from "./icons";
import { shortName } from "./utils";

/** Dark cost band: cost.text + price-moving factors + scope price table + what every contract includes. */
export default function CostSection({ service }: { service: Service }) {
  const priced = service.scopes.filter((s) => s.priceRange);
  return (
    <section id="cost" aria-labelledby="cost-title" className="bg-navy-900 py-16 text-white md:py-[72px]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <BandEyebrow onDark>Cost in Southwest Florida</BandEyebrow>
            <h2
              id="cost-title"
              className="text-3xl font-extrabold tracking-[-0.01em] !text-white md:text-[35px] md:leading-[1.15]"
            >
              What Moves the Price of Your {shortName(service)} Project
            </h2>
            {service.cost.title && <p className="mt-4 font-heading text-lg font-bold text-amber-100">{service.cost.title}</p>}
            <div className="mt-4 space-y-4 text-base leading-[1.65] text-navy-100 md:text-[17px]">
              {service.cost.text.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {service.cost.factors.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-bold !text-white">The factors behind the number</h3>
                <ul className="mt-4 space-y-3">
                  {service.cost.factors.map((f) => (
                    <li key={f} className="flex gap-3 text-[15px] leading-relaxed text-navy-100">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-8">
              <Button href={`/free-estimate?service=${service.slug}`} size="lg">
                Get My Written Price
              </Button>
            </div>
          </div>

          <div className="min-w-0 space-y-10">
            {priced.length > 0 && (
              <div className="overflow-hidden rounded-[14px] border border-navy-700">
                <table className="w-full text-left text-sm">
                  <caption className="visually-hidden">Typical price ranges by project scope</caption>
                  <thead className="bg-navy-950/60 text-xs uppercase tracking-[.12em] text-navy-100">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">Scope</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Typical range</th>
                      <th scope="col" className="hidden px-4 py-3 font-semibold sm:table-cell">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priced.map((s) => (
                      <tr key={s.title} className="border-t border-navy-700">
                        <th scope="row" className="px-4 py-3 font-medium text-white">{s.title}</th>
                        <td className="whitespace-nowrap px-4 py-3 font-semibold text-amber-500">{s.priceRange}</td>
                        <td className="hidden px-4 py-3 text-navy-100 sm:table-cell">{s.duration ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="border-t border-navy-700 bg-navy-950/40 px-4 py-3 text-xs leading-relaxed text-navy-100/80">
                  Ballpark ranges for Charlotte, Sarasota and Lee County homes. Your fixed price comes in writing after the
                  free visit.
                </p>
              </div>
            )}
            {service.included.length > 0 && (
              <div>
                <h3 className="text-lg font-bold !text-white">In every {shortName(service).toLowerCase()} contract</h3>
                <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {service.included.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[15px] leading-snug text-navy-100">
                      <CheckIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-amber-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
