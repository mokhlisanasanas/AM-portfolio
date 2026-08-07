import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "neutral" | "accent" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  readonly children: ReactNode;
  readonly variant?: BadgeVariant;
}

const variantClassNames: Record<BadgeVariant, string> = {
  neutral:
    "border-[var(--component-badge-border)] bg-[var(--component-badge-background)] text-[var(--component-badge-foreground)]",
  accent:
    "border-[var(--color-accent)] bg-[var(--color-accent-muted)] text-[var(--color-accent-strong)]",
  outline:
    "border-[var(--component-badge-border)] bg-transparent text-[var(--color-text-secondary)]",
};

export function Badge({
  children,
  className = "",
  variant = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-[var(--component-badge-radius)] border px-2.5 py-1 text-xs font-medium",
        variantClassNames[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
