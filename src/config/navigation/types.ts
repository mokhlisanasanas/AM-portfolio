export type NavigationItemId =
  | "home"
  | "about"
  | "projects"
  | "skills"
  | "contact";

export type NavigationTranslationKey =
  | "nav.home"
  | "nav.about"
  | "nav.projects"
  | "nav.skills"
  | "nav.contact";

export interface NavigationItem {
  readonly id: NavigationItemId;
  readonly translationKey: NavigationTranslationKey;
  readonly href: `/${string}` | `#${string}`;
  readonly external?: boolean;
}
