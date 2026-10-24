import { CheckIcon, XIcon } from "./icons";

export default function CheckList({
  items,
  variant = "check",
  columns = 1,
  tone = "light",
}: {
  items: readonly string[];
  variant?: "check" | "x";
  columns?: 1 | 2;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const Icon = variant === "x" ? XIcon : CheckIcon;
  const iconCls =
    variant === "x"
      ? dark
        ? "bg-white/10 text-navy-100"
        : "bg-sand-200 text-ink-500"
      : dark
        ? "bg-amber-500/15 text-amber-500"
        : "bg-amber-100 text-amber-600";
  return (
    <ul className={`grid gap-x-8 gap-y-3.5 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((it) => (
        <li key={it} className="flex gap-3">
          <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${iconCls}`}>
            <Icon className="h-3.5 w-3.5" strokeWidth={2.4} />
          </span>
          <span className={`text-[15px] leading-relaxed ${dark ? "text-navy-100/90" : "text-ink-900"}`}>{it}</span>
        </li>
      ))}
    </ul>
  );
}
