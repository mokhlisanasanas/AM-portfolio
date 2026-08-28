import { getAbsoluteUrl } from "@/config/site/siteUrl";
import { routing, type AppLocale } from "./routing";

export function getLocalizedPath(pathname: string, locale: AppLocale): string {
  const normalizedPathname = pathname.startsWith("/") ? pathname : `/${pathname}`;

  return `/${locale}${normalizedPathname === "/" ? "" : normalizedPathname}`;
}

export function getLocalizedCanonical(pathname: string, locale: AppLocale) {
  return getAbsoluteUrl(getLocalizedPath(pathname, locale));
}

export function getLocalizedLanguageAlternates(pathname: string) {
  return Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      getAbsoluteUrl(getLocalizedPath(pathname, locale)),
    ]),
  ) as Record<AppLocale, string>;
}
