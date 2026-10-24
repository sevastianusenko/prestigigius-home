import Image from "next/image";
import BeforeAfter from "@/components/BeforeAfter";
import type { Project } from "@/content/types";

/**
 * Project photo block.
 * - Real job photos with a genuine before/after pair (beforeAfter: true) → slider.
 * - Real job photos otherwise → the hero photo.
 * - Illustrative stock photos (sample: true) → single photo labelled "Illustrative photo".
 */
export default function ProjectMedia({ project, sizes = "(min-width: 1024px) 640px, 100vw" }: { project: Project; sizes?: string }) {
  if (!project.sample && project.beforeAfter) {
    return <BeforeAfter before={project.before} after={project.after} label={project.title} />;
  }
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-sand-200 shadow-card">
      <Image src={project.after.src} alt={project.after.alt} fill sizes={sizes} className="object-cover" />
      {project.sample ? <IllustrativeBadge /> : <RealJobBadge />}
    </div>
  );
}

export function IllustrativeBadge({ className = "absolute left-3 top-3" }: { className?: string }) {
  return (
    <span
      className={`${className} rounded-full bg-white/95 px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-[.08em] text-navy-900`}
    >
      Illustrative photo
    </span>
  );
}

export function RealJobBadge({ className = "absolute left-3 top-3" }: { className?: string }) {
  return (
    <span
      className={`${className} rounded-full bg-navy-950/85 px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-[.08em] text-white`}
    >
      Our job photo
    </span>
  );
}

/** One-line disclosure used under project lists that contain illustrative photos. */
export const ILLUSTRATIVE_NOTE =
  "Customer stories without job photos use illustrative images; their details come from the homeowners' own published reviews.";
