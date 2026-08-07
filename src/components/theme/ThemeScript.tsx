import {
  DEFAULT_THEME_PREFERENCE,
  THEME_ATTRIBUTE,
  THEME_COLOR_SCHEME_PROPERTY,
  THEME_MEDIA_QUERY,
  THEME_PREFERENCES,
  THEME_STORAGE_KEY,
} from "@/config/theme";

const themeScript = `
(() => {
  const storageKey = ${JSON.stringify(THEME_STORAGE_KEY)};
  const themeAttribute = ${JSON.stringify(THEME_ATTRIBUTE)};
  const colorSchemeProperty = ${JSON.stringify(THEME_COLOR_SCHEME_PROPERTY)};
  const defaultPreference = ${JSON.stringify(DEFAULT_THEME_PREFERENCE)};
  const mediaQuery = ${JSON.stringify(THEME_MEDIA_QUERY)};
  const themePreferences = ${JSON.stringify(THEME_PREFERENCES)};

  function getSystemTheme() {
    return window.matchMedia(mediaQuery).matches ? "dark" : "light";
  }

  function isThemePreference(value) {
    return themePreferences.includes(value);
  }

  function resolveTheme(themePreference) {
    return themePreference === "dark" || themePreference === "light"
      ? themePreference
      : getSystemTheme();
  }

  function applyTheme(resolvedTheme) {
    document.documentElement.setAttribute(themeAttribute, resolvedTheme);
    document.documentElement.style[colorSchemeProperty] = resolvedTheme;
  }

  try {
    const storedTheme = window.localStorage.getItem(storageKey);
    const themePreference = isThemePreference(storedTheme)
      ? storedTheme
      : defaultPreference;

    applyTheme(resolveTheme(themePreference));
  } catch {
    try {
      applyTheme(resolveTheme(defaultPreference));
    } catch {
      applyTheme("light");
    }
  }
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
