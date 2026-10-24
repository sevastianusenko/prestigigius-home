"use client";

import Link from "next/link";
import { useState } from "react";
import type { LanaiPath } from "@/content/service-pages/lanai-enclosures";

type Finder = { open: Record<"sound" | "damaged", LanaiPath>; room: Record<"under" | "cage", LanaiPath> };

type Choice = { value: string; label: string; hint: string };

function Question({
  n,
  title,
  choices,
  value,
  onChange,
}: {
  n: number;
  title: string;
  choices: Choice[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="flex items-center gap-3 font-heading text-[1.05rem] font-bold text-navy-900">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-navy-900 text-xs font-extrabold text-amber-500">{n}</span>
        {title}
      </legend>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {choices.map((c) => {
          const on = c.value === value;
          return (
            <label
              key={c.value}
              className={`flex cursor-pointer flex-col rounded-[12px] border p-4 transition focus-within:ring-2 focus-within:ring-amber-500 ${
                on ? "border-amber-500 bg-amber-100/60" : "border-sand-200 bg-white hover:border-amber-500/60"
              }`}
            >
              <input type="radio" className="sr-only" name={`q${n}`} value={c.value} checked={on} onChange={() => onChange(c.value)} />
              <span className="font-heading text-[15px] font-bold text-navy-900">{c.label}</span>
              <span className="mt-1 text-[13px] leading-snug text-ink-500">{c.hint}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

/** Two questions → the lanai path that usually fits, with typical pricing. */
export default function LanaiPathFinder({ finder }: { finder: Finder }) {
  const [goal, setGoal] = useState<"open" | "room">("open");
  const [state, setState] = useState("sound");

  const second =
    goal === "open"
      ? {
          title: "What shape is the frame in?",
          choices: [
            { value: "sound", label: "Straight and solid", hint: "Some torn screen or rusty screws, but nothing bent" },
            { value: "damaged", label: "Bent, loose or it moved", hint: "Twisted beams, separated gutters, or the cage shifted in a storm" },
          ],
        }
      : {
          title: "What is over the lanai now?",
          choices: [
            { value: "under", label: "The main roof of the house", hint: "A covered porch under the same roof as the house" },
            { value: "cage", label: "A screen cage or panel roof", hint: "Open screen roof or an aluminum panel cover" },
          ],
        };

  const result: LanaiPath =
    goal === "open"
      ? finder.open[state === "damaged" ? "damaged" : "sound"]
      : finder.room[state === "cage" ? "cage" : "under"];

  return (
    <div className="grid gap-6 rounded-[18px] border border-sand-200 bg-white p-5 shadow-card sm:p-7 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
      <div className="space-y-7">
        <Question
          n={1}
          title="How do you want to use it?"
          value={goal}
          onChange={(v) => {
            setGoal(v as "open" | "room");
            setState(v === "open" ? "sound" : "under");
          }}
          choices={[
            { value: "open", label: "Keep it screened and open-air", hint: "Fresh screen, a sound cage, a nicer outdoor space" },
            { value: "room", label: "A room with AC all year", hint: "Glass instead of screen, cooled and finished inside" },
          ]}
        />
        <Question n={2} title={second.title} value={state} onChange={setState} choices={second.choices} />
      </div>

      <div className="flex flex-col rounded-[14px] bg-navy-950 p-6 text-white" aria-live="polite">
        <p className="font-heading text-xs font-bold uppercase tracking-[.16em] text-amber-500">Usually the right path</p>
        <p className="mt-2 font-heading text-2xl font-extrabold !text-white">{result.title}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-navy-100/85">{result.text}</p>
        <dl className="mt-5 grid gap-3 border-t border-white/10 pt-4 text-[14px]">
          <div className="flex justify-between gap-4">
            <dt className="text-navy-100/70">Typical cost</dt>
            <dd className="text-right font-heading font-bold text-white">{result.price}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-navy-100/70">Time</dt>
            <dd className="text-right font-semibold text-white">{result.time}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-navy-100/70">Permit</dt>
            <dd className="text-right font-semibold text-white">{result.permit}</dd>
          </div>
        </dl>
        {result.href ? (
          <Link href={result.href} className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-bold text-amber-500 hover:text-white">
            See Florida room additions <span aria-hidden="true">→</span>
          </Link>
        ) : null}
        <p className="mt-auto pt-5 text-[12px] leading-relaxed text-navy-100/60">
          A starting point, not a diagnosis. We confirm it on site after checking the frame, slab, roof tie-in and flood zone.
        </p>
      </div>
    </div>
  );
}
