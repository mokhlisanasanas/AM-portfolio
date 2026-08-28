import type { AppLocale } from "@/i18n/routing";

export function getLocalizedHref(href: string, locale: AppLocale): string {
  if (!href.startsWith("/")) {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  if (href.startsWith("/#")) {
    return `/${locale}${href.slice(1)}`;
  }

  return `/${locale}${href}`;
}

export function removeLocalePrefix(pathname: string): string {
  const [, maybeLocale, ...segments] = pathname.split("/");

  if (maybeLocale === "en" || maybeLocale === "fr") {
    return segments.length > 0 ? `/${segments.join("/")}` : "/";
  }

  return pathname;
}

export function getLocalizedCurrentHref(
  pathname: string,
  locale: AppLocale,
  hash: string,
): string {
  const unprefixedPathname = removeLocalePrefix(pathname);

  return `/${locale}${unprefixedPathname === "/" ? "" : unprefixedPathname}${hash}`;
}
