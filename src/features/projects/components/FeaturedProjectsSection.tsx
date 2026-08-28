import {
  BackgroundBoundary,
  BackgroundSurface,
} from "@/shared/components/background";
import { Container } from "@/shared/components/Container";
import { MotionStagger } from "@/shared/motion";
import { Section } from "@/shared/components/Section";
import { SectionHeader } from "@/shared/components/ui";
import { getLocale, getTranslations } from "next-intl/server";
import { isAppLocale, routing } from "@/i18n/routing";
import {
  localizeProjectCaseStudy,
  projectCaseStudies,
  type ProjectCaseStudyLocalization,
} from "../data/projectCaseStudies";
import { ProjectCard } from "./ProjectCard";

const projectsTitleId = "featured-projects-title";

export async function FeaturedProjectsSection() {
  const t = await getTranslations("Projects");
  const localeValue = await getLocale();
  const locale = isAppLocale(localeValue) ? localeValue : routing.defaultLocale;
  const localizedProjects = projectCaseStudies.map((project) => {
    const localization = t.raw(
      `items.${project.slug}`,
    ) as ProjectCaseStudyLocalization;
    const localizedProject = localizeProjectCaseStudy(project, localization);

    return {
      id: localizedProject.slug,
      slug: localizedProject.slug,
      title: localizedProject.title,
      description: localizedProject.summary,
      techStack: localizedProject.technologies,
      role: localizedProject.role,
      company: localizedProject.company,
      links: localizedProject.links?.map((link) => ({
        ...link,
        href:
          link.external || !link.href.startsWith("/")
            ? link.href
            : `/${locale}${link.href}`,
        label:
          link.kind === "case-study"
            ? t("labels.viewCaseStudy")
            : localization.links?.find((candidate) => candidate.id === link.id)
                ?.label ?? link.label,
      })),
    };
  });
  const [primaryProject, ...secondaryProjects] = localizedProjects;
  const labels = {
    role: t("labels.role"),
    company: t("labels.company"),
  };

  return (
    <BackgroundSurface variant="subtle">
      <BackgroundBoundary position="top" />
      <Section id="projects" aria-labelledby={projectsTitleId}>
        <Container>
          <MotionStagger
            className="space-y-12 lg:space-y-16"
            duration={0.6}
            staggerDelay={0.1}
          >
            <div>
              <SectionHeader
                id={projectsTitleId}
                eyebrow={t("eyebrow")}
                title={t("title")}
                description={t("description")}
              />
            </div>

            <MotionStagger
              className="space-y-6 lg:space-y-8"
              duration={0.6}
              staggerDelay={0.1}
            >
              <div>
                <ProjectCard
                  project={primaryProject}
                  featured
                  labels={{
                    ...labels,
                    technologyStack: t("labels.technologyStack", {
                      projectTitle: primaryProject.title,
                    }),
                  }}
                />
              </div>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                {secondaryProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    labels={{
                      ...labels,
                      technologyStack: t("labels.technologyStack", {
                        projectTitle: project.title,
                      }),
                    }}
                  />
                ))}
              </div>
            </MotionStagger>
          </MotionStagger>
        </Container>
      </Section>
    </BackgroundSurface>
  );
}
