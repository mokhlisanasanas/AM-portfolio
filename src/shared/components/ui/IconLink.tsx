import Link from "next/link";
import type { ReactNode } from "react";

interface IconLinkProps {
  readonly children: ReactNode;
  readonly href: string;
  readonly label: string;
  readonly external?: boolean;
  readonly openInNewTab?: boolean;
  readonly className?: string;
}

export function IconLink({
  children,
  href,
  label,
  external = false,
  openInNewTab = true,
  className = "",
}: IconLinkProps) {
  const linkClassName = [
    "focus-ring inline-flex min-h-10 min-w-10 items-center justify-center rounded-[var(--component-button-radius)]",
    "border border-[var(--component-button-secondary-border)] bg-[var(--component-button-secondary-background)]",
    "text-[var(--component-button-secondary-foreground)] hover:bg-[var(--color-hover-overlay)]",
    className,
  ].join(" ");
  const target = external && openInNewTab ? "_blank" : undefined;
  const rel = target === "_blank" ? "noopener noreferrer" : undefined;

  if (external) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={label}
        className={linkClassName}
      >
        <span aria-hidden="true">{children}</span>
      </a>
    );
  }

  return (
    <Link href={href} aria-label={label} className={linkClassName}>
      <span aria-hidden="true">{children}</span>
    </Link>
  );
}
