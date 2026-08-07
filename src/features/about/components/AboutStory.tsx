import { Text } from "@/shared/components/ui";

interface AboutStoryProps {
  readonly paragraphs: readonly string[];
}

export function AboutStory({ paragraphs }: AboutStoryProps) {
  return (
    <div className="max-w-3xl space-y-5">
      {paragraphs.map((paragraph) => (
        <Text key={paragraph}>{paragraph}</Text>
      ))}
    </div>
  );
}
