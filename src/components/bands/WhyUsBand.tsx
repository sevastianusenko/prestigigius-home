import type { ReactNode } from "react";
import { whyUs, type TitledText } from "@/content/company";
import Container from "@/components/ui/Container";
import BandHead from "./BandHead";

export type WhyUsBandProps = {
  title?: ReactNode;
  items?: TitledText[];
};

const icons: ReactNode[] = [
  <path key="a" d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Zm-3 9 2 2 4-4" />,
  <path key="b" d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm10 9v-1.5a3.5 3.5 0 0 0-2.5-3.4M15.5 4.2a3.5 3.5 0 0 1 0 6.6" />,
  <path key="c" d="M3 11.5 12 4l9 7.5M5.5 10v9.5h13V10M10 19.5v-5h4v5" />,
  <path key="d" d="M4 14a8 8 0 0 1 16 0M12 14v6M2 14h20M9 20h6" />,
  <path key="e" d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8L12 3Z" />,
  <path key="f" d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Zm0 0v5h5M9 13h6M9 17h4" />,
  <path key="g" d="M9 4h6v3H9zM7 5H5v16h14V5h-2M9 13l2 2 4-4" />,
  <path key="h" d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Zm0 5v5m0 3v.01" />,
];

export default function WhyUsBand({ title = "Why Homeowners Choose Prestigious", items = whyUs }: WhyUsBandProps) {
  return (
    <section className="section-y bg-white">
      <Container>
        <BandHead
          eyebrow="Why us"
          title={title}
          intro="A small, licensed, owner-run company that does the work with its own crew. Here is what that means on your job."
          center
          className="mb-10 md:mb-12"
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <li key={it.title} className="rounded-[14px] border border-navy-900/[.06] bg-sand-50 p-6">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-navy-900 text-amber-500">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-[22px] w-[22px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icons[i % icons.length]}
                </svg>
              </span>
              <h3 className="mt-4 text-[1.05rem] font-extrabold">{it.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-ink-500">{it.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
