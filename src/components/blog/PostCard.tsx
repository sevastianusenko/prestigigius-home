import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/content/types";
import { formatLongDate } from "@/components/projects/utils";

/** Card data only: keeps the client-side resource grid free of the post body. */
export type PostCardData = Pick<Post, "slug" | "title" | "excerpt" | "date" | "readMinutes" | "cover">;

type Props = { post: PostCardData; category?: string; featured?: boolean; priority?: boolean };

export function postHref(slug: string): string {
  return `/resources/${slug}`;
}

function Meta({ category, minutes }: { category?: string; minutes: number }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[.12em]">
      {category ? <span className="text-amber-600">{category}</span> : null}
      <span className="text-ink-500">{minutes} min read</span>
    </p>
  );
}

export default function PostCard({ post, category, featured = false, priority = false }: Props) {
  if (featured) {
    return (
      <article className="group relative grid overflow-hidden rounded-[14px] border border-sand-200 bg-white shadow-card transition-shadow hover:shadow-card-hover lg:grid-cols-[1.2fr_1fr]">
        <div className="relative aspect-[16/10] bg-sand-200 lg:aspect-auto lg:min-h-[400px]">
          <Image
            src={post.cover.src}
            alt={post.cover.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute left-4 top-4 rounded-full glass-chip px-3 py-1 text-xs font-bold uppercase tracking-[.14em] text-amber-100">
            Featured
          </span>
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
          <Meta category={category} minutes={post.readMinutes} />
          <h2 className="mt-3 font-heading text-2xl font-extrabold leading-tight text-navy-900 md:text-[32px]">
            <Link href={postHref(post.slug)} className="after:absolute after:inset-0 focus-visible:outline-none">
              {post.title}
            </Link>
          </h2>
          <p className="mt-4 leading-relaxed text-ink-500">{post.excerpt}</p>
          <p className="mt-5 text-sm text-ink-500">
            <time dateTime={post.date}>{formatLongDate(post.date)}</time>
          </p>
          <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold btn-black">
            Read the guide <span aria-hidden="true">→</span>
          </span>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[14px] border border-sand-200 bg-white shadow-card transition-shadow hover:shadow-card-hover">
      <div className="relative aspect-[16/10] bg-sand-200">
        <Image
          src={post.cover.src}
          alt={post.cover.alt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Meta category={category} minutes={post.readMinutes} />
        <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-navy-900">
          <Link href={postHref(post.slug)} className="after:absolute after:inset-0 focus-visible:outline-none">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-ink-500">{post.excerpt}</p>
        <span className="mt-auto pt-5 text-sm font-semibold text-sea-600 group-hover:underline">
          Read guide <span aria-hidden="true">→</span>
        </span>
      </div>
    </article>
  );
}
