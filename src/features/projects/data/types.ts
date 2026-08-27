export type ProjectLinkKind = "live" | "github" | "case-study" | "external";

export interface ProjectLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly kind: ProjectLinkKind;
  readonly external?: boolean;
}

export interface ProjectScreenshot {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly caption?: string;
  readonly type?: "product-reference" | "project";
  readonly width: number;
  readonly height: number;
}

export interface ProjectSeoMetadata {
  readonly title: string;
  readonly description: string;
}

export interface ProjectChallenge {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export interface ProjectSolution {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly challengeId?: ProjectChallenge["id"];
}

export interface ProjectFunctionalArea {
  readonly id: string;
  readonly title: string;
  readonly items: readonly string[];
}

export interface ProjectCaseStudy {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly description: string;
  readonly officialUrl?: string;
  readonly role: string;
  readonly company?: string;
  readonly period?: string;
  readonly technologies: readonly string[];
  readonly technicalScope?: readonly string[];
  readonly functionalScope?: readonly ProjectFunctionalArea[];
  readonly engineeringApproach?: readonly string[];
  readonly responsibilities: readonly string[];
  readonly challenges: readonly ProjectChallenge[];
  readonly solutions: readonly ProjectSolution[];
  readonly selectedFeatures?: readonly string[];
  readonly productReferenceNote?: string;
  readonly screenshots?: readonly ProjectScreenshot[];
  readonly links?: readonly ProjectLink[];
  readonly seo: ProjectSeoMetadata;
}
