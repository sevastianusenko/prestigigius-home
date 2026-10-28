import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "gold" | "secondary" | "ghost" | "white" | "outline-white";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "btn-black",
  gold: "btn-gold",
  secondary: "border-[1.5px] border-navy-900 bg-navy-900 text-white hover:border-navy-700 hover:bg-navy-700",
  ghost: "border-[1.5px] border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white",
  white: "border-[1.5px] border-white bg-white text-navy-900 hover:bg-sand-100",
  "outline-white": "btn-glass",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-[15px]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold tracking-[.01em] whitespace-nowrap transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`;
  const external = /^(https?:|tel:|mailto:)/.test(href);
  if (external) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
