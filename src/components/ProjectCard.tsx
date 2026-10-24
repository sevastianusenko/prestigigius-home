import Image from "next/image";
import Link from "next/link";
import { IllustrativeBadge, RealJobBadge } from "@/components/ProjectMedia";
import type { Project } from "@/content/types";

function formatDate(d: string) {
  const [y, m] = d.split("-").map(Number);
  if (!y || !m) return d;
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-navy-900/[.06] bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-50">
        <Image
          src={project.after.src}
          alt={project.after.alt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.sample ? <IllustrativeBadge /> : <RealJobBadge />}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="eyebrow mb-2 !text-[12px]">
          {[project.city, formatDate(project.date)].filter(Boolean).join(" · ")}
        </p>
        <h3 className="text-[1.2rem] font-extrabold">{project.title}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-[1.55] text-ink-500">{project.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-navy-900 group-hover:text-amber-600">
          {project.sample ? "Read the story" : "See the project"}{" "}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
