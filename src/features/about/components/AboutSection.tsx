import {
  BackgroundBoundary,
  BackgroundSurface,
} from "@/shared/components/background";
import { Container } from "@/shared/components/Container";
import { MotionStagger } from "@/shared/motion";
import { Section } from "@/shared/components/Section";
import { SectionHeader } from "@/shared/components/ui";
import { aboutContent } from "../data/aboutContent";
import { AboutBackgroundList } from "./AboutBackgroundList";
import { AboutFocusList } from "./AboutFocusList";
import { AboutStory } from "./AboutStory";

const aboutTitleId = "about-title";

export function AboutSection() {
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
                eyebrow={aboutContent.eyebrow}
                title={aboutContent.title}
                description={aboutContent.description}
              />
            </div>

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <AboutStory paragraphs={aboutContent.story} />
              </div>

              <div className="space-y-8 lg:col-span-4 lg:col-start-9">
                <AboutFocusList focusAreas={aboutContent.focusAreas} />
                <AboutBackgroundList points={aboutContent.backgroundPoints} />
              </div>
            </div>
          </MotionStagger>
        </Container>
      </Section>
    </BackgroundSurface>
  );
}
