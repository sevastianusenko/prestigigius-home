import Image from "next/image";
import Link from "next/link";
import ProjectMedia, { ILLUSTRATIVE_NOTE } from "@/components/ProjectMedia";
import { projects } from "@/content/projects";
import { photosOf } from "@/lib/photos";
import type { Project, Service } from "@/content/types";
import Band, { type Tone } from "./Band";

/**
 * "Before and after" band: drag-compare sliders from projects tagged with this
 * service (max 2); falls back to a 2-photo pair when none exist yet.
 */
export default function ServiceProjects({ service, tone }: { service: Service; tone?: Tone }) {
  const matches = projects.filter((p: Project) => p.serviceSlugs.includes(service.slug)).slice(0, 2);
  const anySample = matches.some((p) => p.sample);

  if (matches.length > 0) {
    return (
      <Band
        id="before-after"
        eyebrow={anySample ? "Customer stories" : "Recent work"}
        title={anySample ? "What Homeowners Say About This Work" : "Same Spot, Before and After"}
        intro={
          anySample ? (
            <span className="text-sm">{ILLUSTRATIVE_NOTE}</span>
          ) : (
            "Photographed from where we stood before demo and again at the final walkthrough. Drag the handle to compare."
          )
        }
        tone={tone}
      >
        <div className={`grid gap-10 ${matches.length > 1 ? "lg:grid-cols-2" : "mx-auto max-w-4xl"}`}>
          {matches.map((p: Project) => (
            <figure key={p.slug} className="min-w-0">
              <ProjectMedia project={p} />
              <figcaption className="mt-4">
                <Link
                  href={`/projects/${p.slug}`}
                  className="font-heading text-lg font-bold text-navy-900 hover:text-amber-600"
                >
                  {p.title}
                </Link>
                <p className="mt-1 text-sm text-ink-500">
                  {p.city}
                  {p.city.includes("County") || p.city.includes("Florida") ? "" : ", FL"}
                  {p.duration ? ` · ${p.duration}` : ""}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-900">{p.summary}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Band>
    );
  }

  // skip index 0 (used in the hero)
  const pair = photosOf(service.heroPhoto, 3).slice(1, 3);
  return (
    <Band
      id="before-after"
      eyebrow="Our work"
      title="The Kind of Finish We Hand Over"
      intro="Illustrative photos. Our own job photos for this service are on the way."
      tone={tone}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {pair.map((ph, i) => (
          <figure key={`${ph.id}-${i}`} className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-sand-200">
            <Image
              src={ph.src}
              alt={ph.alt}
              fill
              sizes="(min-width: 1200px) 580px, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </figure>
        ))}
      </div>
    </Band>
  );
}
