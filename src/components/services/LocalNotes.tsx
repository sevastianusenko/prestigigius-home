import Band, { type Tone } from "./Band";
import { FileCheckIcon, HomeIcon, ShieldIcon } from "./icons";

const icons = [FileCheckIcon, ShieldIcon, HomeIcon];

/** SWFL specifics: permits, Florida Building Code / hurricane rules, HOAs, insurance. */
export default function LocalNotes({
  notes,
  serviceLabel,
  tone,
}: {
  notes: { title: string; text: string }[];
  serviceLabel: string;
  tone?: Tone;
}) {
  if (notes.length === 0) return null;
  return (
    <Band
      id="local-notes"
      eyebrow="Building in Southwest Florida"
      title="Permits, Hurricane Code and HOAs, Handled"
      intro={`What changes when your ${serviceLabel.toLowerCase()} project is in Charlotte, Sarasota or Lee County.`}
      tone={tone}
    >
      <div className={`grid gap-5 ${notes.length === 2 || notes.length === 4 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
        {notes.map((n, i) => {
          const Icon = icons[i % icons.length];
          return (
            <article key={n.title} className="rounded-[14px] bg-white p-6 shadow-[0_8px_18px_rgb(17_17_17/.08)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-100 text-navy-900">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{n.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{n.text}</p>
            </article>
          );
        })}
      </div>
    </Band>
  );
}
