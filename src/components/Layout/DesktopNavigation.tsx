import Link from "next/link";
import { mainNavigation, type NavigationItem } from "@/config/navigation";

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

  return (
    <nav
      aria-label="Main navigation"
      className={["hidden md:block", className].join(" ")}
    >
      <ul className="flex items-center gap-1">
        {navigationItems.map((item) => {
          const label = getNavigationLabel(item);
          const linkClassName = [
            "focus-ring inline-flex min-h-10 items-center rounded-[var(--shape-radius-subtle)] px-3",
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
                >
                  {label}
                </a>
              ) : (
                <Link href={item.href} className={linkClassName}>
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
