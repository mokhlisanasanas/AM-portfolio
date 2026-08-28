import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProjectCaseStudyBySlug,
  localizeProjectCaseStudy,
  type ProjectCaseStudyLocalization,
  projectCaseStudies,
  ProjectDetailLayout,
} from "@/features/projects";
import {
  getLocalizedCanonical,
  getLocalizedLanguageAlternates,
} from "@/i18n/metadata";
import { isAppLocale, routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

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

  const t = await getTranslations({
    locale: activeLocale,
    namespace: "Projects",
  });
  const localizedProject = localizeProjectCaseStudy(
    project,
    t.raw(`items.${project.slug}`) as ProjectCaseStudyLocalization,
  );
  const projectPath = `/projects/${project.slug}`;
  const canonicalUrl = getLocalizedCanonical(projectPath, activeLocale);

  return {
    title: localizedProject.seo.title,
    description: localizedProject.seo.description,
    alternates: {
      canonical: canonicalUrl,
      languages: getLocalizedLanguageAlternates(projectPath),
    },
    openGraph: {
      title: localizedProject.seo.title,
      description: localizedProject.seo.description,
      url: canonicalUrl,
      type: "article",
      locale: activeLocale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary",
      title: localizedProject.seo.title,
      description: localizedProject.seo.description,
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
