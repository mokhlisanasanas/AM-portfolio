import { Eyebrow } from "./Eyebrow";
import { Heading, type HeadingLevel, type HeadingSize } from "./Heading";
import { Text } from "./Text";

interface SectionHeaderProps {
  readonly title: string;
  readonly id?: string;
  readonly headingLevel?: HeadingLevel;
  readonly headingSize?: HeadingSize;
  readonly eyebrow?: string;
  readonly description?: string;
  readonly className?: string;
}

export function SectionHeader({
  title,
  id,
  headingLevel = 2,
  headingSize = "section",
  eyebrow,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={["max-w-3xl space-y-3", className].join(" ")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading id={id} level={headingLevel} size={headingSize}>
        {title}
      </Heading>
      {description ? (
        <Text size="lg" tone="secondary">
          {description}
        </Text>
      ) : null}
    </div>
  );
}
