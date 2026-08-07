import {
  BackgroundBoundary,
  BackgroundSurface,
} from "@/shared/components/background";
import { Container } from "@/shared/components/Container";
import { MotionStagger } from "@/shared/motion";
import { Section } from "@/shared/components/Section";
import { SectionHeader } from "@/shared/components/ui";
import { experienceItems } from "../data/experienceItems";
import { ExperienceEntry } from "./ExperienceEntry";

const experienceTitleId = "experience-title";

export function ExperienceSection() {
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
                eyebrow="Experience"
                title="Professional Experience"
                description="Selected professional experience across modern frontend development, web platforms and mobile applications."
              />
            </div>

            <div>
              <ol className="space-y-7 lg:space-y-9">
                {experienceItems.map((experience, index) => (
                  <li key={experience.id}>
                    <ExperienceEntry
                      experience={experience}
                      current={index === 0}
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
