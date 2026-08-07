import type { ReactNode } from "react";

interface MainContentProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function MainContent({ children, className = "" }: MainContentProps) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={["flex-1 outline-none", className].join(" ")}
    >
      {children}
    </main>
  );
}
