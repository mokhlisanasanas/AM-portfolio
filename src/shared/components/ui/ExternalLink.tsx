import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ExternalLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  readonly children: ReactNode;
  readonly href: string;
  readonly openInNewTab?: boolean;
}

function getSafeRel(rel: string | undefined) {
  const relValues = new Set(rel?.split(" ").filter(Boolean));

  relValues.add("noopener");
  relValues.add("noreferrer");

  return Array.from(relValues).join(" ");
}

export function ExternalLink({
  children,
  href,
  openInNewTab = true,
  className = "",
  target,
  rel,
  ...props
}: ExternalLinkProps) {
  const resolvedTarget = target ?? (openInNewTab ? "_blank" : undefined);
  const resolvedRel =
    resolvedTarget === "_blank" ? getSafeRel(rel) : rel;

  return (
    <a
      href={href}
      target={resolvedTarget}
      rel={resolvedRel}
      className={[
        "focus-ring rounded-[var(--shape-radius-subtle)] font-medium text-[var(--color-link)]",
        "hover:text-[var(--color-link-hover)]",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </a>
  );
}
