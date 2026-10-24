/** Horizontal-on-desktop, vertical-on-mobile milestones timeline for /about. */
export default function Milestones({ items }: { items: { year: string | number; text: string }[] }) {
  return (
    <ol className="relative grid gap-8 md:grid-flow-col md:auto-cols-fr md:gap-6">
      <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-white/20 md:hidden" />
      <span aria-hidden="true" className="absolute left-0 right-0 top-[7px] hidden h-px bg-white/20 md:block" />
      {items.map((m, i) => (
        <li key={`${m.year}-${i}`} className="relative pl-9 md:pl-0 md:pt-10">
          <span
            aria-hidden="true"
            className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-[3px] border-navy-900 bg-amber-500 ring-2 ring-amber-500/40 md:top-0"
          />
          <p className="font-heading text-3xl font-extrabold leading-none text-amber-500">{m.year}</p>
          <p className="mt-3 text-[15px] leading-relaxed text-navy-100/85">{m.text}</p>
        </li>
      ))}
    </ol>
  );
}
