"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState } from "react";
import { mainNavigation, type NavigationItem } from "@/config/navigation";
import { isAppLocale, routing } from "@/i18n/routing";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { contactContent } from "@/features/contact/data/contactLinks";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { getLocalizedHref } from "./navigationHref";
import { useActiveNavigationItem } from "./useActiveNavigationItem";

interface MobileNavigationProps {
  readonly className?: string;
}

export function MobileNavigation({ className = "" }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const shouldReduceMotion = useReducedMotion();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navigationItems: readonly NavigationItem[] = mainNavigation;
  const activeId = useActiveNavigationItem();
  const currentLocaleValue = useLocale();
  const currentLocale = isAppLocale(currentLocaleValue)
    ? currentLocaleValue
    : routing.defaultLocale;
  const t = useTranslations("Navigation");
  const interfaceT = useTranslations("Common");
  const footerT = useTranslations("Footer");
  const linkedInLink = contactContent.links.find((link) => link.id === "linkedin");
  const cvAction = contactContent.actions.find((action) => action.id === "cv");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      setIsOpen(false);
      triggerRef.current?.focus();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleNavigationChange() {
      setIsOpen(false);
    }

    window.addEventListener("hashchange", handleNavigationChange);
    window.addEventListener("popstate", handleNavigationChange);

    return () => {
      window.removeEventListener("hashchange", handleNavigationChange);
      window.removeEventListener("popstate", handleNavigationChange);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  const panelContent = (
    <div
      className={[
        "mx-auto w-full max-w-[var(--container-page)]",
        "px-[var(--container-padding-sm)] py-6 sm:px-[var(--container-padding-md)]",
      ].join(" ")}
    >
      <nav aria-label={t("mainLabel")}>
        <ul className="flex flex-col gap-1">
          {navigationItems.map((item) => {
            const label = t(item.translationKey);
            const href = getLocalizedHref(item.href, currentLocale);
            const isActive = item.id === activeId;
            const linkClassName = [
              "focus-ring flex min-h-12 items-center rounded-[var(--shape-radius-subtle)] px-2",
              "text-[length:var(--typography-size-body-lg)] font-medium",
              isActive
                ? "text-[var(--component-navigation-link-active)]"
                : "text-[var(--component-navigation-foreground)]",
              "hover:bg-[var(--color-hover-overlay)]",
            ].join(" ");

            return (
              <li key={item.id}>
                {item.external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                    aria-current={isActive ? "location" : undefined}
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    href={href}
                    className={linkClassName}
                    aria-current={isActive ? "location" : undefined}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        aria-hidden="true"
        className="my-6 h-px bg-[var(--component-divider-color)]"
      />

      <div className="space-y-3">
        <p className="text-[length:var(--typography-size-body-sm)] font-medium text-[var(--color-text-secondary)]">
          {interfaceT("language")}
        </p>
        <LanguageSwitcher className="w-full" />
      </div>

      <div
        aria-hidden="true"
        className="my-6 h-px bg-[var(--component-divider-color)]"
      />

      <div className="space-y-3">
        <p className="text-[length:var(--typography-size-body-sm)] font-medium text-[var(--color-text-secondary)]">
          {interfaceT("theme")}
        </p>
        <ThemeToggle legend={interfaceT("theme")} className="w-full" showLabel />
      </div>

      {linkedInLink || cvAction ? (
        <div className="mt-6 flex flex-col gap-2">
          {linkedInLink ? (
            <a
              href={linkedInLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "focus-ring flex min-h-11 items-center rounded-[var(--shape-radius-subtle)] px-2",
                "text-sm font-medium text-[var(--color-text-secondary)]",
                "hover:bg-[var(--color-hover-overlay)] hover:text-[var(--color-text-primary)]",
              ].join(" ")}
              onClick={closeMenu}
            >
              {footerT("linkedin")}
            </a>
          ) : null}

          {cvAction ? (
            <Link
              href={cvAction.href}
              className={[
                "focus-ring flex min-h-11 items-center rounded-[var(--shape-radius-subtle)] px-2",
                "text-sm font-medium text-[var(--color-text-secondary)]",
                "hover:bg-[var(--color-hover-overlay)] hover:text-[var(--color-text-primary)]",
              ].join(" ")}
              onClick={closeMenu}
            >
              {footerT("downloadCv")}
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );

  return (
    <div className={["md:hidden", className].join(" ")}>
      <button
        ref={triggerRef}
        type="button"
        aria-label={
          isOpen
            ? interfaceT("closeNavigationMenu")
            : interfaceT("openNavigationMenu")
        }
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={[
          "focus-ring inline-flex size-11 items-center justify-center rounded-[var(--component-button-radius)]",
          "border border-[var(--component-button-secondary-border)] bg-[var(--component-button-secondary-background)]",
          "text-[var(--component-button-secondary-foreground)]",
          "hover:bg-[var(--color-hover-overlay)]",
        ].join(" ")}
        onClick={() => {
          setIsOpen((currentIsOpen) => !currentIsOpen);
        }}
      >
        <span className="sr-only">
          {isOpen
            ? interfaceT("closeNavigationMenu")
            : interfaceT("openNavigationMenu")}
        </span>
        <span aria-hidden="true" className="relative block size-5">
          <span
            className={[
              "absolute left-0 top-[5px] h-px w-5 bg-current transition-transform duration-200",
              isOpen ? "translate-y-[5px] rotate-45" : "",
            ].join(" ")}
          />
          <span
            className={[
              "absolute left-0 top-[10px] h-px w-5 bg-current transition-opacity duration-200",
              isOpen ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "absolute left-0 top-[15px] h-px w-5 bg-current transition-transform duration-200",
              isOpen ? "-translate-y-[5px] -rotate-45" : "",
            ].join(" ")}
          />
        </span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          shouldReduceMotion ? (
            <div
              id={panelId}
              className={[
                "absolute left-0 right-0 top-full",
                "border-b border-[var(--component-navigation-border)]",
                "bg-[var(--component-navigation-background)]",
              ].join(" ")}
            >
              {panelContent}
            </div>
          ) : (
            <motion.div
              id={panelId}
              className={[
                "absolute left-0 right-0 top-full",
                "border-b border-[var(--component-navigation-border)]",
                "bg-[var(--component-navigation-background)]",
              ].join(" ")}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: [0.2, 0, 0, 1] }}
            >
              {panelContent}
            </motion.div>
          )
        ) : null}
      </AnimatePresence>
    </div>
  );
}
