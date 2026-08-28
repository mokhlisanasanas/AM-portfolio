import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProjectCaseStudyBySlug,
  projectCaseStudies,
  ProjectDetailLayout,
} from "@/features/projects";
import { getAbsoluteUrl } from "@/config/site/siteUrl";
import { isAppLocale, routing } from "@/i18n/routing";

type LocalizedProjectPageProps = PageProps<"/[locale]/projects/[slug]">;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projectCaseStudies.map((project) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: LocalizedProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const activeLocale = isAppLocale(locale) ? locale : routing.defaultLocale;
  const project = getProjectCaseStudyBySlug(slug);

  if (!project) {
    return {};
  }

  const canonicalUrl = getAbsoluteUrl(
    `/${activeLocale}/projects/${project.slug}`,
  );

  return {
    title: project.seo.title,
    description: project.seo.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      url: canonicalUrl,
      type: "article",
      locale: activeLocale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary",
      title: project.seo.title,
      description: project.seo.description,
    },
  };
}

export default async function LocalizedProjectPage({
  params,
}: LocalizedProjectPageProps) {
  const { locale, slug } = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const project = getProjectCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailLayout project={project} />;
}
