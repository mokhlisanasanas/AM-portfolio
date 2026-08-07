import type { HTMLAttributes, ReactNode } from "react";

type TextTone = "primary" | "secondary" | "muted";
type TextSize = "sm" | "md" | "lg";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  readonly children: ReactNode;
  readonly tone?: TextTone;
  readonly size?: TextSize;
}

const toneClassNames: Record<TextTone, string> = {
  primary: "text-[var(--color-text-primary)]",
  secondary: "text-[var(--color-text-secondary)]",
  muted: "text-[var(--color-text-muted)]",
};

const sizeClassNames: Record<TextSize, string> = {
  sm: "text-[length:var(--typography-size-body-sm)]",
  md: "text-[length:var(--typography-size-body)]",
  lg: "text-[length:var(--typography-size-body-lg)]",
};

export function Text({
  children,
  className = "",
  tone = "secondary",
  size = "md",
  ...props
}: TextProps) {
  return (
    <p
      className={[
        "font-[var(--typography-weight-body)] leading-[var(--line-height-relaxed)]",
        toneClassNames[tone],
        sizeClassNames[size],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </p>
  );
}
