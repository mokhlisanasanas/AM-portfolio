import { Container } from "@/shared/components/Container";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { BrandLogo } from "./BrandLogo";
import { DesktopNavigation } from "./DesktopNavigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  return (
    <header
      className={[
        "sticky top-0 z-[var(--z-index-sticky)]",
        "relative",
        "border-b border-[var(--component-navigation-border)]",
        "bg-[var(--component-navigation-background)]",
      ].join(" ")}
    >
      <Container className="py-3">
        <div className="flex min-w-0 items-center justify-between gap-4">
          <BrandLogo />

          <div className="hidden min-w-0 flex-1 justify-center md:flex">
            <DesktopNavigation />
          </div>

          <MobileNavigation />

          <div className="hidden min-w-0 items-center justify-end gap-3 md:flex">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
