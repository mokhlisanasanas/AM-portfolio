import {
  DEFAULT_THEME_PREFERENCE,
  THEME_CHANGE_EVENT,
  THEME_PREFERENCES,
  THEME_STORAGE_KEY,
} from "./constants";
import type { StoredThemePreference, ThemePreference } from "./types";

/** Validates untrusted values from storage, events, URLs, or user input. */
export function isThemePreference(value: unknown): value is ThemePreference {
  return (
    typeof value === "string" &&
    THEME_PREFERENCES.some((preference) => preference === value)
  );
}

export function readThemePreference(): StoredThemePreference {
  if (typeof window === "undefined") {
    return {
      value: DEFAULT_THEME_PREFERENCE,
      isValid: true,
      source: "default",
    };
  }

  try {
    const storedValue = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (isThemePreference(storedValue)) {
      return {
        value: storedValue,
        isValid: true,
        source: "stored",
      };
    }

    return {
      value: DEFAULT_THEME_PREFERENCE,
      isValid: storedValue === null,
      source: "default",
    };
  } catch {
    return {
      value: DEFAULT_THEME_PREFERENCE,
      isValid: false,
      source: "unavailable",
    };
  }
}

export function writeThemePreference(
  themePreference: ThemePreference,
): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, themePreference);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));

    return true;
  } catch {
    return false;
  }
}

export function removeThemePreference(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    window.localStorage.removeItem(THEME_STORAGE_KEY);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));

    return true;
  } catch {
    return false;
  }
}
