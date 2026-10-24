import Container from "@/components/ui/Container";
import { BandEyebrow, h2Class, toneBg, type Tone } from "./Band";
import { ClipboardIcon, FileCheckIcon, HammerIcon, ShieldIcon } from "./icons";

const icons = [ClipboardIcon, FileCheckIcon, HammerIcon, ShieldIcon];

/** "How we work" intro: service.intro paragraphs beside the 4 howWeWork cards (2×2). */
export default function ServiceIntro({
  title,
  paragraphs,
  items,
  tone = "light",
}: {
  title: string;
  paragraphs: string[];
  items: { title: string; text: string }[];
  tone?: Tone;
}) {
  return (
    <section id="how-we-work" aria-labelledby="how-we-work-title" className={`py-16 md:py-[72px] ${toneBg[tone]}`}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14">
          <div className="min-w-0">
            <BandEyebrow>How we work</BandEyebrow>
            <h2 id="how-we-work-title" className={h2Class}>
              {title}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-[1.65] text-ink-900 md:text-[17px]">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <ul className="grid min-w-0 gap-4 self-start sm:grid-cols-2">
            {items.slice(0, 4).map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <li key={item.title} className="rounded-[14px] bg-white p-6 shadow-[0_8px_18px_rgb(17_17_17/.08)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
