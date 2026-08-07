import Link from "next/link";
import type { ReactNode } from "react";
import {
  getActionClassName,
  type ActionSize,
  type ActionVariant,
} from "./actionStyles";

interface LinkButtonProps {
  readonly children: ReactNode;
  readonly href: string;
  readonly external?: boolean;
  readonly variant?: ActionVariant;
  readonly size?: ActionSize;
  readonly className?: string;
  readonly ariaLabel?: string;
}

export function LinkButton({
  children,
  href,
  external = false,
  variant = "primary",
  size = "md",
  className = "",
  ariaLabel,
}: LinkButtonProps) {
  const linkClassName = getActionClassName({ variant, size, className });

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={linkClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={linkClassName}>
      {children}
    </Link>
  );
}
