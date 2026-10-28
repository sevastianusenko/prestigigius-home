import type { ReactNode } from "react";
import { site } from "@/content/site";
import { financingSteps } from "@/content/company";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { renderTitle } from "./BandHead";

export type FinancingBandProps = {
  title?: ReactNode;
  text?: ReactNode;
};

const kickers = ["At your estimate", "All or part", "Cash or financed"];

export default function FinancingBand({
  title = "Start Now, Spread the Cost Over Time",
  text = "A bathroom, a kitchen remodel or a whole house of impact windows costs real money, and you don't have to pay it in one shot. Ask about it at your free estimate and we'll go over the choices with you, subject to credit approval.",
}: FinancingBandProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 section-y">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-14">
          <div>
            <p className="eyebrow eyebrow-dark mb-3">Financing</p>
            <h2 className="h2-display !text-white">{renderTitle(title)}</h2>
            <div className="mt-4 text-[17px] leading-relaxed text-navy-100/85">{text}</div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button variant="gold" href="/free-estimate" size="lg">
                Get a Free Estimate
              </Button>
              <Button href={site.phoneHref} size="lg" variant="outline-white">
                Call {site.phone}
              </Button>
            </div>
          </div>
          <ol className="grid gap-4">
            {financingSteps.map((s, i) => (
              <li key={s.title} className="flex gap-4 rounded-[14px] border border-white/10 glass p-5 md:p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-amber-500 font-heading text-[15px] font-extrabold text-navy-950">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-heading text-[12px] font-bold uppercase tracking-[.14em] text-amber-100">
                    {kickers[i] ?? `Step ${i + 1}`}
                  </p>
                  <h3 className="mt-1 text-[1.1rem] font-extrabold !text-white">{s.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-[1.6] text-navy-100/80">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
