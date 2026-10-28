import type { ReactNode } from "react";
import { site } from "@/content/site";
import Container from "./ui/Container";

const icon = (d: ReactNode) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-[22px] w-[22px] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {d}
  </svg>
);

const items: { title: string; text: string; icon: ReactNode; href?: string }[] = [
  {
    title: "Licensed & insured",
    text: `FL ${site.license}`,
    icon: icon(
      <>
        <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>,
    ),
  },
  {
    title: `${site.ratings.bbb.grade} BBB rating`,
    text: "Accredited business",
    href: site.ratings.bbb.href,
    icon: icon(
      <>
        <circle cx="12" cy="9" r="6" />
        <path d="m8.5 14.5-1.5 6.5 5-3 5 3-1.5-6.5" />
      </>,
    ),
  },
  {
    title: `${site.ratings.google.score} on Google`,
    text: "Rated by homeowners",
    href: site.ratings.google.href,
    icon: icon(<path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8L12 3Z" />),
  },
  {
    title: "Family-owned",
    text: "Based in Port Charlotte, FL",
    icon: icon(
      <>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10v9.5h13V10" />
        <path d="M10 19.5v-5h4v5" />
      </>,
    ),
  },
  {
    title: "Financing available",
    text: "Ask at your estimate",
    icon: icon(
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18M7 15h3" />
      </>,
    ),
  },
];

/** Thin trust strip: icon + 2-line label for license, BBB, Google, family-owned, financing. */
export default function TrustStrip({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div
      className={
        dark ? "border-y border-white/10 bg-navy-950 text-white" : "border-b border-navy-900/[.07] bg-white text-ink-900"
      }
    >
      <Container>
        <ul className="grid grid-cols-2 gap-x-5 gap-y-5 py-6 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between lg:gap-6 lg:py-5">
          {items.map((it, i) => {
            const body = (
              <>
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${
                    dark ? "bg-white/10 text-amber-500" : "bg-amber-100 text-amber-600"
                  }`}
                >
                  {it.icon}
                </span>
                <span className="min-w-0 leading-tight">
                  <span className={`block font-heading text-[14px] font-bold ${dark ? "text-white" : "text-navy-900"}`}>
                    {it.title}
                  </span>
                  <span className={`mt-0.5 block text-[13px] ${dark ? "text-navy-100/75" : "text-ink-500"}`}>{it.text}</span>
                </span>
              </>
            );
            return (
              <li key={it.title} className={i === items.length - 1 ? "col-span-2 sm:col-span-1" : ""}>
                {it.href ? (
                  <a
                    href={it.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg transition-opacity hover:opacity-80"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="flex items-center gap-3">{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}
