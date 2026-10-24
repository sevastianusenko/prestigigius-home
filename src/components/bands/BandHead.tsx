import { Fragment, type ReactNode } from "react";

/** Render a title; plain strings may contain "\n" for a hard line break. */
export function renderTitle(title: ReactNode): ReactNode {
  if (typeof title !== "string" || !title.includes("\n")) return title;
  const parts = title.split("\n");
  return parts.map((p, i) => (
    <Fragment key={i}>
      {p}
      {i < parts.length - 1 && <br />}
    </Fragment>
  ));
}

/** Eyebrow + H2 + intro used at the top of every band. */
export default function BandHead({
  eyebrow,
  title,
  intro,
  dark = false,
  center = false,
  className = "",
}: {
  eyebrow?: ReactNode;
  title?: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
  center?: boolean;
  className?: string;
}) {
  if (!eyebrow && !title && !intro) return null;
  return (
    <header className={`max-w-[1010px] ${center ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && <p className={`eyebrow mb-3 ${dark ? "eyebrow-dark" : ""}`}>{eyebrow}</p>}
      {title && <h2 className={`h2-display ${dark ? "!text-white" : ""}`}>{renderTitle(title)}</h2>}
      {intro && (
        <div
          className={`mt-4 max-w-3xl text-[17px] leading-relaxed ${center ? "mx-auto" : ""} ${
            dark ? "text-navy-100/85" : "text-ink-500"
          }`}
        >
          {intro}
        </div>
      )}
    </header>
  );
}

export function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`shrink-0 ${className}`} fill="currentColor">
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.3 7.3-7.3a1 1 0 0 1 1.4 0Z" />
    </svg>
  );
}

export function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-amber-500" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} aria-hidden="true" viewBox="0 0 20 20" className={className} fill="currentColor">
          <path d="M10 1.5 12.6 7l6 .7-4.5 4.1 1.2 5.9L10 14.8l-5.3 2.9 1.2-5.9L1.4 7.7l6-.7L10 1.5Z" />
        </svg>
      ))}
    </span>
  );
}

export function formatMonth(d: string) {
  const [y, m] = d.split("-").map(Number);
  if (!y || !m) return d;
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
}
