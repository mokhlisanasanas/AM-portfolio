import type {
  ProjectCaseStudy,
  ProjectFunctionalArea,
  ProjectLink,
  ProjectSeoMetadata,
} from "./types";

export interface ProjectCaseStudyLocalization {
  readonly summary?: string;
  readonly description?: string;
  readonly role?: string;
  readonly period?: string;
  readonly technicalScope?: readonly string[];
  readonly functionalScope?: readonly ProjectFunctionalArea[];
  readonly engineeringApproach?: readonly string[];
  readonly responsibilities?: readonly string[];
  readonly productReferenceNote?: string;
  readonly links?: readonly Pick<ProjectLink, "id" | "label">[];
  readonly seo?: ProjectSeoMetadata;
}

export const projectCaseStudies = [
  {
    slug: "myinwi",
    title: "MyInwi",
    summary: "A modern telecom self-care web experience.",
    description:
      "MyInwi sits in the telecom self-care domain and was developed as a web application during front-end work at Gear9. The verified implementation stack is Next.js, React and TypeScript.",
    officialUrl: "https://inwi.ma/fr",
    role: "Front-End Developer",
    company: "Gear9",
    technologies: ["Next.js", "React", "TypeScript"],
    technicalScope: [
      "Next.js web application",
      "React interface development",
      "TypeScript frontend implementation",
    ],
    functionalScope: [
      {
        id: "catalog-products",
        title: "Catalog & Products",
        items: [
          "Product catalogue and filtering",
          "Mobile offers",
          "Smartphones",
          "Recharge products",
          "Stock and commercial availability",
        ],
      },
      {
        id: "customer-authentication",
        title: "Customer & Authentication",
        items: ["OTP flows", "Customer profile", "Line and product information"],
      },
      {
        id: "billing-payment",
        title: "Billing & Payment",
        items: [
          "B2C and B2B invoices",
          "Invoice history",
          "Invoice download",
          "Card payment flows",
        ],
      },
      {
        id: "mobile-services",
        title: "Mobile Services",
        items: ["Roaming status", "eSIM-related services"],
      },
      {
        id: "portability",
        title: "Portability",
        items: [
          "Number portability flows",
          "RIO handling",
          "Operator and product selection",
        ],
      },
      {
        id: "content-discovery",
        title: "Content & Discovery",
        items: [
          "Search",
          "FAQ",
          "Press and content filtering",
          "Pagination and infinite loading where applicable",
        ],
      },
      {
        id: "forms-validation",
        title: "Forms & Validation",
        items: [
          "Form handling and validation",
          "Moroccan phone-number validation",
          "User input and error handling",
        ],
      },
    ],
    engineeringApproach: [
      "Reusable component architecture",
      "Typed frontend development",
      "API integration",
      "State management",
      "Form validation",
      "Responsive implementation",
      "Accessibility considerations",
      "Maintainable frontend structure",
    ],
    responsibilities: [
      "Front-end development with React, Next.js and TypeScript.",
      "Reusable UI and component integration.",
      "Integration of frontend interfaces with backend APIs.",
      "Responsive interface implementation.",
      "Form handling and validation.",
      "Frontend debugging and maintenance.",
      "Accessibility and frontend quality considerations.",
    ],
    challenges: [],
    solutions: [],
    productReferenceNote:
      "Selected views from the current public inwi digital experience are shown for product context.",
    links: [
      {
        id: "myinwi-case-study",
        label: "View case study",
        href: "/projects/myinwi",
        kind: "case-study",
      },
    ],
    seo: {
      title: "MyInwi Project",
      description:
        "A modern telecom self-care web experience developed with Next.js, React and TypeScript.",
    },
  },
  {
    slug: "flyer-be",
    title: "Flyer.be",
    summary:
      "Front-end development and integration work using React.js, Next.js and TypeScript, including UI integration, code auditing and bug resolution.",
    description:
      "Front-end development and integration work using React.js, Next.js and TypeScript, including UI integration, code auditing and bug resolution.",
    role: "Front-End Developer",
    technologies: ["React", "Next.js", "TypeScript", "Redux Toolkit", "SWR"],
    responsibilities: ["UI integration", "Code auditing", "Bug resolution"],
    challenges: [],
    solutions: [],
    seo: {
      title: "Flyer.be Project",
      description:
        "Front-end development and integration work using React.js, Next.js and TypeScript.",
    },
  },
  {
    slug: "xii-school",
    title: "XII School",
    summary: "Mobile application developed with React Native.",
    description: "Mobile application developed with React Native.",
    role: "Front-End Developer",
    company: "Gear9",
    technologies: ["React Native"],
    responsibilities: [],
    challenges: [],
    solutions: [],
    seo: {
      title: "XII School Project",
      description: "Mobile application developed with React Native.",
    },
  },
] as const satisfies readonly ProjectCaseStudy[];

export function getProjectCaseStudyBySlug(
  slug: string,
): ProjectCaseStudy | undefined {
  return projectCaseStudies.find((project) => project.slug === slug);
}

export function localizeProjectCaseStudy(
  project: ProjectCaseStudy,
  localization: ProjectCaseStudyLocalization,
): ProjectCaseStudy {
  const localizedLinks =
    project.links?.map((link) => {
      const localizedLink = localization.links?.find(
        (candidate) => candidate.id === link.id,
      );

      return {
        ...link,
        label: localizedLink?.label ?? link.label,
      };
    }) ?? project.links;

  return {
    ...project,
    summary: localization.summary ?? project.summary,
    description: localization.description ?? project.description,
    role: localization.role ?? project.role,
    period: localization.period ?? project.period,
    technicalScope: localization.technicalScope ?? project.technicalScope,
    functionalScope: localization.functionalScope ?? project.functionalScope,
    engineeringApproach:
      localization.engineeringApproach ?? project.engineeringApproach,
    responsibilities: localization.responsibilities ?? project.responsibilities,
    productReferenceNote:
      localization.productReferenceNote ?? project.productReferenceNote,
    links: localizedLinks,
    seo: localization.seo ?? project.seo,
  };
}
