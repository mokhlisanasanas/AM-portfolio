"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { NavigationItemId } from "@/config/navigation";

const observedSectionIds = [
  "home",
  "projects",
  "experience",
  "skills",
  "about",
  "contact",
] as const satisfies readonly NavigationItemId[];

function isNavigationItemId(value: string): value is NavigationItemId {
  return observedSectionIds.some((sectionId) => sectionId === value);
}

function getHashSectionId(): NavigationItemId | null {
  if (typeof window === "undefined") {
    return null;
  }

  const hash = window.location.hash.replace("#", "");

  return isNavigationItemId(hash) ? hash : null;
}

export function useActiveNavigationItem() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<NavigationItemId>("home");

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sections = observedSectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (
          activeEntry?.target instanceof HTMLElement &&
          isNavigationItemId(activeEntry.target.id)
        ) {
          setActiveId(activeEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    function handleHashChange() {
      const hashSectionId = getHashSectionId();

      if (hashSectionId) {
        setActiveId(hashSectionId);
      }
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  return activeId;
}
