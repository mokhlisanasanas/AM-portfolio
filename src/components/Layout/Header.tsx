import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/shared/components/Container";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  return (
    <header
      className={[
        "sticky top-0 z-[var(--z-index-sticky)]",
        "border-b border-[var(--component-navigation-border)]",
        "bg-[var(--component-navigation-background)]",
      ].join(" ")}
    >
      <Container className="py-3">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex min-w-0 items-center justify-between gap-3">
            <Link
              href="/"
              aria-label={`${siteConfig.name} home`}
              className={[
                "focus-ring inline-flex min-h-10 min-w-0 items-center rounded-[var(--shape-radius-subtle)]",
                "text-base font-semibold text-[var(--color-text-primary)]",
              ].join(" ")}
            >
              <span className="truncate">{siteConfig.shortTitle}</span>
            </Link>

            <MobileNavigation />
          </div>

          <DesktopNavigation />

          <div className="flex min-w-0 items-center justify-start gap-3 md:justify-end">
            {/* Future LanguageSwitcher belongs beside the theme controls. */}
            <ThemeToggle legend="Theme" />
          </div>
        </div>
      </Container>
    </header>
  );
}
