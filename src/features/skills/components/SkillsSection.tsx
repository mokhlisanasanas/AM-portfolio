import {
  BackgroundBoundary,
  BackgroundSurface,
} from "@/shared/components/background";
import { Container } from "@/shared/components/Container";
import { MotionStagger } from "@/shared/motion";
import { Section } from "@/shared/components/Section";
import { SectionHeader } from "@/shared/components/ui";
import { getTranslations } from "next-intl/server";
import { skillGroups } from "../data/skillGroups";
import { SkillGroup } from "./SkillGroup";

const skillsTitleId = "skills-title";

export async function SkillsSection() {
  const t = await getTranslations("Skills");
  const localizedSkillLabels: Record<string, string> = {
    "Frontend architecture": t("items.frontendArchitecture"),
    Accessibility: t("items.accessibility"),
    Performance: t("items.performance"),
    "Design systems": t("items.designSystems"),
    "Code auditing": t("items.codeAuditing"),
    "W3C standards": t("items.w3cStandards"),
    "Agile / Scrum": t("items.agileScrum"),
  };
  const localizedSkillGroups = skillGroups.map((group) => ({
    ...group,
    title: t(`groups.${group.id}.title`),
    description: t(`groups.${group.id}.description`),
    skills: group.skills.map((skill) => localizedSkillLabels[skill] ?? skill),
  }));

  return (
    <BackgroundSurface variant="subtle">
      <BackgroundBoundary position="top" />
      <Section id="skills" aria-labelledby={skillsTitleId}>
        <Container>
          <MotionStagger
            className="space-y-12 lg:space-y-16"
            duration={0.6}
            staggerDelay={0.1}
          >
            <div>
              <SectionHeader
                id={skillsTitleId}
                eyebrow={t("eyebrow")}
                title={t("title")}
                description={t("description")}
              />
            </div>

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-12">
              {localizedSkillGroups.map((group) => (
                <SkillGroup
                  key={group.id}
                  group={group}
                  skillsLabel={t("labels.skills", { groupTitle: group.title })}
                />
              ))}
            </div>
          </MotionStagger>
        </Container>
      </Section>
    </BackgroundSurface>
  );
}
