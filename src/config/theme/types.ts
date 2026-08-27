export type ThemePreference = "light" | "dark";

export type ResolvedTheme = ThemePreference;

export interface ThemeOption {
  readonly value: ThemePreference;
  readonly label: string;
  readonly ariaLabel: string;
}

export interface StoredThemePreference {
  readonly value: ThemePreference;
  readonly isValid: boolean;
  readonly source: "stored" | "default" | "unavailable";
}
