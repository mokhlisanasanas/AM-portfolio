import {
  BackgroundBoundary,
  BackgroundSurface,
} from "@/shared/components/background";
import { Container } from "@/shared/components/Container";
import { MotionStagger } from "@/shared/motion";
import { Section } from "@/shared/components/Section";
import { SectionHeader } from "@/shared/components/ui";
import { getTranslations } from "next-intl/server";
import { experienceItems } from "../data/experienceItems";
import { ExperienceEntry } from "./ExperienceEntry";

const experienceTitleId = "experience-title";

export async function ExperienceSection() {
  const t = await getTranslations("Experience");
  const localizedExperienceItems = experienceItems.map((experience) => ({
    ...experience,
    role: t(`items.${experience.id}.role`),
    period: t(`items.${experience.id}.period`),
    description: t(`items.${experience.id}.description`),
  }));

  return (
    <BackgroundSurface variant="canvas">
      <BackgroundBoundary position="top" />
      <Section id="experience" aria-labelledby={experienceTitleId}>
        <Container>
          <MotionStagger
            className="space-y-12 lg:space-y-16"
            duration={0.6}
            staggerDelay={0.1}
          >
            <div>
              <SectionHeader
                id={experienceTitleId}
                eyebrow={t("eyebrow")}
                title={t("title")}
                description={t("description")}
              />
            </div>

            <div>
              <ol className="space-y-7 lg:space-y-9">
                {localizedExperienceItems.map((experience, index) => (
                  <li key={experience.id}>
                    <ExperienceEntry
                      experience={experience}
                      current={index === 0}
                      labels={{
                        role: t("labels.role"),
                        selectedProjects: t("labels.selectedProjects"),
                        technologies: t("labels.technologies", {
                          company: experience.company,
                        }),
                      }}
                    />
                  </li>
                ))}
              </ol>
            </div>
          </MotionStagger>
        </Container>
      </Section>
    </BackgroundSurface>
  );
}
