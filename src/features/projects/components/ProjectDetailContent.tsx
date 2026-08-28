import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/shared/components/Container";
import { Heading, Text } from "@/shared/components/ui";
import { MotionReveal } from "@/shared/motion";
import type { ProjectCaseStudy } from "../data/types";
import { ProjectScreenshots } from "./ProjectScreenshots";
import { ProjectTechList } from "./ProjectTechList";

interface ProjectDetailContentProps {
  readonly project: ProjectCaseStudy;
  readonly backHref: string;
  readonly labels: {
    readonly overview: string;
    readonly contribution: string;
    readonly functionalScope: string;
    readonly engineeringApproach: string;
    readonly engineeringChallenges: string;
    readonly solutionsApproach: string;
    readonly technologies: string;
    readonly productReference: string;
    readonly productReferenceCaptionPrefix: string;
    readonly backToProjects: string;
    readonly fallbackContribution: string;
  };
}

interface DetailSectionProps {
  readonly number: string;
  readonly title: string;
  readonly id: string;
  readonly children: ReactNode;
}

function DetailSection({ number, title, id, children }: DetailSectionProps) {
  return (
    <MotionReveal duration={0.55}>
      <section
        aria-labelledby={id}
        className="grid gap-5 border-t border-[var(--component-divider-color)] pt-8 md:grid-cols-12 md:gap-8"
      >
        <p className="text-[length:var(--font-size-xs)] font-[var(--typography-weight-emphasis)] text-[var(--color-text-muted)]">
          {number}
        </p>
        <div className="space-y-5 md:col-span-11">
          <Heading id={id} level={2} size="section">
            {title}
          </Heading>
          {children}
        </div>
      </section>
    </MotionReveal>
  );
}

export function ProjectDetailContent({
  project,
  backHref,
  labels,
}: ProjectDetailContentProps) {
  const hasResponsibilities = project.responsibilities.length > 0;
  const hasChallenges = project.challenges.length > 0;
  const hasSolutions = hasChallenges && project.solutions.length > 0;
  const hasFunctionalScope =
    project.functionalScope !== undefined && project.functionalScope.length > 0;
  const hasEngineeringApproach =
    project.engineeringApproach !== undefined &&
    project.engineeringApproach.length > 0;

  return (
    <Container>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-10 lg:col-span-8">
          <DetailSection
            number="01"
            title={labels.overview}
            id="project-overview"
          >
            <Text size="lg" className="max-w-3xl">
              {project.description}
            </Text>
          </DetailSection>

          <DetailSection
            number="02"
            title={labels.contribution}
            id="project-contribution"
          >
            {hasResponsibilities ? (
              <ul className="space-y-3">
                {project.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="text-[length:var(--typography-size-body)] leading-[var(--line-height-relaxed)] text-[var(--color-text-secondary)]"
                  >
                    {responsibility}
                  </li>
                ))}
              </ul>
            ) : (
              <Text>{labels.fallbackContribution}</Text>
            )}
          </DetailSection>

          <DetailSection
            number="03"
            title={labels.functionalScope}
            id="project-functional-scope"
          >
            {hasFunctionalScope ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {project.functionalScope?.map((area) => (
                  <section
                    key={area.id}
                    aria-labelledby={`project-functional-${area.id}`}
                    className="space-y-3 border-t border-[var(--component-divider-color)] pt-4"
                  >
                    <Heading
                      id={`project-functional-${area.id}`}
                      level={3}
                      size="subsection"
                    >
                      {area.title}
                    </Heading>
                    <ul className="space-y-2">
                      {area.items.map((item) => (
                        <li
                          key={item}
                          className="text-[length:var(--typography-size-body-sm)] leading-[var(--line-height-relaxed)] text-[var(--color-text-secondary)]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            ) : (
              <ul className="grid gap-3 sm:grid-cols-2">
                {(project.technicalScope ?? project.technologies).map((scopeItem) => (
                  <li
                    key={scopeItem}
                    className="border-t border-[var(--component-divider-color)] pt-3 text-[length:var(--typography-size-body)] leading-[var(--line-height-relaxed)] text-[var(--color-text-secondary)]"
                  >
                    {scopeItem}
                  </li>
                ))}
              </ul>
            )}
          </DetailSection>

          {hasEngineeringApproach ? (
            <DetailSection
              number="04"
              title={labels.engineeringApproach}
              id="project-engineering-approach"
            >
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.engineeringApproach?.map((approachItem) => (
                  <li
                    key={approachItem}
                    className="border-t border-[var(--component-divider-color)] pt-3 text-[length:var(--typography-size-body)] leading-[var(--line-height-relaxed)] text-[var(--color-text-secondary)]"
                  >
                    {approachItem}
                  </li>
                ))}
              </ul>
            </DetailSection>
          ) : null}

          {hasChallenges ? (
            <DetailSection
              number="05"
              title={labels.engineeringChallenges}
              id="project-challenges"
            >
              <div className="space-y-5">
                {project.challenges.map((challenge) => (
                  <article key={challenge.id} className="space-y-2">
                    <Heading level={3} size="subsection">
                      {challenge.title}
                    </Heading>
                    <Text>{challenge.description}</Text>
                  </article>
                ))}
              </div>
            </DetailSection>
          ) : null}

          {hasSolutions ? (
            <DetailSection
              number="06"
              title={labels.solutionsApproach}
              id="project-solutions"
            >
              <div className="space-y-5">
                {project.solutions.map((solution) => (
                  <article key={solution.id} className="space-y-2">
                    <Heading level={3} size="subsection">
                      {solution.title}
                    </Heading>
                    <Text>{solution.description}</Text>
                  </article>
                ))}
              </div>
            </DetailSection>
          ) : null}

          <DetailSection
            number="05"
            title={labels.technologies}
            id="project-technologies"
          >
            <ProjectTechList
              techStack={project.technologies}
              projectTitle={project.title}
            />
          </DetailSection>

          <div className="flex justify-start pt-2 md:justify-end">
            <Link
              href={backHref}
              className="focus-ring rounded-[var(--shape-radius-subtle)] text-[length:var(--typography-size-body-sm)] font-[var(--typography-weight-emphasis)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
            >
              {labels.backToProjects}
            </Link>
          </div>
        </div>

        <ProjectScreenshots
          screenshots={project.screenshots}
          note={project.productReferenceNote}
          title={labels.productReference}
          captionPrefix={labels.productReferenceCaptionPrefix}
          number="06"
        />
      </div>
    </Container>
  );
}
