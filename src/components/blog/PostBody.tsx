import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { headingId, uniqueId } from "./postUtils";

/** Inline formatting: **bold** and [text](/internal-or-https-link). */
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4)
      return (
        <strong key={i} className="font-semibold text-navy-900">
          {part.slice(2, -2)}
        </strong>
      );
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const cls = "font-semibold text-sea-600 underline decoration-amber-500/60 underline-offset-2 hover:text-navy-900";
      return href.startsWith("/") ? (
        <Link key={i} href={href} className={cls}>
          {label}
        </Link>
      ) : (
        <a key={i} href={href} className={cls} rel="noopener" target="_blank">
          {label}
        </a>
      );
    }
    return part;
  });
}

type Block =
  | { kind: "h2"; text: string; id: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "p"; text: string }
  | { kind: "img"; src: string; alt: string; caption?: string };

/** "![alt](src)" or "![alt](src \"caption\")" on its own line → figure. */
const IMG = /^!\[([^\]]*)\]\((\S+?)(?:\s+"([^"]*)")?\)$/;

function parse(body: string[]): Block[] {
  const blocks: Block[] = [];
  const seen = new Map<string, number>();
  for (const raw of body) {
    // a single entry may itself contain several lines
    for (const piece of raw.split("\n")) {
      const line = piece.trim();
      if (!line) continue;
      const img = line.match(IMG);
      if (img) {
        blocks.push({ kind: "img", alt: img[1], src: img[2], caption: img[3] });
      } else if (line.startsWith("### ")) {
        blocks.push({ kind: "h3", text: line.slice(4).trim() });
      } else if (line.startsWith("## ")) {
        const text = line.slice(3).trim();
        blocks.push({ kind: "h2", text, id: uniqueId(headingId(text), seen) });
      } else if (line.startsWith("- ")) {
        const last = blocks[blocks.length - 1];
        const item = line.slice(2).trim();
        if (last && last.kind === "ul") last.items.push(item);
        else blocks.push({ kind: "ul", items: [item] });
      } else {
        blocks.push({ kind: "p", text: line });
      }
    }
  }
  return blocks;
}

/**
 * Renders the markdown-ish Post.body: "## " → h2 with id (for the TOC),
 * consecutive "- " lines → one ul, everything else → p.
 */
export default function PostBody({ body }: { body: string[] }) {
  const blocks = parse(body);
  return (
    <div className="text-[17px] leading-[1.75] text-ink-900">
      {blocks.map((b, i) => {
        if (b.kind === "h2")
          return (
            <h2
              key={i}
              id={b.id}
              className="mt-12 scroll-mt-28 font-heading text-2xl font-bold leading-tight text-navy-900 first:mt-0 md:text-[28px]"
            >
              {b.text}
            </h2>
          );
        if (b.kind === "h3")
          return (
            <h3 key={i} className="mt-8 font-heading text-xl font-bold leading-snug text-navy-900">
              {b.text}
            </h3>
          );
        if (b.kind === "img")
          return (
            <figure key={i} className="mt-8">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-sand-200">
                <Image src={b.src} alt={b.alt} fill sizes="(min-width: 1024px) 720px, 100vw" className="object-cover" />
              </div>
              {b.caption ? <figcaption className="mt-2 text-sm leading-relaxed text-ink-500">{b.caption}</figcaption> : null}
            </figure>
          );
        if (b.kind === "ul")
          return (
            <ul key={i} className="mt-5 space-y-2.5">
              {b.items.map((item, j) => (
                <li key={j} className="relative pl-6">
                  <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  {inline(item)}
                </li>
              ))}
            </ul>
          );
        return (
          <p key={i} className="mt-5 first:mt-0">
            {inline(b.text)}
          </p>
        );
      })}
    </div>
  );
}
