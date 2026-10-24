import Image from "next/image";
import Link from "next/link";
import type { Photo, Service } from "@/content/types";
import { photo as pickPhoto } from "@/lib/photos";

export default function ServiceCard({ service, photo }: { service: Service; photo?: Photo }) {
  const img = photo ?? pickPhoto(service.heroPhoto);
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-navy-900/[.06] bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-navy-50">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-[1.2rem] font-extrabold">{service.title}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-[1.55] text-ink-500">{service.blurb}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-navy-900 group-hover:text-amber-600">
          Learn more{" "}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
