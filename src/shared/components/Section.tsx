import type { ReactNode } from "react";

interface SectionProps {
  readonly children: ReactNode;
  readonly id?: string;
  readonly className?: string;
  readonly "aria-labelledby"?: string;
}

export function Section({
  children,
  id,
  className = "",
  "aria-labelledby": ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={[
        "scroll-mt-24 py-[var(--layout-section-gap-sm)] md:py-[var(--layout-section-gap-md)] lg:py-[var(--layout-section-gap-lg)]",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}
