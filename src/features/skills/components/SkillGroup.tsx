import { Heading, Text } from "@/shared/components/ui";
import type { SkillGroup as SkillGroupData } from "../data/skillGroups";
import { SkillList } from "./SkillList";

interface SkillGroupProps {
  readonly group: SkillGroupData;
  readonly skillsLabel: string;
}

export function SkillGroup({ group, skillsLabel }: SkillGroupProps) {
  const isPrimary = group.priority === "primary";
  const isSecondary = group.priority === "secondary";
  const layoutClassName =
    group.id === "core-frontend"
      ? "lg:col-span-7"
      : group.id === "architecture-quality"
        ? "lg:col-span-5"
        : group.id === "tooling-workflow"
          ? "lg:col-span-6"
          : "lg:col-span-6 lg:col-start-7";

  return (
    <section
      aria-labelledby={`${group.id}-title`}
      className={[
        "border-t border-[var(--component-divider-color)] pt-6",
        isPrimary ? "space-y-7 lg:pt-8" : "space-y-5",
        isSecondary ? "opacity-90" : "",
        layoutClassName,
      ].join(" ")}
    >
      <div className={isPrimary ? "space-y-4" : "space-y-3"}>
        <Heading
          id={`${group.id}-title`}
          level={3}
          size={isPrimary ? "section" : "subsection"}
          className={isSecondary ? "text-[var(--color-text-secondary)]" : ""}
        >
          {group.title}
        </Heading>
        <Text
          size={isPrimary ? "lg" : "md"}
          tone={isSecondary ? "muted" : "secondary"}
          className={isPrimary ? "max-w-2xl" : "max-w-lg"}
        >
          {group.description}
        </Text>
      </div>

      <SkillList
        skills={group.skills}
        label={skillsLabel}
        priority={group.priority}
      />
    </section>
  );
}
