import Link from "next/link";
import { mainNavigation, type NavigationItem } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/shared/components/Container";

function getNavigationLabel(item: NavigationItem) {
  return item.id.charAt(0).toUpperCase() + item.id.slice(1);
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navigationItems: readonly NavigationItem[] = mainNavigation;
  const contactLinkClassName = [
    "focus-ring rounded-[var(--shape-radius-subtle)]",
    "text-sm font-medium text-[var(--component-navigation-foreground)]",
    "hover:text-[var(--component-navigation-link-active)]",
  ].join(" ");

  return (
    <footer
      className={[
        "border-t border-[var(--component-divider-color)]",
        "bg-[var(--component-navigation-background)]",
        "text-[var(--color-text-secondary)]",
      ].join(" ")}
    >
      <Container className="py-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="space-y-1">
            <p className="font-semibold text-[var(--color-text-primary)]">
              {siteConfig.name}
            </p>
            <p className="text-sm">
              &copy; {currentYear} {siteConfig.author.name}. All rights
              reserved.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {navigationItems.map((item) => {
                const label = getNavigationLabel(item);
                const linkClassName = [
                  "focus-ring rounded-[var(--shape-radius-subtle)]",
                  "text-sm font-medium text-[var(--component-navigation-foreground)]",
                  "hover:text-[var(--component-navigation-link-active)]",
                ].join(" ");

                return (
                  <li key={item.id}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClassName}
                      >
                        {label}
                      </a>
                    ) : (
                      <Link href={item.href} className={linkClassName}>
                        {label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <nav aria-label="Contact links">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              <li>
                <a
                  href="mailto:anas.mokhlis.me@gmail.com"
                  aria-label="Email Anas Mokhlis"
                  className={contactLinkClassName}
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/anas-mokhlis"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Anas Mokhlis on LinkedIn"
                  className={contactLinkClassName}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link
                  href="/cv/CV-Anas-Mokhlis.pdf"
                  aria-label="Download Anas Mokhlis CV"
                  className={contactLinkClassName}
                >
                  Download CV
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
