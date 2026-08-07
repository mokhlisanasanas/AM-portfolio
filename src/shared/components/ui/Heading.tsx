import type { ReactNode } from "react";

export type HeadingLevel = 1 | 2 | 3 | 4;
export type HeadingSize = "page" | "section" | "subsection";

interface HeadingProps {
  readonly children: ReactNode;
  readonly level?: HeadingLevel;
  readonly size?: HeadingSize;
  readonly id?: string;
  readonly className?: string;
}

const sizeClassNames: Record<HeadingSize, string> = {
  page:
    "text-[length:var(--typography-size-heading-lg)] font-[var(--typography-weight-heading)] leading-[var(--typography-line-heading)] md:text-[length:var(--typography-size-heading-xl)]",
  section:
    "text-[length:var(--font-size-3xl)] font-[var(--typography-weight-heading)] leading-[var(--typography-line-heading)] md:text-[length:var(--typography-size-heading-lg)]",
  subsection:
    "text-[length:var(--typography-size-heading-sm)] font-[var(--typography-weight-emphasis)] leading-[var(--line-height-snug)] md:text-[length:var(--typography-size-heading-md)]",
};

export function Heading({
  children,
  level = 2,
  size = "section",
  id,
  className = "",
}: HeadingProps) {
  const classNames = [
    "text-[var(--color-text-primary)]",
    sizeClassNames[size],
    className,
  ].join(" ");

  if (level === 1) {
    return (
      <h1 id={id} className={classNames}>
        {children}
      </h1>
    );
  }

  if (level === 3) {
    return (
      <h3 id={id} className={classNames}>
        {children}
      </h3>
    );
  }

  if (level === 4) {
    return (
      <h4 id={id} className={classNames}>
        {children}
      </h4>
    );
  }

  return (
    <h2 id={id} className={classNames}>
      {children}
    </h2>
  );
}
