import { Heading, Text } from "@/shared/components/ui";
import type { SkillGroup as SkillGroupData } from "../data/skillGroups";
import { SkillList } from "./SkillList";

interface SkillGroupProps {
  readonly group: SkillGroupData;
}

export function SkillGroup({ group }: SkillGroupProps) {
  const isPrimary = group.priority === "primary";
  const isSecondary = group.priority === "secondary";

  return (
    <section
      aria-labelledby={`${group.id}-title`}
      className={[
        "space-y-5",
        isPrimary ? "lg:col-span-7" : "",
        group.priority === "standard" ? "lg:col-span-5" : "",
        isSecondary ? "lg:col-span-5 lg:col-start-8" : "",
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
          className={isPrimary ? "max-w-2xl" : "max-w-xl"}
        >
          {group.description}
        </Text>
      </div>

      <SkillList
        skills={group.skills}
        label={`${group.title} skills`}
        priority={group.priority}
      />
    </section>
  );
}
