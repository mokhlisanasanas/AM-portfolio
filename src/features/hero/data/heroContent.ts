export type HeroActionVariant = "primary" | "secondary";

export interface HeroAction {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly variant: HeroActionVariant;
}

export interface HeroLink {
  readonly label: string;
  readonly href: string;
}

export interface HeroIdentityPanelContent {
  readonly name: string;
  readonly role: string;
  readonly current: {
    readonly label: string;
    readonly company: string;
    readonly since: string;
  };
  readonly stack: readonly string[];
  readonly focus: readonly string[];
  readonly projects: readonly string[];
}

export interface HeroContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly actions: readonly HeroAction[];
  readonly linkedIn: HeroLink;
  readonly identityPanel: HeroIdentityPanelContent;
}

export const heroContent: HeroContent = {
  eyebrow: "Front-End Engineer / React · Next.js · TypeScript",
  title: "ANAS MOKHLIS",
  description:
    "Front-End Engineer specialized in React, Next.js and TypeScript, focused on scalable frontend architecture, performance, accessibility, design systems and AI-assisted development workflows.",
  highlights: [
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Performance",
    "Accessibility",
    "Design Systems",
    "AI-assisted workflows",
  ],
  actions: [
    {
      id: "projects",
      label: "View Projects",
      href: "#projects",
      variant: "primary",
    },
    {
      id: "cv",
      label: "Download CV",
      href: "/cv/CV-Anas-Mokhlis.pdf",
      variant: "secondary",
    },
  ],
  linkedIn: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anas-mokhlis",
  },
  identityPanel: {
    name: "Anas Mokhlis",
    role: "Front-End Developer",
    current: {
      label: "Currently",
      company: "Gear9",
      since: "Since December 2021",
    },
    stack: ["React", "Next.js", "TypeScript", "React Native"],
    focus: ["Frontend architecture", "Accessibility", "Performance"],
    projects: ["MyInwi web application", "XII School mobile application"],
  },
};
