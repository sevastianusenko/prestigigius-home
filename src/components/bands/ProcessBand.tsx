import type { ReactNode } from "react";
import type { Step } from "@/content/types";
import { processSteps, site } from "@/content/site";
import ProcessSteps from "@/components/ProcessSteps";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BandHead from "./BandHead";

export type ProcessBandProps = {
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  steps?: Step[];
};

export default function ProcessBand({
  eyebrow = "Our process",
  title = "Four Steps. No Surprises.",
  intro = "Plain answers and a written plan from the first phone call to the day we hand you the warranty.",
  steps = processSteps,
}: ProcessBandProps) {
  return (
    <section className="section-y bg-white">
      <Container>
        <BandHead eyebrow={eyebrow} title={title} intro={intro} center className="mb-10 md:mb-12" />
        <ProcessSteps steps={steps} />
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/free-estimate" size="lg">
            Get a Free Estimate
          </Button>
          <Button href={site.phoneHref} size="lg" variant="ghost">
            Call {site.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}
