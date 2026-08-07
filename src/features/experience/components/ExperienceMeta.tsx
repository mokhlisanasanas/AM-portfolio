interface ExperienceMetaProps {
  readonly role: string;
}

export function ExperienceMeta({ role }: ExperienceMetaProps) {
  return (
    <dl>
      <div className="flex items-baseline gap-2">
        <dt className="text-[length:var(--typography-size-body-sm)] text-[var(--color-text-muted)]">
          Role
        </dt>
        <dd className="text-[length:var(--typography-size-body-sm)] text-[var(--color-text-muted)]">
          {role}
        </dd>
      </div>
    </dl>
  );
}
