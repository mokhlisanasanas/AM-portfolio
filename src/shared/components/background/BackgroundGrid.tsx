interface BackgroundGridProps {
  readonly className?: string;
}

export function BackgroundGrid({ className = "" }: BackgroundGridProps) {
  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none absolute inset-0 z-0 opacity-[var(--opacity-20)]",
        "bg-[linear-gradient(to_right,var(--color-border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border-subtle)_1px,transparent_1px)]",
        "bg-[size:var(--space-16)_var(--space-16)]",
        className,
      ].join(" ")}
    />
  );
}
