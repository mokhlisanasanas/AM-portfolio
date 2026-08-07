export type ContactActionVariant = "primary" | "secondary";

export interface ContactAction {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly variant: ContactActionVariant;
}

export interface ContactLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export interface ContactContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly actions: readonly ContactAction[];
  readonly links: readonly ContactLink[];
}

export const contactContent: ContactContent = {
  eyebrow: "Contact",
  title: "Let’s Build Something Useful",
  description:
    "For frontend opportunities, React and Next.js projects, or professional collaboration, feel free to get in touch.",
  actions: [
    {
      id: "email",
      label: "Email Me",
      href: "mailto:anas.mokhlis.me@gmail.com",
      variant: "primary",
    },
    {
      id: "cv",
      label: "Download CV",
      href: "/cv/CV-Anas-Mokhlis.pdf",
      variant: "secondary",
    },
  ],
  links: [
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anas-mokhlis",
    },
  ],
};
