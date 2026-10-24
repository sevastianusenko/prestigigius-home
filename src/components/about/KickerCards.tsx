/**
 * Numbered cards with a small kicker line (reference: "Our Story" timeline,
 * the careers perks block, the after-you-apply steps,
 * referral "Three Steps"). `timeline` draws a connecting rule on desktop.
 */
export default function KickerCards({
  items,
  columns = 4,
  timeline = false,
  tone = "light",
}: {
  items: { kicker: string; title: string; text: string }[];
  columns?: 2 | 3 | 4;
  timeline?: boolean;
  tone?: "light" | "dark";
}) {
  const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" }[columns];
  const dark = tone === "dark";
  return (
    <ol className={`relative grid gap-6 ${cols}`}>
      {timeline ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-[27px] hidden h-px bg-amber-500/40 lg:block"
        />
      ) : null}
      {items.map((it, i) => (
        <li
          key={it.title}
          className={`relative flex flex-col rounded-[14px] p-7 ${
            dark ? "border border-white/10 bg-white/5" : "border border-sand-200 bg-white shadow-card"
          }`}
        >
          <span
            aria-hidden="true"
            className="grid h-11 w-11 place-items-center rounded-full bg-navy-900 font-heading text-sm font-extrabold text-amber-500 ring-4 ring-sand-50"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="eyebrow mt-5 !text-[11px]">{it.kicker}</p>
          <h3 className={`mt-2 text-xl font-bold ${dark ? "!text-white" : ""}`}>{it.title}</h3>
          <p className={`mt-2 text-[15px] leading-relaxed ${dark ? "text-navy-100/85" : "text-ink-500"}`}>{it.text}</p>
        </li>
      ))}
    </ol>
  );
}
