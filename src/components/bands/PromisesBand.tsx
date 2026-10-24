import type { ReactNode } from "react";
import { promises, type TitledText } from "@/content/company";
import Container from "@/components/ui/Container";
import BandHead, { CheckIcon } from "./BandHead";

export type PromisesBandProps = {
  eyebrow?: string;
  title?: ReactNode;
  items?: TitledText[];
};

export default function PromisesBand({
  eyebrow = "Our commitments",
  title = "Promises We Put in Writing Before We Start",
  items = promises,
}: PromisesBandProps) {
  return (
    <section className="section-y bg-sand-100">
      <Container>
        <BandHead
          eyebrow={eyebrow}
          title={title}
          intro="These are in the contract, not the brochure. If we don't keep one, you have it on paper."
          className="mb-10 md:mb-12"
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <li key={p.title} className="flex flex-col rounded-[14px] border border-navy-900/[.06] bg-white p-6 shadow-card md:p-7">
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-amber-100 text-amber-600">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <span aria-hidden="true" className="font-heading text-[13px] font-bold tracking-[.14em] text-ink-500/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-[1.1rem] font-extrabold">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-ink-500">{p.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
