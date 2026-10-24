/** Simple numbered step cards (financing steps, warranty claims, what happens next). */
export default function NumberedCards({
  items,
  tone = "light",
}: {
  items: { n: string; title: string; text: string }[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const cols = items.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  return (
    <ol className={`grid gap-6 ${cols}`}>
      {items.map((s) => (
        <li
          key={s.n}
          className={`flex flex-col rounded-xl p-7 ${
            dark ? "border border-white/15 bg-white/5" : "border border-sand-200 bg-white shadow-card"
          }`}
        >
          <span aria-hidden="true" className="font-heading text-4xl font-extrabold leading-none text-amber-500">
            {s.n}
          </span>
          <h3 className={`mt-4 text-lg font-bold ${dark ? "!text-white" : ""}`}>{s.title}</h3>
          <p className={`mt-2 text-[15px] leading-relaxed ${dark ? "text-navy-100/85" : "text-ink-500"}`}>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
