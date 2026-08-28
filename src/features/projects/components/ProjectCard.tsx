import { Heading, Text } from "@/shared/components/ui";
import type { FeaturedProject } from "../data/featuredProjects";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectMeta } from "./ProjectMeta";
import { ProjectTechList } from "./ProjectTechList";

interface ProjectCardProps {
  readonly project: FeaturedProject;
  readonly featured?: boolean;
  readonly labels: {
    readonly role: string;
    readonly company: string;
    readonly technologyStack: string;
  };
}

export function ProjectCard({
  project,
  featured = false,
  labels,
}: ProjectCardProps) {
  return (
    <article
      className={[
        "text-[var(--color-text-primary)]",
        featured
          ? "rounded-[var(--component-card-radius)] bg-[var(--color-surface)] p-7 md:p-9 lg:grid lg:grid-cols-12 lg:gap-12"
          : "border-t border-[var(--component-divider-color)] pt-6 md:pt-7",
      ].join(" ")}
    >
      <div
        className={[
          featured ? "space-y-7 lg:col-span-7" : "space-y-5",
        ].join(" ")}
      >
        <div className={featured ? "space-y-4" : "space-y-3"}>
          <Heading level={3} size={featured ? "section" : "subsection"}>
            {project.title}
          </Heading>
          <Text className={featured ? "max-w-2xl" : "max-w-xl"}>
            {project.description}
          </Text>
        </div>

        <ProjectMeta
          role={project.role}
          company={project.company}
          roleLabel={labels.role}
          companyLabel={labels.company}
        />
      </div>

      <div
        className={[
          featured
            ? "mt-8 space-y-7 lg:col-span-5 lg:mt-0 lg:pt-[var(--space-2)]"
            : "mt-6 space-y-5",
        ].join(" ")}
      >
        <ProjectTechList
          techStack={project.techStack}
          label={labels.technologyStack}
        />
        <ProjectLinks links={project.links} />
      </div>
    </article>
  );
}
