import {
  BackgroundBoundary,
  BackgroundSurface,
} from "@/shared/components/background";
import { Container } from "@/shared/components/Container";
import { MotionStagger } from "@/shared/motion";
import { Section } from "@/shared/components/Section";
import { SectionHeader } from "@/shared/components/ui";
import { getTranslations } from "next-intl/server";
import { AboutBackgroundList } from "./AboutBackgroundList";
import { AboutFocusList } from "./AboutFocusList";
import { AboutStory } from "./AboutStory";

const aboutTitleId = "about-title";

export async function AboutSection() {
  const t = await getTranslations("About");
  const story = [
    t("story.one"),
    t("story.two"),
    t("story.three"),
    t("story.four"),
  ];
  const focusAreas = [
    t("focusAreas.frontendArchitecture"),
    t("focusAreas.accessibility"),
    t("focusAreas.performance"),
    t("focusAreas.maintainability"),
    t("focusAreas.designSystems"),
    t("focusAreas.aiAssistedDevelopment"),
  ];
  const backgroundPoints = [
    {
      id: "education",
      label: t("backgroundPoints.education.label"),
      value: t("backgroundPoints.education.value"),
    },
    {
      id: "development-foundation",
      label: t("backgroundPoints.developmentFoundation.label"),
      value: t("backgroundPoints.developmentFoundation.value"),
    },
    {
      id: "collaborative-workflow",
      label: t("backgroundPoints.collaborativeWorkflow.label"),
      value: t("backgroundPoints.collaborativeWorkflow.value"),
    },
  ];

  return (
    <BackgroundSurface variant="canvas">
      <BackgroundBoundary position="top" />
      <Section id="about" aria-labelledby={aboutTitleId}>
        <Container>
          <MotionStagger
            className="space-y-12 lg:space-y-16"
            duration={0.6}
            staggerDelay={0.1}
          >
            <div>
              <SectionHeader
                id={aboutTitleId}
                eyebrow={t("eyebrow")}
                title={t("title")}
                description={t("description")}
              />
            </div>

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <AboutStory paragraphs={story} />
              </div>

              <div className="space-y-8 lg:col-span-4 lg:col-start-9">
                <AboutFocusList
                  focusAreas={focusAreas}
                  title={t("focusTitle")}
                  label={t("focusLabel")}
                />
                <AboutBackgroundList
                  points={backgroundPoints}
                  title={t("backgroundTitle")}
                />
              </div>
            </div>
          </MotionStagger>
        </Container>
      </Section>
    </BackgroundSurface>
  );
}
