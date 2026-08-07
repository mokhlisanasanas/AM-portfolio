export interface ExperienceItem {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly selectedProjects?: readonly string[];
}

export const experienceItems = [
  {
    id: "gear9",
    company: "Gear9",
    role: "Front-End Developer",
    period: "December 2021 — Present",
    description:
      "Front-end development across modern web and mobile applications using React, Next.js, TypeScript and React Native.",
    technologies: ["React", "Next.js", "TypeScript", "React Native"],
    selectedProjects: ["MyInwi", "XII School"],
  },
  {
    id: "eyaka-be",
    company: "Eyaka.be",
    role: "Front-End Developer",
    period: "June 2021 — November 2021",
    description:
      "Front-end development using Angular, with GitLab, Node.js and Git as part of the development workflow.",
    technologies: ["Angular", "Node.js", "Git", "GitLab"],
  },
  {
    id: "flyer-ma",
    company: "Flyer.ma",
    role: "Front-End Developer",
    period: "March 2018 — June 2021",
    description:
      "Front-end development and integration work covering React, HTML/CSS, Drupal integration, source-code auditing, bug resolution and W3C compliance checks.",
    technologies: ["React", "HTML5", "CSS3", "Drupal"],
  },
  {
    id: "hrconsulting",
    company: "HRConsulting",
    role: "PHP Developer",
    period: "November 2017 — February 2018",
    description:
      "Development of dynamic web functionality with PHP/MySQL and front-end pages using HTML, CSS and JavaScript.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  },
] as const satisfies readonly ExperienceItem[];
