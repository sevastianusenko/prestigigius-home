"use client";

import { useId, useState } from "react";

type Era = "new" | "old" | "unsure";

const ERAS: { value: Era; label: string; hint: string }[] = [
  { value: "new", label: "2009 or later", hint: "Likely built to the 2007 Florida Building Code or newer" },
  { value: "old", label: "Before 2009", hint: "Likely built to an older code" },
  { value: "unsure", label: "Not sure", hint: "We look it up in the permit history" },
];

/** Florida 25% roof rule self-check: roof era + share of the section needing work. */
export default function RoofRuleCheck({ note }: { note: string }) {
  const id = useId();
  const [era, setEra] = useState<Era>("old");
  const [share, setShare] = useState(30);
  const over = share > 25;

  const result =
    era === "unsure"
      ? {
          title: "Permit history decides it",
          text: "Which side of the rule you are on depends on the code your roof was permitted under. We pull the permit record before quoting, so the repair-or-replace answer is based on facts.",
          tone: "neutral",
        }
      : era === "new"
        ? {
            title: "Repair the damaged part to current code",
            text: "For roofs built to the 2007 code or newer, only the portion being repaired has to meet current code, even above 25%. A targeted repair is usually possible.",
            tone: "good",
          }
        : over
          ? {
              title: "Likely the whole section to current code",
              text: "On an older roof, repairing more than 25% of a section within 12 months traditionally means bringing that whole section up to current code. At that point a re-roof is often the better value.",
              tone: "warn",
            }
          : {
              title: "A repair is likely fine",
              text: "Under 25% of the section on an older roof can usually be repaired without triggering the whole-section rule. Keep an eye on the roof's age for your insurer, though.",
              tone: "good",
            };

  return (
    <div className="grid gap-6 rounded-[18px] border border-sand-200 bg-white p-5 shadow-card sm:p-7 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
      <div className="space-y-7">
        <fieldset>
          <legend className="flex items-center gap-3 font-heading text-[1.05rem] font-bold text-navy-900">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-navy-900 text-xs font-extrabold text-amber-500">1</span>
            When was the current roof installed?
          </legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {ERAS.map((e) => {
              const on = e.value === era;
              return (
                <label
                  key={e.value}
                  className={`flex cursor-pointer flex-col rounded-[12px] border p-4 transition focus-within:ring-2 focus-within:ring-amber-500 ${
                    on ? "border-amber-500 bg-amber-100/60" : "border-sand-200 bg-white hover:border-amber-500/60"
                  }`}
                >
                  <input type="radio" className="sr-only" name={`${id}-era`} value={e.value} checked={on} onChange={() => setEra(e.value)} />
                  <span className="font-heading text-[15px] font-bold text-navy-900">{e.label}</span>
                  <span className="mt-1 text-[13px] leading-snug text-ink-500">{e.hint}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div>
          <label htmlFor={`${id}-share`} className="flex items-center justify-between gap-3 font-heading text-[1.05rem] font-bold text-navy-900">
            <span className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-navy-900 text-xs font-extrabold text-amber-500">2</span>
              How much of that roof section needs work?
            </span>
            <span className="font-heading text-2xl font-extrabold">{share}%</span>
          </label>
          <input
            id={`${id}-share`}
            type="range"
            min={5}
            max={100}
            step={5}
            value={share}
            onChange={(e) => setShare(Number(e.target.value))}
            className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full accent-amber-500"
            style={{ background: `linear-gradient(to right, #C9A44C ${((share - 5) / 95) * 100}%, #E3E3E3 ${((share - 5) / 95) * 100}%)` }}
          />
          <div className="relative mt-2 h-4 text-[12px] font-semibold text-ink-500">
            <span className="absolute left-0">5%</span>
            <span className="absolute -translate-x-1/2" style={{ left: `${(20 / 95) * 100}%` }}>
              25%
            </span>
            <span className="absolute right-0">100%</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-[14px] bg-navy-950 p-6 text-white" aria-live="polite">
        <p
          className={`font-heading text-xs font-bold uppercase tracking-[.16em] ${
            result.tone === "warn" ? "text-[#E59A86]" : "text-amber-500"
          }`}
        >
          Likely outcome
        </p>
        <p className="mt-2 font-heading text-2xl font-extrabold !text-white">{result.title}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-navy-100/85">{result.text}</p>
        <p className="mt-auto border-t border-white/10 pt-4 text-[12px] leading-relaxed text-navy-100/60">{note}</p>
      </div>
    </div>
  );
}
