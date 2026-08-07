import type { HTMLAttributes, ReactNode } from "react";

interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  readonly children: ReactNode;
}

export function Eyebrow({ children, className = "", ...props }: EyebrowProps) {
  return (
    <p
      className={[
        "text-[length:var(--typography-size-body-sm)] font-[var(--typography-weight-emphasis)] uppercase leading-[var(--typography-line-body)] text-[var(--color-accent-strong)]",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </p>
  );
}
