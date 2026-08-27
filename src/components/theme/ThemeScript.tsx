import {
  DEFAULT_THEME_PREFERENCE,
  THEME_ATTRIBUTE,
  THEME_COLOR_SCHEME_PROPERTY,
  THEME_PREFERENCES,
  THEME_STORAGE_KEY,
} from "@/config/theme";

const themeScript = `
(() => {
  const storageKey = ${JSON.stringify(THEME_STORAGE_KEY)};
  const themeAttribute = ${JSON.stringify(THEME_ATTRIBUTE)};
  const colorSchemeProperty = ${JSON.stringify(THEME_COLOR_SCHEME_PROPERTY)};
  const defaultPreference = ${JSON.stringify(DEFAULT_THEME_PREFERENCE)};
  const themePreferences = ${JSON.stringify(THEME_PREFERENCES)};

  function isThemePreference(value) {
    return themePreferences.includes(value);
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

    applyTheme(themePreference);
  } catch {
    try {
      applyTheme(defaultPreference);
    } catch {
      applyTheme("dark");
    }
  }
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
