import { projectCaseStudies } from "./projectCaseStudies";
import type { ProjectCaseStudy, ProjectLink } from "./types";

export type { ProjectLink } from "./types";

export interface FeaturedProject {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly techStack: readonly string[];
  readonly role?: string;
  readonly company?: string;
  readonly links?: readonly ProjectLink[];
}

function createFeaturedProject(project: ProjectCaseStudy): FeaturedProject {
  return {
    id: project.slug,
    slug: project.slug,
    title: project.title,
    description: project.summary,
    techStack: project.technologies,
    role: project.role,
    company: project.company,
    links: project.links,
  };
}

export const featuredProjects: readonly FeaturedProject[] =
  projectCaseStudies.map(createFeaturedProject);
