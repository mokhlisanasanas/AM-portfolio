import { Badge } from "./Badge";

interface TagListProps {
  readonly tags: readonly string[];
  readonly className?: string;
  readonly label?: string;
}

export function TagList({ tags, className = "", label }: TagListProps) {
  return (
    <ul
      aria-label={label}
      className={["flex flex-wrap gap-2", className].join(" ")}
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge>{tag}</Badge>
        </li>
      ))}
    </ul>
  );
}
