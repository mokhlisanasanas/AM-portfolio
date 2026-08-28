"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { isAppLocale, routing, type AppLocale } from "@/i18n/routing";
import { useCurrentHash } from "./useCurrentHash";

interface LanguageSwitcherProps {
  readonly className?: string;
}

const languageLabels: Record<AppLocale, string> = {
  en: "English",
  fr: "Français",
};

export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const currentLocaleValue = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const hash = useCurrentHash();
  const t = useTranslations("Common");
  const shouldReduceMotion = useReducedMotion();
  const intlLocale = isAppLocale(currentLocaleValue)
    ? currentLocaleValue
    : routing.defaultLocale;
  const currentLocale = intlLocale;

  function switchLocale(targetLocale: AppLocale) {
    if (targetLocale === currentLocale) {
      return;
    }

    router.replace(`${pathname}${hash}`, {
      locale: targetLocale,
      scroll: false,
    });
  }

  return (
    <nav
      aria-label={t("language")}
      className={[
        "inline-flex max-w-full items-center rounded-[var(--component-button-radius)]",
        "border border-[var(--component-button-secondary-border)] bg-[var(--component-button-secondary-background)] p-1",
        className,
      ].join(" ")}
    >
      <ul className="inline-flex items-center gap-1">
        {routing.locales.map((locale) => {
          const isActive = locale === currentLocale;

          return (
            <li key={locale} className="relative">
              <button
                type="button"
                lang={locale}
                aria-current={isActive ? "page" : undefined}
                aria-label={languageLabels[locale]}
                className={[
                  "focus-ring relative inline-flex min-h-9 min-w-10 items-center justify-center",
                  "rounded-[var(--shape-radius-subtle)] px-2 text-[length:var(--typography-size-body-sm)]",
                  "font-[var(--typography-weight-emphasis)] motion-transition-colors",
                  isActive
                    ? "text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]",
                ].join(" ")}
                onClick={() => {
                  switchLocale(locale);
                }}
              >
                {locale.toUpperCase()}
                {isActive ? (
                  <motion.span
                    layoutId="language-active-indicator"
                    className="absolute inset-x-1 bottom-1 h-0.5 rounded-[var(--radius-full)] bg-[var(--color-accent)]"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.2, ease: "easeOut" }
                    }
                  />
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
