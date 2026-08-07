"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { mainNavigation, type NavigationItem } from "@/config/navigation";

interface MobileNavigationProps {
  readonly className?: string;
}

function getNavigationLabel(item: NavigationItem) {
  return item.id.charAt(0).toUpperCase() + item.id.slice(1);
}

export function MobileNavigation({ className = "" }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navigationItems: readonly NavigationItem[] = mainNavigation;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      setIsOpen(false);
      triggerRef.current?.focus();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className={["md:hidden", className].join(" ")}>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={[
          "focus-ring inline-flex min-h-10 items-center rounded-[var(--component-button-radius)]",
          "border border-[var(--component-button-secondary-border)] bg-[var(--component-button-secondary-background)]",
          "px-4 text-sm font-medium text-[var(--component-button-secondary-foreground)]",
          "hover:bg-[var(--color-hover-overlay)]",
        ].join(" ")}
        onClick={() => {
          setIsOpen((currentIsOpen) => !currentIsOpen);
        }}
      >
        Menu
      </button>

      {isOpen ? (
        <nav
          id={panelId}
          aria-label="Main navigation"
          className={[
            "mt-3 rounded-[var(--component-card-radius)] border border-[var(--component-navigation-border)]",
            "bg-[var(--component-card-background)] p-2 shadow-[var(--component-card-shadow)]",
          ].join(" ")}
        >
          <ul className="flex flex-col gap-1">
            {navigationItems.map((item) => {
              const label = getNavigationLabel(item);
              const linkClassName = [
                "focus-ring flex min-h-11 items-center rounded-[var(--shape-radius-subtle)] px-3",
                "text-sm font-medium text-[var(--component-navigation-foreground)]",
                "hover:bg-[var(--color-hover-overlay)] hover:text-[var(--component-navigation-link-active)]",
              ].join(" ");

              return (
                <li key={item.id}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClassName}
                      onClick={closeMenu}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={linkClassName}
                      onClick={closeMenu}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
