import { getLocale, getTranslations } from "next-intl/server";
import { isAppLocale, routing } from "@/i18n/routing";
import { BackgroundBoundary, BackgroundSurface } from "@/shared/components/background";
import { MotionStagger } from "@/shared/motion";
import { Section } from "@/shared/components/Section";
import {
  localizeProjectCaseStudy,
  type ProjectCaseStudyLocalization,
} from "../data/projectCaseStudies";
import type { ProjectCaseStudy } from "../data/types";
import { ProjectDetailContent } from "./ProjectDetailContent";
import { ProjectDetailHero } from "./ProjectDetailHero";

interface ProjectDetailLayoutProps {
  readonly project: ProjectCaseStudy;
}

export function ProjectDetailLayout({ project }: ProjectDetailLayoutProps) {
  return <LocalizedProjectDetailLayout project={project} />;
}

async function LocalizedProjectDetailLayout({ project }: ProjectDetailLayoutProps) {
  const t = await getTranslations("Projects");
  const localeValue = await getLocale();
  const locale = isAppLocale(localeValue) ? localeValue : routing.defaultLocale;
  const localizedProject = localizeProjectCaseStudy(
    project,
    t.raw(`items.${project.slug}`) as ProjectCaseStudyLocalization,
  );

  return (
    <BackgroundSurface variant="canvas">
      <Section className="pt-[var(--layout-section-gap-md)]">
        <MotionStagger className="space-y-16 lg:space-y-24">
          <div>
            <ProjectDetailHero
              project={localizedProject}
              labels={{
                caseStudy: t("detailLabels.caseStudy"),
                stack: t("detailLabels.stack"),
                role: t("labels.role"),
                company: t("labels.company"),
                visit: t("detailLabels.visit", {
                  domain: localizedProject.officialUrl
                    ? new URL(localizedProject.officialUrl).hostname.replace(
                        /^www\./,
                        "",
                      )
                    : localizedProject.title,
                }),
              }}
            />
          </div>
          <div>
            <ProjectDetailContent
              project={localizedProject}
              backHref={`/${locale}#projects`}
              labels={{
                overview: t("detailLabels.overview"),
                contribution: t("detailLabels.contribution"),
                functionalScope: t("detailLabels.functionalScope"),
                engineeringApproach: t("detailLabels.engineeringApproach"),
                engineeringChallenges: t("detailLabels.engineeringChallenges"),
                solutionsApproach: t("detailLabels.solutionsApproach"),
                technologies: t("detailLabels.technologies"),
                productReference: t("detailLabels.productReference"),
                productReferenceCaptionPrefix: t(
                  "detailLabels.productReferenceCaptionPrefix",
                ),
                backToProjects: t("detailLabels.backToProjects"),
                fallbackContribution: t("detailLabels.fallbackContribution", {
                  title: localizedProject.title,
                  role: localizedProject.role,
                  company: localizedProject.company ?? "",
                }),
              }}
            />
          </div>
        </MotionStagger>
      </Section>
      <BackgroundBoundary position="bottom" />
    </BackgroundSurface>
  );
}
