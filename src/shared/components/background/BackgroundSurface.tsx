import type { ReactNode } from "react";

type BackgroundSurfaceVariant = "canvas" | "subtle" | "surface";

interface BackgroundSurfaceProps {
  readonly children: ReactNode;
  readonly variant?: BackgroundSurfaceVariant;
  readonly className?: string;
}

const variantClassNames: Record<BackgroundSurfaceVariant, string> = {
  canvas: "bg-[var(--color-canvas)]",
  subtle: "bg-[var(--color-canvas-subtle)]",
  surface: "bg-[var(--color-surface)]",
};

export function BackgroundSurface({
  children,
  variant = "canvas",
  className = "",
}: BackgroundSurfaceProps) {
  return (
    <div
      className={[
        "relative isolate overflow-hidden",
        variantClassNames[variant],
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
