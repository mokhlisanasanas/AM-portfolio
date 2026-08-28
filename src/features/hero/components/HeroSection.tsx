import {
  BackgroundBoundary,
  BackgroundGrid,
  BackgroundSurface,
} from "@/shared/components/background";
import { Container } from "@/shared/components/Container";
import { MotionStagger } from "@/shared/motion";
import { Section } from "@/shared/components/Section";
import { Eyebrow, Heading, Text } from "@/shared/components/ui";
import { getTranslations } from "next-intl/server";
import { heroContent } from "../data/heroContent";
import { HeroActions } from "./HeroActions";
import { HeroHighlights } from "./HeroHighlights";
import { HeroIdentityPanel } from "./HeroIdentityPanel";

const heroTitleId = "hero-title";

export async function HeroSection() {
  const t = await getTranslations("Hero");
  const actions = heroContent.actions.map((action) => ({
    ...action,
    label: action.id === "cv" ? t("downloadCv") : t("viewProjects"),
  }));
  const highlights = [
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    t("highlights.performance"),
    t("highlights.accessibility"),
    t("highlights.designSystems"),
    t("highlights.aiAssistedWorkflows"),
  ];
  const identityPanel = {
    ...heroContent.identityPanel,
    role: t("role"),
    current: {
      ...heroContent.identityPanel.current,
      label: t("currently"),
      since: t("sinceDecember2021"),
    },
    focus: [
      t("focusAreas.frontendArchitecture"),
      t("focusAreas.accessibility"),
      t("focusAreas.performance"),
    ],
  };

  return (
    <BackgroundSurface variant="canvas">
      <BackgroundGrid />
      <BackgroundBoundary position="bottom" />

      <Section
        id="home"
        aria-labelledby={heroTitleId}
        className="relative z-[var(--z-index-raised)] flex min-h-[calc(100dvh-var(--space-24))] items-center py-[var(--space-16)] lg:py-[var(--space-24)]"
      >
        <Container>
          <MotionStagger
            className={[
              "grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16",
              "lg:[&>*:first-child]:col-span-8",
              "lg:[&>*:last-child]:col-span-4 lg:[&>*:last-child]:pt-[var(--space-16)]",
            ].join(" ")}
            duration={0.6}
            staggerDelay={0.1}
          >
            <MotionStagger
              className="space-y-12"
              duration={0.6}
              staggerDelay={0.1}
            >
              <MotionStagger
                className="space-y-7"
                duration={0.6}
                staggerDelay={0.1}
              >
                <div>
                  <Eyebrow>{t("eyebrow")}</Eyebrow>
                </div>

                <div>
                  <Heading
                    id={heroTitleId}
                    level={1}
                    size="page"
                    className="max-w-5xl text-balance md:text-[length:var(--font-size-7xl)]"
                  >
                    {t("title")}
                  </Heading>
                </div>

                <div>
                  <Text size="lg" className="max-w-3xl">
                    {t("description")}
                  </Text>
                </div>
              </MotionStagger>

              <div>
                <HeroActions
                  actions={actions}
                  linkedIn={heroContent.linkedIn}
                  linkedInAriaLabel={t("linkedInAria")}
                />
              </div>

              <div>
                <HeroHighlights
                  highlights={highlights}
                  label={t("frontendSpecializations")}
                />
              </div>
            </MotionStagger>

            <div>
              <HeroIdentityPanel
                content={identityPanel}
                ariaLabel={t("identityAria")}
                stackTitle={t("currentStack")}
                focusTitle={t("focus")}
              />
            </div>
          </MotionStagger>
        </Container>
      </Section>
    </BackgroundSurface>
  );
}
