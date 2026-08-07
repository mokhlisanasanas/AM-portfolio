interface StatProps {
  readonly label: string;
  readonly value: string;
  readonly className?: string;
}

export function Stat({ label, value, className = "" }: StatProps) {
  return (
    <dl className={["space-y-1", className].join(" ")}>
      <dt className="text-[length:var(--font-size-3xl)] font-[var(--typography-weight-heading)] leading-[var(--typography-line-heading)] text-[var(--color-text-primary)]">
        {value}
      </dt>
      <dd className="text-[length:var(--typography-size-body-sm)] leading-[var(--typography-line-body)] text-[var(--color-text-secondary)]">
        {label}
      </dd>
    </dl>
  );
}
