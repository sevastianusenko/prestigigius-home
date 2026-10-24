import type { ReactNode } from "react";
import Container from "./Container";
import Eyebrow from "./Eyebrow";

const tones = {
  light: "bg-sand-50 text-ink-900",
  white: "bg-white text-ink-900",
  tint: "bg-navy-50 text-ink-900",
  paper: "bg-sand-100 text-ink-900",
  dark: "bg-navy-900 text-navy-100",
} as const;

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  className = "",
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "paper" | "dark" | "white" | "tint";
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}) {
  const dark = tone === "dark";
  const center = align === "center";
  const hasHead = eyebrow || title || intro;
  return (
    <section id={id} className={`section-y ${tones[tone]} ${className}`}>
      <Container>
        {hasHead && (
          <header className={`mb-10 md:mb-12 max-w-[1010px] ${center ? "mx-auto text-center" : ""}`}>
            {eyebrow && <Eyebrow className={`mb-3 ${dark ? "eyebrow-dark" : ""}`}>{eyebrow}</Eyebrow>}
            {title && (
              <h2 className={`h2-display ${dark ? "!text-white" : ""}`}>{title}</h2>
            )}
            {intro && (
              <div className={`mt-4 max-w-3xl text-[17px] leading-relaxed ${center ? "mx-auto" : ""} ${dark ? "text-navy-100/85" : "text-ink-500"}`}>{intro}</div>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
