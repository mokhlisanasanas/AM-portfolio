"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { mainNavigation, type NavigationItem } from "@/config/navigation";
import { useActiveNavigationItem } from "./useActiveNavigationItem";

interface DesktopNavigationProps {
  readonly className?: string;
}

function getNavigationLabel(item: NavigationItem) {
  return item.id.charAt(0).toUpperCase() + item.id.slice(1);
}

export function DesktopNavigation({
  className = "",
}: DesktopNavigationProps) {
  const navigationItems: readonly NavigationItem[] = mainNavigation;
  const activeId = useActiveNavigationItem();
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav
      aria-label="Main navigation"
      className={["hidden md:block", className].join(" ")}
    >
      <ul className="flex items-center gap-1">
        {navigationItems.map((item) => {
          const label = getNavigationLabel(item);
          const linkClassName = [
            "focus-ring relative inline-flex min-h-10 items-center rounded-[var(--shape-radius-subtle)] px-3",
            "text-sm font-medium text-[var(--component-navigation-foreground)]",
            "hover:bg-[var(--color-hover-overlay)] hover:text-[var(--component-navigation-link-active)]",
          ].join(" ");
          const isActive = item.id === activeId;

          return (
            <li key={item.id} className="relative">
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                  aria-current={isActive ? "location" : undefined}
                >
                  {label}
                  {isActive ? (
                    <motion.span
                      layoutId="navbar-active-indicator"
                      className="absolute inset-x-3 bottom-1 h-0.5 rounded-[var(--radius-full)] bg-[var(--color-accent)]"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { duration: 0.24, ease: "easeOut" }
                      }
                    />
                  ) : null}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={linkClassName}
                  aria-current={isActive ? "location" : undefined}
                >
                  {label}
                  {isActive ? (
                    <motion.span
                      layoutId="navbar-active-indicator"
                      className="absolute inset-x-3 bottom-1 h-0.5 rounded-[var(--radius-full)] bg-[var(--color-accent)]"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { duration: 0.24, ease: "easeOut" }
                      }
                    />
                  ) : null}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
