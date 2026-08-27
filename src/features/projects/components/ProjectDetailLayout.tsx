import { BackgroundBoundary, BackgroundSurface } from "@/shared/components/background";
import { MotionStagger } from "@/shared/motion";
import { Section } from "@/shared/components/Section";
import type { ProjectCaseStudy } from "../data/types";
import { ProjectDetailContent } from "./ProjectDetailContent";
import { ProjectDetailHero } from "./ProjectDetailHero";

interface ProjectDetailLayoutProps {
  readonly project: ProjectCaseStudy;
}

export function ProjectDetailLayout({ project }: ProjectDetailLayoutProps) {
  return (
    <BackgroundSurface variant="canvas">
      <Section className="pt-[var(--layout-section-gap-md)]">
        <MotionStagger className="space-y-16 lg:space-y-24">
          <div>
            <ProjectDetailHero project={project} />
          </div>
          <div>
            <ProjectDetailContent project={project} />
          </div>
        </MotionStagger>
      </Section>
      <BackgroundBoundary position="bottom" />
    </BackgroundSurface>
  );
}
