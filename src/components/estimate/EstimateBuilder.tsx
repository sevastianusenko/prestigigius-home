"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { useFormToken } from "@/lib/useFormToken";
import { formatRange, parsePriceRange, roundBallpark, type ParsedPrice } from "./price";

/* ------------------------------------------------------------------ */
/* Types & options                                                     */
/* ------------------------------------------------------------------ */

export type EstimateScope = { title: string; summary: string; priceRange?: string; duration?: string };
export type EstimateService = {
  slug: string;
  title: string;
  blurb: string;
  group: "interior" | "exterior" | "restoration";
  scopes: EstimateScope[];
};

type Contact = { phone: string; phoneHref: string };

type Option = { value: string; label: string; hint?: string };

const NOT_SURE = "__not-sure__";

const sizeOptions: (Option & { factor: number })[] = [
  { value: "small", label: "Under 1,500 sq ft", hint: "Condo, villa or smaller ranch", factor: 1 }, // TODO client: size multiplier (was 0.9, unverified)
  { value: "mid", label: "1,500–2,500 sq ft", hint: "Most Port Charlotte homes", factor: 1 },
  { value: "large", label: "Over 2,500 sq ft", hint: "Larger or two-story homes", factor: 1 }, // TODO client: size multiplier (was 1.15, unverified)
  { value: "unsure", label: "Not sure", factor: 1 },
];

const hoaOptions: Option[] = [
  { value: "hoa", label: "Yes, HOA or condo association", hint: "Board approval usually comes before the permit" },
  { value: "none", label: "No HOA", hint: "County or city permit only" },
  { value: "unsure", label: "Not sure" },
];

const timelineOptions: Option[] = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3", label: "In 1–3 months" },
  { value: "3-6", label: "In 3–6 months" },
  { value: "planning", label: "Just planning for now" },
];

const steps = ["Services", "Scope", "Your home", "Ballpark"] as const;

const groupLabel: Record<EstimateService["group"], string> = {
  interior: "Interior",
  exterior: "Exterior",
  restoration: "Restoration",
};

/* ------------------------------------------------------------------ */
/* Styles                                                              */
/* ------------------------------------------------------------------ */

const field =
  "block w-full rounded-lg border border-sand-200 bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-500/60 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30";
const lbl = "mb-1.5 block text-sm font-medium text-navy-900";
const primaryBtn =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 font-semibold btn-black disabled:cursor-not-allowed disabled:opacity-60";
const backBtn =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full border border-navy-900/25 px-6 font-semibold text-navy-900 transition-colors hover:border-navy-900";
/** Card-style label wrapping a native checkbox/radio (keeps keyboard + screen reader behavior). */
const choiceCard =
  "relative flex h-full cursor-pointer gap-3 rounded-[14px] border-2 border-sand-200 bg-white p-4 transition-colors hover:border-navy-900/40 has-[:checked]:border-amber-500 has-[:checked]:bg-amber-100/40 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-amber-500/40";
const inputCls = "mt-1 h-5 w-5 shrink-0 accent-amber-600";

/* ------------------------------------------------------------------ */
/* Ballpark math                                                       */
/* ------------------------------------------------------------------ */

type Line = {
  service: EstimateService;
  scope: EstimateScope | null; // null = "not sure yet"
  price: ParsedPrice | null;
};

function computeBallpark(lines: Line[], factor: number) {
  const lump = lines.filter((l) => l.price && l.price.unit === null);
  const perUnit = lines.filter((l) => l.price && l.price.unit !== null);
  const onSite = lines.filter((l) => !l.price);
  const low = lump.reduce((s, l) => s + (l.price as ParsedPrice).low, 0) * factor;
  const high = lump.reduce((s, l) => s + (l.price as ParsedPrice).high, 0) * factor;
  return {
    lump,
    perUnit,
    onSite,
    low: lump.length ? roundBallpark(low, "down") : 0,
    high: lump.length ? roundBallpark(high, "up") : 0,
    openEnded: lump.some((l) => l.price?.openEnded),
  };
}

