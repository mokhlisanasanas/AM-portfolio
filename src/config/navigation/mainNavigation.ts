import type { NavigationItem } from "./types";

export const mainNavigation = [
  {
    id: "home",
    translationKey: "nav.home",
    href: "/#home",
  },
  {
    id: "projects",
    translationKey: "nav.projects",
    href: "/#projects",
  },
  {
    id: "experience",
    translationKey: "nav.experience",
    href: "/#experience",
  },
  {
    id: "skills",
    translationKey: "nav.skills",
    href: "/#skills",
  },
  {
    id: "about",
    translationKey: "nav.about",
    href: "/#about",
  },
  {
    id: "contact",
    translationKey: "nav.contact",
    href: "/#contact",
  },
] as const satisfies readonly NavigationItem[];
