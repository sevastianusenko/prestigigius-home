import Image from "next/image";
import type { Photo } from "@/content/types";

/** Responsive photo grid; first image spans two columns when there are 3+. */
export default function ProjectGallery({ photos, title }: { photos: Photo[]; title: string }) {
  if (photos.length === 0) return null;
  return (
    <ul className="grid grid-cols-2 gap-3 md:gap-4">
      {photos.map((p, i) => {
        const wide = i === 0 && photos.length > 2;
        return (
          <li
            key={`${p.id}-${i}`}
            className={`relative overflow-hidden rounded-xl bg-sand-200 ${wide ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
          >
            <Image
              src={p.src}
              alt={p.alt || `${title}, photo ${i + 1}`}
              fill
              sizes={wide ? "(min-width: 1024px) 760px, 100vw" : "(min-width: 1024px) 380px, 50vw"}
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </li>
        );
      })}
    </ul>
  );
}
