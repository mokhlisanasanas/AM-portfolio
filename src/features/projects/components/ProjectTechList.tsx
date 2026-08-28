import { TagList } from "@/shared/components/ui";

interface ProjectTechListProps {
  readonly techStack: readonly string[];
  readonly label?: string;
  readonly projectTitle?: string;
}

export function ProjectTechList({
  techStack,
  label,
  projectTitle,
}: ProjectTechListProps) {
  return (
    <TagList
      tags={techStack}
      label={label ?? `${projectTitle ?? "Project"} technology stack`}
      className={[
        "gap-x-4 gap-y-2",
        "[&_span]:border-transparent [&_span]:bg-transparent [&_span]:px-0 [&_span]:py-0",
        "[&_span]:text-[length:var(--font-size-xs)] [&_span]:font-[var(--typography-weight-emphasis)]",
        "[&_span]:uppercase",
        "[&_span]:text-[var(--color-text-muted)]",
      ].join(" ")}
    />
  );
}
