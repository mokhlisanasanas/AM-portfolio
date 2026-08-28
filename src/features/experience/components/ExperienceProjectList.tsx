interface ExperienceProjectListProps {
  readonly projects?: readonly string[];
  readonly label: string;
}

export function ExperienceProjectList({
  projects,
  label,
}: ExperienceProjectListProps) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2.5">
      <p className="text-[length:var(--typography-size-body-sm)] text-[var(--color-text-muted)]">
        {label}
      </p>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li
            key={project}
            className="text-[length:var(--typography-size-body-sm)] leading-[var(--typography-line-body)] text-[var(--color-text-secondary)]"
          >
            {project}
          </li>
        ))}
      </ul>
    </div>
  );
}
