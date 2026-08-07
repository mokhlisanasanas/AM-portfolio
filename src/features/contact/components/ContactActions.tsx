import { LinkButton } from "@/shared/components/ui";
import type { ContactAction } from "../data/contactLinks";

interface ContactActionsProps {
  readonly actions: readonly ContactAction[];
}

export function ContactActions({ actions }: ContactActionsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {actions.map((action) => (
        <LinkButton
          key={action.id}
          href={action.href}
          variant={action.variant}
          size="lg"
          className="w-full sm:w-auto"
        >
          {action.label}
        </LinkButton>
      ))}
    </div>
  );
}
