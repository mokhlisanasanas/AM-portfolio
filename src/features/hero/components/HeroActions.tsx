import { ExternalLink, LinkButton } from "@/shared/components/ui";
import type { HeroAction, HeroLink } from "../data/heroContent";

interface HeroActionsProps {
  readonly actions: readonly HeroAction[];
  readonly linkedIn: HeroLink;
}

export function HeroActions({ actions, linkedIn }: HeroActionsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
      {actions.map((action) => {
        const isSecondary = action.variant === "secondary";

        return (
          <LinkButton
            key={action.id}
            href={action.href}
            variant={action.variant}
            size="lg"
            className={[
              "w-full sm:w-auto",
              isSecondary
                ? "border-[var(--color-border-subtle)] bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-hover-overlay)]"
                : "",
            ].join(" ")}
          >
            {action.label}
          </LinkButton>
        );
      })}

      <ExternalLink
        href={linkedIn.href}
        aria-label="Visit Anas Mokhlis on LinkedIn"
        className="inline-flex min-h-11 items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] sm:ml-2 sm:justify-start"
      >
        {linkedIn.label}
      </ExternalLink>
    </div>
  );
}
