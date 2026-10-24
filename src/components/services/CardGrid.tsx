import Band, { type Tone } from "./Band";
import { CheckIcon } from "./icons";

type Item = { title: string; text: string; bullets?: string[] };

/**
 * Titled card grid used by the optional "signs", "options" and "benefits"
 * blocks. Renders nothing when there are no items.
 */
export default function CardGrid({
  id,
  eyebrow,
  title,
  intro,
  items,
  tone,
  numbered = false,
  columns = 3,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  items?: Item[];
  tone?: Tone;
  numbered?: boolean;
  columns?: 2 | 3 | 4;
}) {
  if (!items || items.length === 0) return null;
  const cols =
    columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : columns === 2 ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <Band id={id} eyebrow={eyebrow} title={title} intro={intro} tone={tone}>
      <ul className={`grid gap-5 ${cols}`}>
        {items.map((item, i) => (
          <li
            key={item.title}
            className="flex flex-col rounded-[14px] bg-white p-6 shadow-[0_8px_18px_rgb(17_17_17/.08)] md:p-7"
          >
            {numbered && (
              <span aria-hidden="true" className="font-heading text-sm font-extrabold text-amber-600">
                {String(i + 1).padStart(2, "0")}
              </span>
            )}
            <h3 className={`text-lg font-bold ${numbered ? "mt-2" : ""}`}>{item.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{item.text}</p>
            {item.bullets && item.bullets.length > 0 && (
              <ul className="mt-4 space-y-2 border-t border-sand-200 pt-4">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-[15px] leading-snug text-ink-900">
                    <CheckIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-amber-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Band>
  );
}
