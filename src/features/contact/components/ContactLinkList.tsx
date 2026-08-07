import { ExternalLink } from "@/shared/components/ui";
import type { ContactLink } from "../data/contactLinks";

interface ContactLinkListProps {
  readonly links: readonly ContactLink[];
}

export function ContactLinkList({ links }: ContactLinkListProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <ul className="space-y-3" aria-label="Professional links">
      {links.map((link) => (
        <li key={link.id}>
          <ExternalLink
            href={link.href}
            aria-label={`Visit Anas Mokhlis on ${link.label}`}
            className="inline-flex min-h-10 items-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            {link.label}
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
}
