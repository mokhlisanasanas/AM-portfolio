import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { isAppLocale, routing } from "@/i18n/routing";
import {
  getLocalizedCanonical,
  getLocalizedLanguageAlternates,
} from "@/i18n/metadata";
import Home from "../page";

type LocalizedHomePageProps = PageProps<"/[locale]">;

export async function generateMetadata({
  params,
}: LocalizedHomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const activeLocale = isAppLocale(locale) ? locale : routing.defaultLocale;
  const t = await getTranslations({
    locale: activeLocale,
    namespace: "Common",
  });
  const canonicalUrl = getLocalizedCanonical("/", activeLocale);
  const title = t("seo.home.title");
  const description = t("seo.home.description");

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: getLocalizedLanguageAlternates("/"),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      locale: activeLocale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default Home;
