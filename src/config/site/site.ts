export interface SiteSocialLink {
  readonly id: string;
  readonly label: string;
  readonly href: string | null;
}

export interface SiteConfig {
  readonly name: string;
  readonly shortTitle: string;
  readonly description: string;
  readonly author: {
    readonly name: string;
  };
  readonly social: readonly SiteSocialLink[];
}

export const siteConfig: SiteConfig = {
  name: "Mokhlis Portfolio",
  shortTitle: "Mokhlis",
  description: "A modern portfolio for selected work, skills, and contact.",
  author: {
    name: "Mokhlis",
  },
  social: [
    {
      id: "github",
      label: "GitHub",
      href: null,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: null,
    },
    {
      id: "email",
      label: "Email",
      href: null,
    },
  ],
} as const;
