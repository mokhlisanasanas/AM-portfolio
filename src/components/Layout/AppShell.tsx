import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { SkipToContent } from "./SkipToContent";

interface AppShellProps {
  readonly children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SkipToContent />
      <Header />
      <MainContent className="flex-1">{children}</MainContent>
      <Footer />
    </div>
  );
}
