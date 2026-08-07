type BackgroundBoundaryPosition = "top" | "bottom";

interface BackgroundBoundaryProps {
  readonly position?: BackgroundBoundaryPosition;
  readonly className?: string;
}

const positionClassNames: Record<BackgroundBoundaryPosition, string> = {
  top: "top-0",
  bottom: "bottom-0",
};

export function BackgroundBoundary({
  position = "bottom",
  className = "",
}: BackgroundBoundaryProps) {
  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none absolute inset-x-0 z-0 h-px bg-[var(--component-divider-color)]",
        positionClassNames[position],
        className,
      ].join(" ")}
    />
  );
}
