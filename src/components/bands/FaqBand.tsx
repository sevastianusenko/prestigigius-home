import type { ReactNode } from "react";
import type { Faq } from "@/content/types";
import { site } from "@/content/site";
import FaqAccordion from "@/components/FaqAccordion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BandHead from "./BandHead";

export type FaqBandProps = {
  title?: ReactNode;
  eyebrow?: string;
  items: Faq[];
};

/** Light blue-grey FAQ band. Renders the accordion only — pages own the FAQPage JSON-LD. */
export default function FaqBand({
  title = "What Homeowners Ask Us Most",
  eyebrow = "Frequently asked questions",
  items,
}: FaqBandProps) {
  if (!items?.length) return null;
  return (
    <section className="section-y bg-navy-50">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.75fr] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <BandHead
              eyebrow={eyebrow}
              title={title}
              intro="Straight answers on permits, pricing, timelines and what it's like to have us in your house."
            />
            <div className="mt-8 rounded-[14px] bg-white p-6 shadow-card">
              <p className="font-heading text-[1.1rem] font-extrabold text-navy-900">Still have a question?</p>
              <p className="mt-1.5 text-[15px] text-ink-500">Call and talk to the person who will actually run your job.</p>
              <div className="mt-4 flex flex-col gap-2.5">
                <Button href={site.phoneHref}>Call {site.phone}</Button>
                <Button href="/contact" variant="ghost">
                  Send us a message
                </Button>
              </div>
              <p className="mt-3 text-[13px] text-ink-500">{site.hours}</p>
            </div>
          </div>
          <FaqAccordion items={items} />
        </div>
      </Container>
    </section>
  );
}
