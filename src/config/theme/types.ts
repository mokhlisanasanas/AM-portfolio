export type ThemePreference = "light" | "dark" | "system";

export type ResolvedTheme = Exclude<ThemePreference, "system">;

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
