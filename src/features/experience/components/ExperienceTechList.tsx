import { TagList } from "@/shared/components/ui";

interface ExperienceTechListProps {
  readonly technologies: readonly string[];
  readonly company: string;
}

export function ExperienceTechList({
  technologies,
  company,
}: ExperienceTechListProps) {
  return (
    <TagList
      tags={technologies}
      label={`${company} technologies`}
      className={[
        "gap-x-4 gap-y-2",
        "[&_span]:border-transparent [&_span]:bg-transparent [&_span]:px-0 [&_span]:py-0",
        "[&_span]:text-[length:var(--typography-size-body-sm)] [&_span]:font-[var(--typography-weight-body)]",
        "[&_span]:text-[var(--color-text-muted)]",
      ].join(" ")}
    />
  );
}
