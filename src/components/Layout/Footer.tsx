import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { mainNavigation, type NavigationItem } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { isAppLocale, routing } from "@/i18n/routing";
import { Container } from "@/shared/components/Container";
import { getLocalizedHref } from "./navigationHref";

export async function Footer() {
  const t = await getTranslations("Navigation");
  const footerT = await getTranslations("Footer");
  const localeValue = await getLocale();
  const locale = isAppLocale(localeValue) ? localeValue : routing.defaultLocale;
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
              &copy; {currentYear} {siteConfig.author.name}.{" "}
              {footerT("copyright")}
            </p>
          </div>

          <nav aria-label={footerT("navigationLabel")}>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {navigationItems.map((item) => {
                const label = t(item.translationKey);
                const href = getLocalizedHref(item.href, locale);
                const linkClassName = [
                  "focus-ring rounded-[var(--shape-radius-subtle)]",
                  "text-sm font-medium text-[var(--component-navigation-foreground)]",
                  "hover:text-[var(--component-navigation-link-active)]",
                ].join(" ");

                return (
                  <li key={item.id}>
                    {item.external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClassName}
                      >
                        {label}
                      </a>
                    ) : (
                      <Link href={href} className={linkClassName}>
                        {label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <nav aria-label={footerT("contactLinksLabel")}>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              <li>
                <a
                  href="mailto:anas.mokhlis.me@gmail.com"
                  aria-label={footerT("emailAria")}
                  className={contactLinkClassName}
                >
                  {footerT("email")}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/anas-mokhlis"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={footerT("linkedinAria")}
                  className={contactLinkClassName}
                >
                  {footerT("linkedin")}
                </a>
              </li>
              <li>
                <Link
                  href="/cv/CV-Anas-Mokhlis.pdf"
                  aria-label={footerT("downloadCvAria")}
                  className={contactLinkClassName}
                >
                  {footerT("downloadCv")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
