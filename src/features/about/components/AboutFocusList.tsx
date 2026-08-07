import { TagList } from "@/shared/components/ui";

interface AboutFocusListProps {
  readonly focusAreas: readonly string[];
}

export function AboutFocusList({ focusAreas }: AboutFocusListProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-[length:var(--typography-size-body-sm)] font-[var(--typography-weight-emphasis)] text-[var(--color-text-primary)]">
        Current focus
      </h3>
      <TagList
        tags={focusAreas}
        label="Current engineering focus areas"
        className={[
          "gap-x-4 gap-y-2",
          "[&_span]:border-transparent [&_span]:bg-transparent [&_span]:px-0 [&_span]:py-0",
          "[&_span]:text-[length:var(--typography-size-body-sm)] [&_span]:font-[var(--typography-weight-body)]",
          "[&_span]:text-[var(--color-text-muted)]",
        ].join(" ")}
      />
    </div>
  );
}
