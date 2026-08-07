export interface AboutBackgroundPoint {
  readonly id: string;
  readonly label: string;
  readonly value: string;
}

export interface AboutContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly story: readonly string[];
  readonly focusAreas: readonly string[];
  readonly backgroundPoints: readonly AboutBackgroundPoint[];
}

export const aboutContent: AboutContent = {
  eyebrow: "About",
  title: "From Web Development to Modern Frontend Engineering",
  description:
    "A focused evolution from broad web development into modern React, Next.js and TypeScript engineering.",
  story: [
    "Anas Mokhlis is a Front-End Developer focused on building frontend experiences with React, Next.js and TypeScript.",
    "His technical path moved from earlier web development with PHP/MySQL, HTML/CSS/JavaScript, WordPress and Drupal toward Angular, React, React Native, Next.js and TypeScript.",
    "He currently works at Gear9, with verified project experience on MyInwi and the XII School mobile application.",
    "His current engineering focus includes frontend architecture, accessibility, performance, maintainability and design systems.",
  ],
  focusAreas: [
    "Frontend Architecture",
    "Accessibility",
    "Performance",
    "Maintainability",
    "Design Systems",
    "AI-assisted Development",
  ],
  backgroundPoints: [
    {
      id: "education",
      label: "Education",
      value: "Web, mobile and application engineering studies",
    },
    {
      id: "development-foundation",
      label: "Development foundation",
      value: "PHP/MySQL, HTML, CSS, JavaScript, WordPress and Drupal",
    },
    {
      id: "collaborative-workflow",
      label: "Collaborative workflow",
      value: "Git, GitHub/GitLab, JIRA and Agile/Scrum",
    },
  ],
};
