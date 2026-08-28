import type { MetadataRoute } from "next";
import { getAbsoluteUrl } from "@/config/site/siteUrl";
import { projectCaseStudies } from "@/features/projects";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const localizedHomepages = routing.locales.map((locale) => ({
    url: getAbsoluteUrl(`/${locale}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 1,
  }));
  const localizedProjects = routing.locales.flatMap((locale) =>
    projectCaseStudies.map((project) => ({
      url: getAbsoluteUrl(`/${locale}/projects/${project.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  return [...localizedHomepages, ...localizedProjects];
}
