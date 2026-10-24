import type { Step } from "@/content/types";
import { processSteps } from "@/content/site";

export default function ProcessSteps({ steps = processSteps }: { steps?: Step[] }) {
  return (
    <ol className={`grid gap-6 sm:grid-cols-2 ${steps.length === 5 ? "lg:grid-cols-5" : steps.length % 3 === 0 && steps.length % 4 !== 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
      {steps.map((s) => (
        <li key={s.n} className="relative flex flex-col rounded-[14px] border border-navy-900/[.06] bg-white p-6 shadow-card md:p-7">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-900 font-heading text-[15px] font-extrabold text-amber-500"
            >
              {s.n}
            </span>
            <span className="h-px flex-1 bg-navy-900/10" aria-hidden="true" />
          </div>
          <h3 className="mt-5 text-[1.15rem] font-extrabold">{s.title}</h3>
          <p className="mt-1 font-heading text-[12px] font-bold uppercase tracking-[.12em] text-amber-600">{s.kicker}</p>
          <p className="mt-3 text-[15px] leading-[1.6] text-ink-500">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
