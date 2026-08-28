import { ExternalLink } from "@/shared/components/ui";
import type { ContactLink } from "../data/contactLinks";

interface ContactLinkListProps {
  readonly links: readonly ContactLink[];
  readonly label: string;
  readonly ariaLabelForLink: (platform: string) => string;
}

export function ContactLinkList({
  links,
  label,
  ariaLabelForLink,
}: ContactLinkListProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <ul className="space-y-3" aria-label={label}>
      {links.map((link) => (
        <li key={link.id}>
          <ExternalLink
            href={link.href}
            aria-label={ariaLabelForLink(link.label)}
            className="inline-flex min-h-10 items-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            {link.label}
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
}
