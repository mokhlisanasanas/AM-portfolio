import type { AboutBackgroundPoint } from "../data/aboutContent";

interface AboutBackgroundListProps {
  readonly points: readonly AboutBackgroundPoint[];
}

export function AboutBackgroundList({ points }: AboutBackgroundListProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-[length:var(--typography-size-body-sm)] font-[var(--typography-weight-emphasis)] text-[var(--color-text-primary)]">
        Background
      </h3>
      <dl className="space-y-4">
        {points.map((point) => (
          <div key={point.id} className="space-y-1.5">
            <dt className="text-[length:var(--typography-size-body-sm)] text-[var(--color-text-muted)]">
              {point.label}
            </dt>
            <dd className="text-[length:var(--typography-size-body-sm)] leading-[var(--typography-line-body)] text-[var(--color-text-secondary)]">
              {point.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
