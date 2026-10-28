import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import PostBody from "@/components/blog/PostBody";
import TopicCluster from "@/components/blog/TopicCluster";
import PostCard from "@/components/blog/PostCard";
import { postToc, relatedPosts } from "@/components/blog/postUtils";
import { categoryLabel, postCategory } from "@/components/blog/categories";
import { absUrl, clamp, formatLongDate } from "@/components/projects/utils";
import { posts } from "@/content/blog";
import { getService } from "@/content/services";
import { site } from "@/content/site";

type Params = { slug: string };

function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Guide not found" };
  const title = clamp(post.seoTitle || post.title, 60);
  const description = clamp(post.seoDescription || post.excerpt, 155);
  const path = `/resources/${post.slug}`;
  return {
    title: { absolute: title },
    description,
    keywords: post.keywords,
    alternates: { canonical: path },
    authors: [{ name: site.legalName, url: site.url }],
    openGraph: {
      title,
      description,
      url: path,
      type: "article",
      publishedTime: post.date,
      authors: [site.legalName],
      tags: post.keywords,
      images: [{ url: post.cover.src, alt: post.cover.alt }],
    },
  };
}

/** Plain text for schema: drop **bold**, _em_, `code` and [link](url) markup. */
function plainText(md: string): string {
  return md
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*|__|`/g, "")
    .replace(/^\s*[-*]\s+/, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Question/answer pairs from an FAQ section: H3 lines ending in "?" under an H2
 * that mentions "Frequently Asked Questions" or "FAQ", each paired with the
 * paragraphs that follow until the next heading.
 */
function postFaqs(body: string[]): { q: string; a: string }[] {
  const lines = body
    .flatMap((b) => b.split("\n"))
    .map((l) => l.trim())
    .filter(Boolean);
  const pairs: { q: string; parts: string[] }[] = [];
  let inFaq = false;
  let open = false;
  for (const line of lines) {
    if (line.startsWith("#")) {
      open = false;
      const text = line.replace(/^#+\s*/, "");
      if (line.startsWith("## ")) {
        inFaq = /frequently asked questions|\bfaqs?\b/i.test(text);
      } else if (inFaq && line.startsWith("### ") && text.endsWith("?")) {
        pairs.push({ q: plainText(text), parts: [] });
        open = true;
      }
      continue;
    }
    if (open) pairs[pairs.length - 1].parts.push(plainText(line));
  }
  return pairs.filter((p) => p.parts.length > 0).map((p) => ({ q: p.q, a: p.parts.join(" ") }));
}

export default async function ResourcePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const toc = postToc(post.body);
  const category = postCategory(post);
  const related = post.relatedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const more = relatedPosts(post, posts, 3);
  const url = absUrl(`/resources/${post.slug}`, site.url);

  const crumbs = [
    { label: "Resources", href: "/resources" },
    ...(category ? [{ label: category.label, href: `/services/${category.slug}` }] : []),
    { label: post.title },
  ];

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    image: [post.cover.src],
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.keywords.join(", "),
    ...(category ? { articleSection: category.label } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    author: { "@type": "Organization", name: site.legalName, url: site.url },
    publisher: { "@type": "Organization", name: site.legalName, url: site.url },
  };

  const faqPairs = postFaqs(post.body);
  const faqPage =
    faqPairs.length >= 2
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqPairs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  const tocList = (
    <ol className="mt-4 space-y-2.5 border-l border-sand-200 text-[15px]">
      {toc.map((t) => (
        <li key={t.id}>
          <a
            href={`#${t.id}`}
            className="-ml-px block border-l-2 border-transparent pl-4 leading-snug text-ink-500 transition-colors hover:border-amber-500 hover:text-navy-900"
          >
            {t.label}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <Schema data={faqPage ? [article, faqPage] : article} />

      {/* Hero: category, date, read time, title, byline, cover */}
      <section className="bg-sand-100">
        <Container className="pb-12 pt-8 md:pb-16">
          <Breadcrumbs items={crumbs} />
          <div className="mt-10 max-w-[1010px]">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
              {category ? (
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-[.14em] text-amber-600">
                  {category.label}
                </span>
              ) : null}
              <time dateTime={post.date} className="text-ink-500">
                {formatLongDate(post.date)}
              </time>
              <span aria-hidden="true" className="text-ink-500/50">
                •
              </span>
              <span className="text-ink-500">{post.readMinutes} min read</span>
            </p>
            <h1 className="mt-5 font-heading text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-500">{post.excerpt}</p>
            <div className="mt-7 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-900 font-heading text-sm font-bold text-amber-500"
              >
                PH
              </span>
              <p className="text-sm leading-snug text-ink-500">
                By <span className="font-semibold text-navy-900">the {site.name} team</span>
                <br />
                Licensed Florida contractor {site.license}
              </p>
            </div>
          </div>
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[14px] bg-sand-200 shadow-card md:aspect-[21/9]">
            <Image
              src={post.cover.src}
              alt={post.cover.alt}
              fill
              priority
              sizes="(min-width: 1240px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Body + TOC sidebar */}
      <section className="bg-sand-50 py-16 md:py-[72px]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
            <article className="min-w-0 max-w-[720px]">
              {toc.length > 1 ? (
                <details className="mb-10 rounded-[14px] border border-sand-200 bg-white p-5 lg:hidden">
                  <summary className="cursor-pointer font-heading font-semibold text-navy-900">In this guide</summary>
                  {tocList}
                </details>
              ) : null}

              <PostBody body={post.body} />
              <TopicCluster slug={post.slug} posts={posts} />

              {post.relatedServices.length > 0 ? (
                <div className="mt-12 flex flex-wrap items-center gap-2">
                  <span className="mr-1 text-sm font-semibold text-navy-900">Filed under:</span>
                  {post.relatedServices.map((s) => (
                    <Link
                      key={s}
                      href={`/services/${s}`}
                      className="rounded-full border border-sand-200 bg-white px-3 py-1 text-sm text-navy-900 transition-colors hover:border-navy-900"
                    >
                      {categoryLabel(s)}
                    </Link>
                  ))}
                </div>
              ) : null}

              <div className="mt-10 flex flex-col gap-5 rounded-[14px] border border-sand-200 bg-sand-100 p-6 sm:flex-row sm:items-start">
                <div
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-900 font-heading text-lg font-bold text-amber-500"
                >
                  PH
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.18em] text-amber-600">About the author</p>
                  <p className="mt-1 font-heading text-lg font-bold text-navy-900">The {site.name} team</p>
                  <p className="text-sm text-ink-500">
                    {site.legalName}, {site.address.city}, FL
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-900">
                    Written by the people who price and run our jobs, from the first walkthrough to the final inspection. The company is licensed as a {site.licenseLabel}.
                    Questions about your own project? Call{" "}
                    <a href={site.phoneHref} className="font-semibold text-sea-600 hover:underline">
                      {site.phone}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </article>

            <aside className="min-w-0 space-y-6 lg:sticky lg:top-28 lg:self-start">
              {toc.length > 1 ? (
                <nav aria-label="In this guide" className="hidden rounded-[14px] border border-sand-200 bg-white p-6 lg:block">
                  <p className="font-heading text-sm font-bold uppercase tracking-[.12em] text-navy-900">In this guide</p>
                  {tocList}
                </nav>
              ) : null}

              <div className="rounded-[14px] border border-sand-200 bg-white p-6 shadow-card">
                <p className="text-sm text-ink-500">
                  <span aria-hidden="true" className="text-champagne">
                    ★★★★★
                  </span>{" "}
                  {site.ratings.google.score} on Google · BBB {site.ratings.bbb.grade}
                </p>
                <p className="mt-2 font-heading text-lg font-bold text-navy-900">Get your free estimate</p>
                <p className="mt-1 text-sm text-ink-500">
                  Written and itemized. Or call{" "}
                  <a href={site.phoneHref} className="font-semibold text-sea-600 hover:underline">
                    {site.phone}
                  </a>
                  .
                </p>
                <div className="mt-5">
                  <LeadForm compact service={related[0]?.slug} />
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* You may also like */}
      {more.length > 0 ? (
        <section className="border-t border-sand-200 bg-sand-100 py-16 md:py-[72px]">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Eyebrow>Keep reading</Eyebrow>
                <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 md:text-[35px]">You may also like</h2>
              </div>
              <Link href="/resources" className="text-sm font-semibold text-sea-600 hover:underline">
                All guides <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {more.map((p) => (
                <li key={p.slug} className="min-w-0">
                  <PostCard post={p} category={postCategory(p)?.label} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <CtaBand
        title="Get Your Free Estimate"
        text="Reading is a good start. A walkthrough with a tape measure is better. We will look at your home and hand you a written, itemized number."
      />
    </>
  );
}
