import Link from "next/link";
import { site } from "@/content/site";
import Schema from "./Schema";

export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const all = [{ label: "Home", href: "/" }, ...items.filter((i) => i.href !== "/")];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.label,
      ...(it.href ? { item: `${site.url}${it.href === "/" ? "" : it.href}` } : {}),
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="text-[13px]">
      <Schema data={schema} />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-ink-500">
        {all.map((it, idx) => {
          const last = idx === all.length - 1;
          return (
            <li key={`${it.label}-${idx}`} className="flex items-center gap-2">
              {it.href && !last ? (
                <Link href={it.href} className="hover:text-navy-900 hover:underline">
                  {it.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={last ? "font-semibold text-navy-900" : ""}>
                  {it.label}
                </span>
              )}
              {!last && (
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5 text-ink-500/50" fill="currentColor">
                  <path d="M7.3 4.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.4-1.4L11.6 10 7.3 5.7a1 1 0 0 1 0-1.4Z" />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
