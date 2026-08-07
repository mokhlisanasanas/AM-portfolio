export interface ProjectLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

export interface FeaturedProject {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly techStack: readonly string[];
  readonly role?: string;
  readonly company?: string;
  readonly links?: readonly ProjectLink[];
}

export const featuredProjects = [
  {
    id: "myinwi",
    title: "MyInwi",
    description: "Web application developed with Next.js, React and TypeScript.",
    techStack: ["Next.js", "React", "TypeScript"],
    role: "Front-End Developer",
    company: "Gear9",
  },
  {
    id: "flyer-be",
    title: "Flyer.be",
    description:
      "Front-end development and integration work using React.js, Next.js and TypeScript, including UI integration, code auditing and bug resolution.",
    techStack: ["React", "Next.js", "TypeScript", "Redux Toolkit", "SWR"],
    role: "Front-End Developer",
  },
  {
    id: "xii-school",
    title: "XII School",
    description: "Mobile application developed with React Native.",
    techStack: ["React Native"],
    role: "Front-End Developer",
    company: "Gear9",
  },
] as const satisfies readonly FeaturedProject[];
