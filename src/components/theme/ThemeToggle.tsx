"use client";

import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useTheme } from "./useTheme";
import type { ThemePreference } from "@/config/theme";

interface ThemeToggleProps {
  readonly legend?: string;
  readonly className?: string;
  readonly showLabel?: boolean;
}

function getNextTheme(themePreference: ThemePreference): ThemePreference {
  return themePreference === "dark" ? "light" : "dark";
}

export function ThemeToggle({
  legend,
  className = "",
  showLabel = false,
}: ThemeToggleProps) {
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations("Common");
  const { themePreference, isHydrated, setThemePreference } = useTheme();
  const currentTheme: ThemePreference = isHydrated ? themePreference : "dark";
  const nextTheme = getNextTheme(currentTheme);
  const label =
    currentTheme === "dark"
      ? t("switchToLightMode")
      : t("switchToDarkMode");
  const visibleLabel =
    currentTheme === "dark" ? t("darkMode") : t("lightMode");
  const legendLabel = legend ?? t("theme");
  const Icon = currentTheme === "dark" ? Sun : Moon;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={[
        "focus-ring inline-flex min-h-11 min-w-11 items-center justify-center gap-3",
        "rounded-[var(--component-button-radius)] border border-[var(--component-button-secondary-border)]",
        "bg-[var(--component-button-secondary-background)] text-[var(--component-button-secondary-foreground)]",
        "px-3 text-[length:var(--typography-size-body-sm)] font-[var(--typography-weight-emphasis)]",
        "motion-transition hover:-translate-y-px hover:bg-[var(--color-hover-overlay)]",
        showLabel ? "w-full justify-start" : "aspect-square",
        className,
      ].join(" ")}
      onClick={() => {
        setThemePreference(nextTheme);
      }}
    >
      <span className="sr-only">{legendLabel}</span>
      {shouldReduceMotion ? (
        <span aria-hidden="true" className="inline-flex">
          <Icon size={18} strokeWidth={2} />
        </span>
      ) : (
        <motion.span
          key={currentTheme}
          aria-hidden="true"
          className="inline-flex"
          initial={{ opacity: 0, rotate: -12, scale: 0.95 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Icon size={18} strokeWidth={2} />
        </motion.span>
      )}
      {showLabel ? <span>{visibleLabel}</span> : null}
    </button>
  );
}
