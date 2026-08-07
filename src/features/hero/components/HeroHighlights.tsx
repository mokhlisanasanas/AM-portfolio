import { TagList } from "@/shared/components/ui";

interface HeroHighlightsProps {
  readonly highlights: readonly string[];
}

export function HeroHighlights({ highlights }: HeroHighlightsProps) {
  return (
    <TagList
      tags={highlights}
      label="Frontend specializations"
      className={[
        "max-w-3xl gap-x-4 gap-y-2",
        "[&_span]:border-transparent [&_span]:bg-transparent [&_span]:px-0 [&_span]:py-0",
        "[&_span]:text-[length:var(--typography-size-body-sm)] [&_span]:font-[var(--typography-weight-emphasis)]",
        "[&_span]:text-[var(--color-text-muted)]",
      ].join(" ")}
    />
  );
}
