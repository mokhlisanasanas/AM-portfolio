const LOCAL_SITE_URL = "http://localhost:3000";

function isSupportedSiteUrl(url: URL): boolean {
  return url.protocol === "http:" || url.protocol === "https:";
}

export function resolveSiteUrl(
  rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL,
): string {
  const candidate = rawSiteUrl?.trim();

  if (!candidate) {
    return LOCAL_SITE_URL;
  }

  try {
    const parsedUrl = new URL(candidate);

    if (!isSupportedSiteUrl(parsedUrl)) {
      return LOCAL_SITE_URL;
    }

    return parsedUrl.origin;
  } catch {
    return LOCAL_SITE_URL;
  }
}

export const siteUrl = resolveSiteUrl();

export function getAbsoluteUrl(pathname = "/"): string {
  return new URL(pathname, `${siteUrl}/`).toString();
}
