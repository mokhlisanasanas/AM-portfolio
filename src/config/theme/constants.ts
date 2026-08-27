import type { ThemeOption, ThemePreference } from "./types";

export const THEME_STORAGE_KEY = "portfolio-theme";

export const DEFAULT_THEME_PREFERENCE: ThemePreference = "dark";

export const THEME_ATTRIBUTE = "data-theme";

export const THEME_COLOR_SCHEME_PROPERTY = "colorScheme";

export const THEME_CHANGE_EVENT = "portfolio-theme-change";

export const THEME_PREFERENCES = ["light", "dark"] as const;

export const RESOLVED_THEMES = ["light", "dark"] as const;

export const THEME_OPTIONS: readonly ThemeOption[] = [
  {
    value: "light",
    label: "Light",
    ariaLabel: "Use light theme",
  },
  {
    value: "dark",
    label: "Dark",
    ariaLabel: "Use dark theme",
  },
] as const;
