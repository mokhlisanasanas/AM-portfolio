export type NavigationItemId =
  | "home"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "contact";

export type NavigationTranslationKey =
  | "home"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "contact";

export interface NavigationItem {
  readonly id: NavigationItemId;
  readonly translationKey: NavigationTranslationKey;
  readonly href: `/${string}` | `#${string}`;
  readonly external?: boolean;
}
