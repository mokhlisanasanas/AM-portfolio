import type { NavigationItem } from "./types";

export const mainNavigation = [
  {
    id: "home",
    translationKey: "home",
    href: "/#home",
  },
  {
    id: "projects",
    translationKey: "projects",
    href: "/#projects",
  },
  {
    id: "experience",
    translationKey: "experience",
    href: "/#experience",
  },
  {
    id: "skills",
    translationKey: "skills",
    href: "/#skills",
  },
  {
    id: "about",
    translationKey: "about",
    href: "/#about",
  },
  {
    id: "contact",
    translationKey: "contact",
    href: "/#contact",
  },
] as const satisfies readonly NavigationItem[];
