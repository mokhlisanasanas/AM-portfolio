interface ProjectMetaProps {
  readonly role?: string;
  readonly company?: string;
}

export function ProjectMeta({ role, company }: ProjectMetaProps) {
  const metaItems = [
    role ? { label: "Role", value: role } : null,
    company ? { label: "Company", value: company } : null,
  ].filter((item): item is { readonly label: string; readonly value: string } =>
    Boolean(item),
  );

  if (metaItems.length === 0) {
    return null;
  }

  return (
    <dl className="flex flex-wrap gap-x-6 gap-y-2">
      {metaItems.map((item) => (
        <div key={item.label} className="flex items-baseline gap-2">
          <dt className="text-[length:var(--font-size-xs)] font-[var(--typography-weight-emphasis)] uppercase text-[var(--color-text-muted)]">
            {item.label}
          </dt>
          <dd className="text-[length:var(--typography-size-body-sm)] text-[var(--color-text-muted)]">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
