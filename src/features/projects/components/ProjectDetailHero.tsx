import { Container } from "@/shared/components/Container";
import { ExternalLink, Heading, Text } from "@/shared/components/ui";
import { ProjectMeta } from "./ProjectMeta";
import { ProjectTechList } from "./ProjectTechList";
import type { ProjectCaseStudy } from "../data/types";

interface ProjectDetailHeroProps {
  readonly project: ProjectCaseStudy;
  readonly labels: {
    readonly caseStudy: string;
    readonly stack: string;
    readonly role: string;
    readonly company: string;
    readonly visit: string;
  };
}

export function ProjectDetailHero({ project, labels }: ProjectDetailHeroProps) {
  return (
    <Container>
      <div className="grid gap-10 border-b border-[var(--component-divider-color)] pb-12 lg:grid-cols-12 lg:items-end lg:pb-16">
        <div className="space-y-8 lg:col-span-8">
          <div className="space-y-5">
            <p className="text-[length:var(--font-size-xs)] font-[var(--typography-weight-emphasis)] uppercase tracking-[var(--letter-spacing-wider)] text-[var(--color-text-muted)]">
              {labels.caseStudy}
            </p>
            <Heading level={1} size="page" className="max-w-4xl">
              {project.title}
            </Heading>
            <Text size="lg" className="max-w-2xl">
              {project.summary}
            </Text>
          </div>

          <ProjectMeta
            role={project.role}
            company={project.company}
            roleLabel={labels.role}
            companyLabel={labels.company}
          />
        </div>

        <div className="space-y-5 lg:col-span-4">
          <p className="text-[length:var(--font-size-xs)] font-[var(--typography-weight-emphasis)] uppercase tracking-[var(--letter-spacing-wider)] text-[var(--color-text-muted)]">
            {labels.stack}
          </p>
          <ProjectTechList
            techStack={project.technologies}
            projectTitle={project.title}
          />
          {project.officialUrl ? (
            <ExternalLink href={project.officialUrl}>{labels.visit}</ExternalLink>
          ) : null}
        </div>
      </div>
    </Container>
  );
}
