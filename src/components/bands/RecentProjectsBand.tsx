import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Project } from "@/content/types";
import { projects as allProjects } from "@/content/projects";
import ProjectMedia, { ILLUSTRATIVE_NOTE } from "@/components/ProjectMedia";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BandHead, { formatMonth } from "./BandHead";

export type RecentProjectsBandProps = {
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  projects?: Project[];
};

export default function RecentProjectsBand({
  eyebrow = "Recent projects",
  title = "Real jobs.\nPhotographed by our crew.",
  intro = "Impact windows, sliders, entry doors and a lanai rebuild from homes and new builds across Sarasota, Manatee, Charlotte and Lee Counties.",
  projects,
}: RecentProjectsBandProps) {
  const list = projects && projects.length ? projects : allProjects;
  const [featured, ...others] = list;
  if (!featured) return null;
  const thumbs = others.slice(0, 4);
  const anySample = [featured, ...thumbs].some((p) => p.sample);

  return (
    <section className="section-y bg-sand-100">
      <Container>
        <div className="mb-10 flex flex-col gap-6 md:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <BandHead eyebrow={eyebrow} title={title} intro={intro} />
          <Button href="/projects" variant="ghost" className="self-start lg:self-auto">
            See all projects
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.45fr_1fr] lg:items-center">
          <ProjectMedia project={featured} />
          <div className="rounded-[14px] border border-navy-900/[.06] bg-white p-6 shadow-card md:p-8">
            <p className="eyebrow">{featured.sample ? "Customer story" : "Featured job"}</p>
            <h3 className="mt-3 text-[1.35rem] font-extrabold leading-snug">{featured.title}</h3>
            <p className="mt-2 font-heading text-[13px] font-semibold text-ink-500">
              {[formatMonth(featured.date), featured.city].filter(Boolean).join(" · ")}
            </p>
            <p className="mt-4 text-[15px] leading-[1.65] text-ink-500">{featured.summary}</p>
            <Link
              href={`/projects/${featured.slug}`}
              className="mt-5 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-navy-900 hover:text-amber-600"
            >
              {featured.sample ? "Read the story" : "See the full project"} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {thumbs.length > 0 && (
          <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {thumbs.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] bg-navy-50">
                    <Image
                      src={p.after.src}
                      alt={p.after.alt}
                      fill
                      sizes="(min-width: 1024px) 280px, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="mt-3 line-clamp-2 text-[15px] font-bold leading-snug group-hover:text-amber-600">{p.title}</h4>
                  <p className="mt-1 text-[13px] text-ink-500">
                    {[formatMonth(p.date), p.city].filter(Boolean).join(" · ")}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {anySample && (
          <p className="mt-6 text-[13px] text-ink-500">{ILLUSTRATIVE_NOTE}</p>
        )}
      </Container>
    </section>
  );
}
