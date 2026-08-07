export type SkillGroupPriority = "primary" | "standard" | "secondary";

export interface SkillGroup {
  readonly id: string;
  readonly title: string;
  readonly priority: SkillGroupPriority;
  readonly description: string;
  readonly skills: readonly string[];
}

export const skillGroups = [
  {
    id: "core-frontend",
    title: "Core Frontend",
    priority: "primary",
    description:
      "Modern frontend development across web and mobile, centered on React, Next.js and TypeScript.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: "architecture-quality",
    title: "Architecture & Quality",
    priority: "standard",
    description:
      "Engineering practices focused on scalable frontend structure, usability and long-term maintainability.",
    skills: [
      "Frontend architecture",
      "Accessibility",
      "Performance",
      "Design systems",
      "Code auditing",
      "W3C standards",
    ],
  },
  {
    id: "tooling-workflow",
    title: "Tooling & Workflow",
    priority: "standard",
    description:
      "Day-to-day development tooling and collaborative delivery workflows.",
    skills: ["Git", "GitHub", "GitLab", "JIRA", "Agile / Scrum", "Node.js"],
  },
  {
    id: "additional-experience",
    title: "Additional Experience",
    priority: "secondary",
    description:
      "Earlier web-development experience that adds breadth beyond the current React-focused specialization.",
    skills: ["Angular", "Drupal", "PHP", "MySQL", "WordPress"],
  },
] as const satisfies readonly SkillGroup[];
