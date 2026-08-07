import { TagList } from "@/shared/components/ui";
import type { SkillGroupPriority } from "../data/skillGroups";

interface SkillListProps {
  readonly skills: readonly string[];
  readonly label: string;
  readonly priority?: SkillGroupPriority;
}

export function SkillList({
  skills,
  label,
  priority = "standard",
}: SkillListProps) {
  const isPrimary = priority === "primary";
  const isSecondary = priority === "secondary";

  return (
    <TagList
      tags={skills}
      label={label}
      className={[
        isPrimary ? "gap-x-5 gap-y-3" : "gap-x-4 gap-y-2",
        "[&_span]:border-transparent [&_span]:bg-transparent [&_span]:px-0 [&_span]:py-0",
        isPrimary
          ? "[&_span]:text-[length:var(--typography-size-body)] [&_span]:font-[var(--typography-weight-emphasis)]"
          : "[&_span]:text-[length:var(--typography-size-body-sm)] [&_span]:font-[var(--typography-weight-body)]",
        isSecondary
          ? "[&_span]:text-[var(--color-text-muted)]"
          : "[&_span]:text-[var(--color-text-secondary)]",
      ].join(" ")}
    />
  );
}
