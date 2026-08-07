import {
  BackgroundBoundary,
  BackgroundSurface,
} from "@/shared/components/background";
import { Container } from "@/shared/components/Container";
import { MotionStagger } from "@/shared/motion";
import { Section } from "@/shared/components/Section";
import { SectionHeader } from "@/shared/components/ui";
import { featuredProjects } from "../data/featuredProjects";
import { ProjectCard } from "./ProjectCard";

const projectsTitleId = "featured-projects-title";

export function FeaturedProjectsSection() {
  const [primaryProject, ...secondaryProjects] = featuredProjects;

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
                eyebrow="Selected Work"
                title="Featured Projects"
                description="A selection of frontend projects built across web and mobile, with a focus on scalable architecture, maintainability and modern React ecosystems."
              />
            </div>

            <MotionStagger
              className="space-y-6 lg:space-y-8"
              duration={0.6}
              staggerDelay={0.1}
            >
              <div>
                <ProjectCard project={primaryProject} featured />
              </div>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                {secondaryProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </MotionStagger>
          </MotionStagger>
        </Container>
      </Section>
    </BackgroundSurface>
  );
}
