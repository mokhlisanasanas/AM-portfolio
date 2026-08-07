import type { ReactNode } from "react";

interface ContainerProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={[
        "mx-auto w-full max-w-[var(--layout-container-page)]",
        "px-[var(--layout-container-padding-sm)] sm:px-[var(--layout-container-padding-md)] lg:px-[var(--layout-container-padding-lg)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
