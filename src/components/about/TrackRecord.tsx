import Section from "@/components/ui/Section";
import { trackRecord } from "@/content/about";

/** "A Record You Can Check": real, verifiable numbers only. */
export default function TrackRecord() {
  return (
    <Section tone="dark" eyebrow={trackRecord.eyebrow} title={trackRecord.title} intro={trackRecord.intro}>
      <dl className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {trackRecord.items.map((s) => (
          <div key={s.label} className="flex flex-col-reverse rounded-[14px] border border-white/10 bg-white/5 p-5 text-center">
            <dt className="mt-2 text-sm leading-snug text-navy-100/80">{s.label}</dt>
            <dd className="font-heading text-4xl font-extrabold text-amber-500">{s.value}</dd>
          </div>
        ))}
      </dl>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trackRecord.groups.map((g) => (
          <li key={g.title} className="border-l-2 border-amber-500 pl-4">
            <h3 className="text-base font-bold !text-white">{g.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-navy-100/80">{g.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
