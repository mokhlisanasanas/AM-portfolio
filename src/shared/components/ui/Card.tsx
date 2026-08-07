import type { HTMLAttributes, ReactNode } from "react";

type CardVariant = "default" | "subtle" | "interactive";

interface CardProps extends HTMLAttributes<HTMLElement> {
  readonly children: ReactNode;
  readonly variant?: CardVariant;
}

const variantClassNames: Record<CardVariant, string> = {
  default:
    "border-[var(--component-card-border)] bg-[var(--component-card-background)] shadow-[var(--component-card-shadow)]",
  subtle: "border-[var(--component-card-border)] bg-[var(--color-surface-muted)]",
  interactive:
    "border-[var(--component-card-border)] bg-[var(--component-card-background)] shadow-[var(--component-card-shadow)] hover:border-[var(--color-border-strong)]",
};

export function Card({
  children,
  className = "",
  variant = "default",
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "rounded-[var(--component-card-radius)] border p-5 text-[var(--component-card-foreground)]",
        variantClassNames[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
