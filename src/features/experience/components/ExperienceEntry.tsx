import { Heading, Text } from "@/shared/components/ui";
import type { ExperienceItem } from "../data/experienceItems";
import { ExperienceMeta } from "./ExperienceMeta";
import { ExperienceProjectList } from "./ExperienceProjectList";
import { ExperienceTechList } from "./ExperienceTechList";

interface ExperienceEntryProps {
  readonly experience: ExperienceItem;
  readonly current?: boolean;
}

export function ExperienceEntry({
  experience,
  current = false,
}: ExperienceEntryProps) {
  return (
    <article
      className={[
        "grid gap-6 border-t border-[var(--component-divider-color)] pt-7",
        "lg:grid-cols-12 lg:gap-8",
        current ? "lg:pt-9" : "",
      ].join(" ")}
    >
      <div className="space-y-3 lg:col-span-3">
        <Heading level={3} size="subsection">
          {experience.company}
        </Heading>
        <p className="text-[length:var(--typography-size-body-sm)] text-[var(--color-text-muted)]">
          {experience.period}
        </p>
      </div>

      <div className="space-y-4 lg:col-span-5">
        <ExperienceMeta role={experience.role} />
        <Text>{experience.description}</Text>
      </div>

      <div className="space-y-6 lg:col-span-4">
        <ExperienceTechList
          technologies={experience.technologies}
          company={experience.company}
        />
        <ExperienceProjectList projects={experience.selectedProjects} />
      </div>
    </article>
  );
}
