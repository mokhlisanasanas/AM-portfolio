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
        isPrimary ? "gap-2.5" : "gap-2",
        "[&_span]:motion-transition",
        "[&_span]:rounded-[var(--shape-radius-subtle)]",
        "[&_span]:border-[var(--component-badge-border)]",
        "[&_span]:bg-transparent",
        "[&_span]:text-[var(--color-text-secondary)]",
        "[&_span]:hover:-translate-y-px",
        "[&_span]:hover:border-[var(--color-border)]",
        "[&_span]:hover:bg-[var(--color-hover-overlay)]",
        "[&_span]:hover:text-[var(--color-text-primary)]",
        isPrimary
          ? "[&_span]:px-3 [&_span]:py-1.5 [&_span]:text-[length:var(--typography-size-body)] [&_span]:font-[var(--typography-weight-emphasis)]"
          : "[&_span]:px-2.5 [&_span]:py-1 [&_span]:text-[length:var(--typography-size-body-sm)] [&_span]:font-[var(--typography-weight-body)]",
        isSecondary
          ? "[&_span]:border-transparent [&_span]:text-[var(--color-text-muted)]"
          : "",
      ].join(" ")}
    />
  );
}
