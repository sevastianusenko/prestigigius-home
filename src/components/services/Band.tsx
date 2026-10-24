import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

export type Tone = "light" | "paper" | "white";

export const toneBg: Record<Tone, string> = {
  light: "bg-sand-50",
  paper: "bg-sand-100",
  white: "bg-white",
};

/** Eyebrow styled to the reference: Montserrat-weight 13px, .14em tracking. */
export function BandEyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p
      className={`eyebrow mb-3 !text-[13px] !font-bold !tracking-[.14em] ${onDark ? "!text-amber-100" : "!text-amber-600"}`}
    >
      {children}
    </p>
  );
}

export const h2Class = "text-3xl font-extrabold tracking-[-0.01em] md:text-[35px] md:leading-[1.15]";

/**
 * Service-page section shell measured from the reference: ~72px vertical
 * padding, eyebrow + H2 (~35px), optional intro capped at ~1010px.
 */
export default function Band({
  id,
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  children,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  const center = align === "center";
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-16 text-ink-900 md:py-[72px] ${toneBg[tone]}`}>
      <Container>
        <header className={`mb-10 max-w-[1010px] md:mb-12 ${center ? "mx-auto text-center" : ""}`}>
          {eyebrow && <BandEyebrow>{eyebrow}</BandEyebrow>}
          <h2 id={`${id}-title`} className={h2Class}>
            {title}
          </h2>
          {intro && (
            <div className={`mt-4 max-w-3xl text-lg leading-relaxed text-ink-500 ${center ? "mx-auto" : ""}`}>{intro}</div>
          )}
        </header>
        {children}
      </Container>
    </section>
  );
}
