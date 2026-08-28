interface ExperienceMetaProps {
  readonly role: string;
  readonly roleLabel: string;
}

export function ExperienceMeta({ role, roleLabel }: ExperienceMetaProps) {
  return (
    <dl>
      <div className="flex items-baseline gap-2">
        <dt className="text-[length:var(--typography-size-body-sm)] text-[var(--color-text-muted)]">
          {roleLabel}
        </dt>
        <dd className="text-[length:var(--typography-size-body-sm)] text-[var(--color-text-muted)]">
          {role}
        </dd>
      </div>
    </dl>
  );
}
