import type { Stage } from "./data";
import { CheckIcon } from "./icons";

/** Vertical 8-stage timeline: what we do vs. the homeowner's role at each stage. */
export default function StageTimeline({ stages }: { stages: Stage[] }) {
  return (
    <ol className="relative">
      {stages.map((s, i) => {
        const last = i === stages.length - 1;
        return (
          <li key={s.n} className="relative grid grid-cols-[3rem_1fr] gap-x-5 pb-10 md:grid-cols-[4rem_1fr] md:gap-x-8 md:pb-14">
            {!last && (
              <span aria-hidden="true" className="absolute bottom-0 left-6 top-14 w-px bg-sand-200 md:left-8 md:top-18" />
            )}
            <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-navy-900 font-heading text-base font-extrabold text-amber-500 md:h-16 md:w-16 md:text-xl">
              {s.n}
            </span>
            <div className="min-w-0 pt-1 md:pt-3">
              <h3 className="text-xl font-bold md:text-2xl">{s.title}</h3>
              <p className="mt-1 text-sm font-semibold text-sea-600">{s.when}</p>
              <div className="mt-5 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
                <div className="rounded-xl border border-sand-200 bg-white p-6 shadow-card">
                  <p className="eyebrow !text-ink-500">What we do</p>
                  <ul className="mt-3 space-y-2.5">
                    {s.we.map((w) => (
                      <li key={w} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-900">
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-amber-600" strokeWidth={2.4} />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-amber-500/30 bg-amber-100 p-6">
                  <p className="eyebrow !text-amber-600">Your role</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-900">{s.you}</p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
