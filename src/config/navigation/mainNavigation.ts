import type { NavigationItem } from "./types";

export const mainNavigation = [
  {
    id: "home",
    translationKey: "nav.home",
    href: "/",
  },
  {
    id: "about",
    translationKey: "nav.about",
    href: "/#about",
  },
  {
    id: "projects",
    translationKey: "nav.projects",
    href: "/#projects",
  },
  {
    id: "skills",
    translationKey: "nav.skills",
    href: "/#skills",
  },
  {
    id: "contact",
    translationKey: "nav.contact",
    href: "/#contact",
  },
] as const satisfies readonly NavigationItem[];