function priceLabel(p: ParsedPrice | null, raw?: string): string {
  if (!p) return raw || "Priced on site";
  const range = formatRange(p.low, p.high, p.openEnded);
  return p.unit ? `${range} per ${p.unit}` : `${range}${p.note ? ` ${p.note}` : ""}`;
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

type Status = "idle" | "sending" | "success" | "error";

export default function EstimateBuilder({ services, contact }: { services: EstimateService[]; contact: Contact }) {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string[]>([]);
  const [scopes, setScopes] = useState<Record<string, string>>({});
  const [size, setSize] = useState("mid");
  const [hoa, setHoa] = useState("unsure");
  const [timeline, setTimeline] = useState("1-3");
  const [stepError, setStepError] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");
  const getToken = useFormToken();

  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  // Move focus to the new step's heading so keyboard and screen reader users land in the right place.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step, status]);

  const selected = useMemo(() => services.filter((s) => picked.includes(s.slug)), [services, picked]);

  const lines: Line[] = useMemo(
    () =>
      selected.map((service) => {
        const choice = scopes[service.slug];
        const scope = choice && choice !== NOT_SURE ? service.scopes.find((sc) => sc.title === choice) ?? null : null;
        return { service, scope, price: scope ? parsePriceRange(scope.priceRange) : null };
      }),
    [selected, scopes],
  );

  const factor = sizeOptions.find((o) => o.value === size)?.factor ?? 1;
  const ballpark = useMemo(() => computeBallpark(lines, factor), [lines, factor]);

  function toggle(slug: string) {
    setStepError("");
    setPicked((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }

  function go(to: number) {
    if (to > step) {
      if (step === 0 && picked.length === 0) {
        setStepError("Pick at least one service to continue.");
        return;
      }
      if (step === 1) {
        const missing = selected.filter((s) => !scopes[s.slug]);
        if (missing.length) {
          setStepError(`Choose a scope for ${missing.map((m) => m.title).join(", ")} (or “Not sure yet”).`);
          return;
        }
      }
    }
    setStepError("");
    setStep(to);
    document.getElementById("estimate-builder")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function buildMessage(notes: string): string {
    const optLabel = (opts: Option[], v: string) => opts.find((o) => o.value === v)?.label ?? v;
    const rows = lines.map((l) => {
      if (!l.scope) return `- ${l.service.title}: not sure yet (help me decide)`;
      const bits = [l.scope.priceRange ? `typical ${l.scope.priceRange}` : "", l.scope.duration ?? ""].filter(Boolean);
      return `- ${l.service.title}: ${l.scope.title}${bits.length ? ` (${bits.join(", ")})` : ""}`;
    });
    const out = [
      "Estimate builder selections:",
      ...rows,
      "",
      `Home size: ${optLabel(sizeOptions, size)}`,
      `HOA / permits: ${optLabel(hoaOptions, hoa)}`,
      `Timeline: ${optLabel(timelineOptions, timeline)}`,
      "",
      ballpark.lump.length
        ? `Ballpark shown: ${formatRange(ballpark.low, ballpark.high, ballpark.openEnded)}`
        : "Ballpark shown: none (all items priced on site)",
      ...ballpark.perUnit.map((l) => `Per-unit pricing: ${l.service.title}, ${priceLabel(l.price)}`),
    ];
    if (notes) out.push("", `Notes: ${notes}`);
    return out.join("\n");
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const payload = {
      name: get("name"),
      phone: get("phone"),
      email: get("email"),
      address: get("address"),
      service: "Estimate builder",
      message: buildMessage(get("notes")),
      company: String(fd.get("company") ?? ""),
      page: "/estimate-builder",
    };
    if (!payload.name || (!payload.phone && !payload.email)) {
      setStatus("error");
      setFormError("Please add your name and a phone number or email so we can reach you.");
      return;
    }
    setStatus("sending");
    setFormError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, token: await getToken() }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setFormError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  /* ---------------- render ---------------- */

  const heading = (text: string, sub?: string) => (
    <div>
      <p className="eyebrow !text-amber-600">
        Step {step + 1} of {steps.length}
      </p>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="mt-2 font-heading text-2xl font-extrabold text-navy-900 focus:outline-none md:text-[32px]"
      >
        {text}
      </h2>
      {sub ? <p className="mt-2 max-w-2xl text-ink-500">{sub}</p> : null}
    </div>
  );

  const errorBox = stepError ? (
    <p role="alert" className="mt-6 rounded-lg border border-amber-500/40 bg-amber-100 px-4 py-3 text-sm font-medium text-navy-900">
      {stepError}
    </p>
  ) : null;

  return (
    <div id="estimate-builder" className="scroll-mt-28">
      {/* Progress */}
      <nav aria-label="Estimate builder progress">
        <ol className="grid grid-cols-4 gap-2">
          {steps.map((label, i) => {
            const current = i === step;
            const done = i < step;
            return (
              <li key={label} aria-current={current ? "step" : undefined} className="min-w-0">
                <span className={`block h-1.5 rounded-full ${done || current ? "bg-amber-500" : "bg-sand-200"}`} />
                <span
                  className={`mt-2 block truncate text-xs font-semibold sm:text-sm ${
                    current ? "text-navy-900" : done ? "text-ink-500" : "text-ink-500/70"
                  }`}
                >
                  {i + 1}. {label}
                  {done ? <span className="visually-hidden"> (done)</span> : null}
                </span>
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="mt-8 rounded-[14px] border border-sand-200 bg-white p-5 shadow-card sm:p-8 md:p-10">
        {/* STEP 1 — services */}
        {step === 0 ? (
          <div>
            {heading("What are you thinking about?", "Pick one project or several. You can combine a kitchen with a bathroom, new floors with impact windows, and so on.")}
            <fieldset className="mt-8">
              <legend className="visually-hidden">Services</legend>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <label className={choiceCard}>
                      <input
                        type="checkbox"
                        name="services"
                        value={s.slug}
                        checked={picked.includes(s.slug)}
                        onChange={() => toggle(s.slug)}
                        className={inputCls}
                      />
                      <span className="min-w-0">
                        <span className="block text-[11px] font-bold uppercase tracking-[.14em] text-amber-600">
                          {groupLabel[s.group]}
                        </span>
                        <span className="mt-0.5 block font-heading font-bold text-navy-900">{s.title}</span>
                        <span className="mt-1 block text-sm leading-snug text-ink-500">{s.blurb}</span>
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </fieldset>
            {errorBox}
            <div className="mt-8 flex flex-col-reverse items-stretch justify-between gap-3 sm:flex-row sm:items-center">
              <p className="text-sm text-ink-500" aria-live="polite">
                {picked.length === 0 ? "Nothing picked yet" : `${picked.length} picked`}
              </p>
              <button type="button" onClick={() => go(1)} className={primaryBtn}>
                Next: choose the scope <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        ) : null}

        {/* STEP 2 — scope per service */}
        {step === 1 ? (
          <div>
            {heading("How big is each project?", "Choose the closer match. Ranges are typical installed prices for Southwest Florida homes.")}
            <div className="mt-8 space-y-10">
              {selected.map((s) => (
                <fieldset key={s.slug}>
                  <legend className="font-heading text-lg font-bold text-navy-900">{s.title}</legend>
                  <ul className="mt-4 grid gap-3 md:grid-cols-2">
                    {s.scopes.map((sc) => (
                      <li key={sc.title}>
                        <label className={choiceCard}>
                          <input
                            type="radio"
                            name={`scope-${s.slug}`}
                            value={sc.title}
                            checked={scopes[s.slug] === sc.title}
                            onChange={() => {
                              setStepError("");
                              setScopes((prev) => ({ ...prev, [s.slug]: sc.title }));
                            }}
                            className={inputCls}
                          />
                          <span className="min-w-0">
                            <span className="block font-semibold text-navy-900">{sc.title}</span>
                            <span className="mt-1 block text-sm leading-snug text-ink-500">{sc.summary}</span>
                            <span className="mt-2 flex flex-wrap gap-2 text-xs font-semibold">
                              {sc.priceRange ? (
                                <span className="rounded-full bg-navy-900 px-2.5 py-1 text-white">{sc.priceRange}</span>
                              ) : null}
                              {sc.duration ? (
                                <span className="rounded-full bg-sand-100 px-2.5 py-1 text-navy-900">{sc.duration}</span>
                              ) : null}
                            </span>
                          </span>
                        </label>
                      </li>
                    ))}
                    <li>
                      <label className={choiceCard}>
                        <input
                          type="radio"
                          name={`scope-${s.slug}`}
                          value={NOT_SURE}
                          checked={scopes[s.slug] === NOT_SURE}
                          onChange={() => {
                            setStepError("");
                            setScopes((prev) => ({ ...prev, [s.slug]: NOT_SURE }));
                          }}
                          className={inputCls}
                        />
                        <span className="min-w-0">
                          <span className="block font-semibold text-navy-900">Not sure yet</span>
                          <span className="mt-1 block text-sm leading-snug text-ink-500">
                            We will help you pick the right scope during the walkthrough.
                          </span>
                        </span>
                      </label>
                    </li>
                  </ul>
                </fieldset>
              ))}
            </div>
            {errorBox}
            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
              <button type="button" onClick={() => go(0)} className={backBtn}>
                <span aria-hidden="true">←</span> Back
              </button>
              <button type="button" onClick={() => go(2)} className={primaryBtn}>
                Next: about your home <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        ) : null}

        {/* STEP 3 — modifiers */}
        {step === 2 ? (
          <div>
            {heading("A little about your home", "Three quick questions that move the number and the schedule.")}
            <div className="mt-8 grid gap-10 lg:grid-cols-3 lg:gap-8">
              <RadioGroup legend="Home size (living area)" name="size" options={sizeOptions} value={size} onChange={setSize} />
              <RadioGroup legend="HOA or condo association?" name="hoa" options={hoaOptions} value={hoa} onChange={setHoa} />
              <RadioGroup legend="When would you like to start?" name="timeline" options={timelineOptions} value={timeline} onChange={setTimeline} />
            </div>
            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
              <button type="button" onClick={() => go(1)} className={backBtn}>
                <span aria-hidden="true">←</span> Back
              </button>
              <button type="button" onClick={() => go(3)} className={primaryBtn}>
                See my ballpark <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        ) : null}

        {/* STEP 4 — summary + form */}
        {step === 3 ? (
          status === "success" ? (
            <div role="status" className="py-6 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-amber-100 text-amber-600">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2.2}>
                  <path d="m5 12 5 5 9-10" />
                </svg>
              </div>
              <h2 ref={headingRef} tabIndex={-1} className="mt-5 text-2xl font-bold focus:outline-none">
                Thanks. Your selections are on their way to us.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-ink-500">
                Tim or Vlad will call within one business day to set up your free walkthrough and written estimate. Need us
                sooner? Call{" "}
                <a href={contact.phoneHref} className="font-semibold text-sea-600 hover:underline">
                  {contact.phone}
                </a>
                .
              </p>
            </div>
          ) : (
            <div>
              {heading("Your ballpark")}
              <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12">
                {/* Summary */}
                <div className="min-w-0">
                  <div className="rounded-[14px] bg-navy-950 p-6 text-white sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-[.14em] text-amber-100">Combined ballpark</p>
                    {ballpark.lump.length ? (
                      <p className="mt-2 font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                        {formatRange(ballpark.low, ballpark.high, ballpark.openEnded)}
                      </p>
                    ) : (
                      <p className="mt-2 font-heading text-2xl font-extrabold text-white">Priced at the walkthrough</p>
                    )}
                    {ballpark.lump.length && factor !== 1 ? (
                      <p className="mt-2 text-sm text-navy-100/80">
                        Adjusted {factor < 1 ? "down" : "up"} for home size.
                      </p>
                    ) : null}
                    {ballpark.perUnit.length ? (
                      <div className="mt-5 border-t border-white/15 pt-4">
                        <p className="text-xs font-bold uppercase tracking-[.14em] text-amber-100">Priced per unit</p>
                        <ul className="mt-2 space-y-1 text-sm text-navy-100">
                          {ballpark.perUnit.map((l) => (
                            <li key={l.service.slug}>
                              <span className="font-semibold text-white">{l.service.title}:</span> {priceLabel(l.price)}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-2 text-xs text-navy-100/70">Not included above. We measure on site.</p>
                      </div>
                    ) : null}
                    <p className="mt-6 rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold text-white">
                      Ballpark only — your written estimate is free and exact.
                    </p>
                  </div>

                  <h3 className="mt-8 font-heading text-lg font-bold text-navy-900">What you picked</h3>
                  <ul className="mt-3 divide-y divide-sand-200 rounded-[14px] border border-sand-200">
                    {lines.map((l) => (
                      <li key={l.service.slug} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                        <div className="min-w-0">
                          <p className="font-semibold text-navy-900">{l.service.title}</p>
                          <p className="text-sm text-ink-500">
                            {l.scope ? l.scope.title : "Not sure yet"}
                            {l.scope?.duration ? ` · ${l.scope.duration}` : ""}
                          </p>
                        </div>
                        <p className="shrink-0 text-sm font-semibold text-navy-900 sm:text-right">
                          {l.scope ? priceLabel(l.price, l.scope.priceRange) : "Priced on site"}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-4 space-y-1.5 text-sm text-ink-500">
                    <li>
                      Home size: <span className="text-navy-900">{sizeOptions.find((o) => o.value === size)?.label}</span>
                    </li>
                    <li>
                      HOA: <span className="text-navy-900">{hoaOptions.find((o) => o.value === hoa)?.label}</span>
                      {hoa === "hoa" ? " — we prepare the board submittal and plan the permit around it." : ""}
                    </li>
                    <li>
                      Timeline: <span className="text-navy-900">{timelineOptions.find((o) => o.value === timeline)?.label}</span>
                    </li>
                  </ul>
                  <p className="mt-5 text-xs leading-relaxed text-ink-500">
                    Ranges are typical installed prices for Charlotte, Sarasota and Lee County homes. Permits, engineering,
                    hidden damage, HOA requirements and your finish choices move the real number. Combined projects often
                    share demolition, permits and trips, so the written estimate can come in lower than the sum.
                  </p>
                  <button type="button" onClick={() => go(0)} className="mt-4 text-sm font-semibold text-sea-600 hover:underline">
                    Change my selections
                  </button>
                </div>

                {/* Form */}
                <div className="min-w-0">
                  <h3 className="font-heading text-xl font-bold text-navy-900">Send this to us</h3>
                  <p className="mt-1 text-sm text-ink-500">
                    We will call to set up a free walkthrough and turn this into a written, itemized estimate.
                  </p>
                  <form onSubmit={onSubmit} noValidate className="mt-5 grid gap-4">
                    <div>
                      <label htmlFor="eb-name" className={lbl}>
                        Full name <span className="text-amber-600">*</span>
                      </label>
                      <input id="eb-name" name="name" type="text" required autoComplete="name" className={field} />
                    </div>
                    <div>
                      <label htmlFor="eb-phone" className={lbl}>
                        Phone <span className="text-amber-600">*</span>
                      </label>
                      <input id="eb-phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} />
                    </div>
                    <div>
                      <label htmlFor="eb-email" className={lbl}>
                        Email
                      </label>
                      <input id="eb-email" name="email" type="email" autoComplete="email" className={field} />
                    </div>
                    <div>
                      <label htmlFor="eb-address" className={lbl}>
                        Project address or city
                      </label>
                      <input id="eb-address" name="address" type="text" autoComplete="street-address" className={field} />
                    </div>
                    <div>
                      <label htmlFor="eb-notes" className={lbl}>
                        Anything else we should know? <span className="font-normal text-ink-500">(optional)</span>
                      </label>
                      <textarea id="eb-notes" name="notes" rows={3} className={field} />
                    </div>
                    {/* Honeypot */}
                    <div aria-hidden="true" className="visually-hidden">
                      <label htmlFor="eb-company">Company</label>
                      <input id="eb-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                    </div>
                    {status === "error" && formError ? (
                      <p role="alert" className="rounded-lg border border-amber-500/40 bg-amber-100 px-4 py-3 text-sm font-medium text-navy-900">
                        {formError}
                      </p>
                    ) : null}
                    <button type="submit" disabled={status === "sending"} className={`${primaryBtn} w-full`}>
                      {status === "sending" ? "Sending…" : "Send my selections"}
                    </button>
                    <p className="text-center text-xs text-ink-500">
                      Free and no obligation. Prefer to talk?{" "}
                      <a href={contact.phoneHref} className="font-semibold text-sea-600 hover:underline">
                        {contact.phone}
                      </a>
                    </p>
                  </form>
                </div>
              </div>
              <div className="mt-8">
                <button type="button" onClick={() => go(2)} className={backBtn}>
                  <span aria-hidden="true">←</span> Back
                </button>
              </div>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
}

function RadioGroup({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: Option[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="font-heading text-base font-bold text-navy-900">{legend}</legend>
      <ul className="mt-3 space-y-2.5">
        {options.map((o) => (
          <li key={o.value}>
            <label className={choiceCard}>
              <input
                type="radio"
                name={name}
                value={o.value}
                checked={value === o.value}
                onChange={() => onChange(o.value)}
                className={inputCls}
              />
              <span className="min-w-0">
                <span className="block font-semibold text-navy-900">{o.label}</span>
                {o.hint ? <span className="mt-0.5 block text-sm text-ink-500">{o.hint}</span> : null}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
