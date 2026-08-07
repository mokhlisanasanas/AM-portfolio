"use client";

import { useId } from "react";
import { THEME_OPTIONS, type ThemePreference } from "@/config/theme";
import { useTheme } from "./useTheme";

interface ThemeToggleProps {
  readonly legend?: string;
  readonly className?: string;
}

export function ThemeToggle({
  legend = "Theme",
  className = "",
}: ThemeToggleProps) {
  const groupName = useId();
  const { themePreference, isHydrated, setThemePreference } = useTheme();
  const selectedThemePreference: ThemePreference = isHydrated
    ? themePreference
    : "system";

  return (
    <fieldset
      className={[
        "inline-flex max-w-full flex-col gap-2",
        "text-[length:var(--typography-size-body-sm)] text-[var(--color-text-secondary)]",
        className,
      ].join(" ")}
    >
      <legend className="font-medium text-[var(--color-text-primary)]">
        {legend}
      </legend>

      <div
        className={[
          "inline-grid max-w-full grid-cols-3 gap-1 rounded-[var(--component-button-radius)]",
          "border border-[var(--component-button-secondary-border)] bg-[var(--color-surface-muted)] p-1",
        ].join(" ")}
      >
        {THEME_OPTIONS.map((option) => {
          const isSelected = selectedThemePreference === option.value;

          return (
            <label
              key={option.value}
              className={[
                "relative inline-flex min-h-10 cursor-pointer items-center justify-center",
                "rounded-[var(--shape-radius-subtle)] px-3 py-2 text-center font-medium",
                "text-[var(--color-text-secondary)]",
                isSelected
                  ? "bg-[var(--component-button-primary-background)] text-[var(--component-button-primary-foreground)]"
                  : "hover:bg-[var(--color-hover-overlay)]",
              ].join(" ")}
            >
              <input
                type="radio"
                name={groupName}
                value={option.value}
                checked={isSelected}
                aria-label={option.ariaLabel}
                className="peer sr-only"
                onChange={() => {
                  setThemePreference(option.value);
                }}
              />
              <span
                className={[
                  "rounded-[var(--shape-radius-subtle)]",
                  "peer-focus-visible:outline peer-focus-visible:outline-2",
                  "peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--color-focus-ring)]",
                ].join(" ")}
              >
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
