export type ActionVariant = "primary" | "secondary" | "ghost";
export type ActionSize = "sm" | "md" | "lg";

const actionVariantClassNames: Record<ActionVariant, string> = {
  primary:
    "border-transparent bg-[var(--component-button-primary-background)] text-[var(--component-button-primary-foreground)] hover:bg-[var(--component-button-primary-background-hover)]",
  secondary:
    "border-[var(--component-button-secondary-border)] bg-[var(--component-button-secondary-background)] text-[var(--component-button-secondary-foreground)] hover:bg-[var(--color-hover-overlay)]",
  ghost:
    "border-transparent bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-hover-overlay)]",
};

const actionSizeClassNames: Record<ActionSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-10 px-4 text-sm",
  lg: "min-h-11 px-5 text-base",
};

export function getActionClassName({
  variant,
  size,
  className = "",
}: {
  readonly variant: ActionVariant;
  readonly size: ActionSize;
  readonly className?: string;
}) {
  return [
    "focus-ring inline-flex items-center justify-center rounded-[var(--component-button-radius)] border font-medium",
    actionVariantClassNames[variant],
    actionSizeClassNames[size],
    className,
  ].join(" ");
}
