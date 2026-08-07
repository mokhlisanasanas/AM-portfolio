import { ExternalLink, LinkButton } from "@/shared/components/ui";
import type { ProjectLink } from "../data/featuredProjects";

interface ProjectLinksProps {
  readonly links?: readonly ProjectLink[];
}

export function ProjectLinks({ links = [] }: ProjectLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) =>
        link.external ? (
          <ExternalLink key={link.id} href={link.href}>
            {link.label}
          </ExternalLink>
        ) : (
          <LinkButton key={link.id} href={link.href} variant="secondary" size="sm">
            {link.label}
          </LinkButton>
        ),
      )}
    </div>
  );
}
