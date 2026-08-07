export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className={[
        "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[var(--z-index-tooltip)]",
        "focus-ring rounded-[var(--component-button-radius)] border border-[var(--component-button-secondary-border)]",
        "bg-[var(--component-button-secondary-background)] px-4 py-2 font-medium text-[var(--component-button-secondary-foreground)]",
      ].join(" ")}
    >
      Skip to content
    </a>
  );
}
