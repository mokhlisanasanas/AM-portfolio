import {
  BackgroundBoundary,
  BackgroundSurface,
} from "@/shared/components/background";
import { Container } from "@/shared/components/Container";
import { MotionStagger } from "@/shared/motion";
import { Section } from "@/shared/components/Section";
import { SectionHeader } from "@/shared/components/ui";
import { skillGroups } from "../data/skillGroups";
import { SkillGroup } from "./SkillGroup";

const skillsTitleId = "skills-title";

export function SkillsSection() {
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
                eyebrow="Capabilities"
                title="Tech Stack & Skills"
                description="Current frontend specialization, engineering practices and supporting development tooling."
              />
            </div>

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-12">
              {skillGroups.map((group) => (
                <SkillGroup key={group.id} group={group} />
              ))}
            </div>
          </MotionStagger>
        </Container>
      </Section>
    </BackgroundSurface>
  );
}
