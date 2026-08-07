"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  DEFAULT_THEME_PREFERENCE,
  THEME_ATTRIBUTE,
  THEME_CHANGE_EVENT,
  THEME_COLOR_SCHEME_PROPERTY,
  THEME_MEDIA_QUERY,
  THEME_STORAGE_KEY,
  isThemePreference,
  readThemePreference,
  type ResolvedTheme,
  type ThemePreference,
  writeThemePreference,
} from "@/config/theme";

interface ThemeProviderProps {
  readonly children: ReactNode;
}

export interface ThemeContextValue {
  readonly themePreference: ThemePreference;
  readonly resolvedTheme: ResolvedTheme;
  readonly isHydrated: boolean;
  readonly setThemePreference: (themePreference: ThemePreference) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

const FALLBACK_RESOLVED_THEME: ResolvedTheme = "light";

let themePreferenceFallback = DEFAULT_THEME_PREFERENCE;

function getThemePreferenceSnapshot(): ThemePreference {
  const storedThemePreference = readThemePreference();

  if (storedThemePreference.source === "unavailable") {
    return themePreferenceFallback;
  }

  themePreferenceFallback = storedThemePreference.value;

  return storedThemePreference.value;
}

function getServerThemePreferenceSnapshot(): ThemePreference {
  return DEFAULT_THEME_PREFERENCE;
}

function subscribeToThemePreference(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  function handleStorageChange(event: StorageEvent) {
    if (event.key !== null && event.key !== THEME_STORAGE_KEY) {
      return;
    }

    if (event.newValue === null || isThemePreference(event.newValue)) {
      onStoreChange();

      return;
    }

    onStoreChange();
  }

  window.addEventListener("storage", handleStorageChange);
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
    window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
  };
}

function getSystemThemeSnapshot(): ResolvedTheme {
  if (typeof window === "undefined") {
    return FALLBACK_RESOLVED_THEME;
  }

  try {
    return window.matchMedia(THEME_MEDIA_QUERY).matches ? "dark" : "light";
  } catch {
    return FALLBACK_RESOLVED_THEME;
  }
}

function getServerSystemThemeSnapshot(): ResolvedTheme {
  return FALLBACK_RESOLVED_THEME;
}

function subscribeToSystemTheme(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  try {
    const mediaQuery = window.matchMedia(THEME_MEDIA_QUERY);

    mediaQuery.addEventListener("change", onStoreChange);

    return () => {
      mediaQuery.removeEventListener("change", onStoreChange);
    };
  } catch {
    return () => {};
  }
}

function getHydratedSnapshot() {
  return true;
}

function getServerHydratedSnapshot() {
  return false;
}

function subscribeToHydration() {
  return () => {};
}

function resolveThemePreference(
  themePreference: ThemePreference,
  systemTheme: ResolvedTheme,
): ResolvedTheme {
  return themePreference === "system" ? systemTheme : themePreference;
}

function applyResolvedTheme(resolvedTheme: ResolvedTheme): void {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.setAttribute(THEME_ATTRIBUTE, resolvedTheme);
  document.documentElement.style[THEME_COLOR_SCHEME_PROPERTY] = resolvedTheme;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const themePreference = useSyncExternalStore(
    subscribeToThemePreference,
    getThemePreferenceSnapshot,
    getServerThemePreferenceSnapshot,
  );
  const subscribeToActiveSystemTheme = useCallback(
    (onStoreChange: () => void) => {
      if (themePreference !== "system") {
        return () => {};
      }

      return subscribeToSystemTheme(onStoreChange);
    },
    [themePreference],
  );
  const systemTheme = useSyncExternalStore(
    subscribeToActiveSystemTheme,
    getSystemThemeSnapshot,
    getServerSystemThemeSnapshot,
  );
  const isHydrated = useSyncExternalStore(
    subscribeToHydration,
    getHydratedSnapshot,
    getServerHydratedSnapshot,
  );
  const resolvedTheme = resolveThemePreference(themePreference, systemTheme);

  useEffect(() => {
    applyResolvedTheme(resolvedTheme);
  }, [resolvedTheme]);

  const setThemePreference = useCallback(
    (nextThemePreference: ThemePreference) => {
      themePreferenceFallback = nextThemePreference;
      const didPersist = writeThemePreference(nextThemePreference);

      if (!didPersist && typeof window !== "undefined") {
        window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
      }

      applyResolvedTheme(
        resolveThemePreference(nextThemePreference, getSystemThemeSnapshot()),
      );
    },
    [],
  );

  const value = useMemo<ThemeContextValue>(
    () => ({
      themePreference,
      resolvedTheme,
      isHydrated,
      setThemePreference,
    }),
    [isHydrated, resolvedTheme, setThemePreference, themePreference],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
