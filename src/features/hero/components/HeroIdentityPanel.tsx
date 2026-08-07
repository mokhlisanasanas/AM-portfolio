import type { HeroIdentityPanelContent } from "../data/heroContent";

interface HeroIdentityPanelProps {
  readonly content: HeroIdentityPanelContent;
}

export function HeroIdentityPanel({ content }: HeroIdentityPanelProps) {
  return (
    <aside
      aria-label="Professional identity"
      className={[
        "rounded-[var(--component-card-radius)]",
        "bg-[var(--color-surface-muted)] p-5 text-[var(--color-text-primary)] md:p-6",
      ].join(" ")}
    >
      <div className="space-y-7">
        <div className="space-y-2.5">
          <p className="text-[length:var(--typography-size-body-sm)] font-[var(--typography-weight-emphasis)] uppercase leading-[var(--typography-line-body)] text-[var(--color-text-muted)]">
            {content.name}
          </p>
          <p className="text-[length:var(--typography-size-heading-sm)] font-[var(--typography-weight-heading)] leading-[var(--typography-line-heading)]">
            {content.role}
          </p>
        </div>

        <dl className="space-y-6">
          <div className="space-y-1.5">
            <dt className="text-[length:var(--typography-size-body-sm)] font-[var(--typography-weight-emphasis)] text-[var(--color-text-muted)]">
              {content.current.label}
            </dt>
            <dd className="space-y-1">
              <span className="block text-[length:var(--typography-size-body)] font-[var(--typography-weight-emphasis)] text-[var(--color-text-primary)]">
                {content.current.company}
              </span>
              <span className="block text-[length:var(--typography-size-body-sm)] text-[var(--color-text-secondary)]">
                {content.current.since}
              </span>
            </dd>
          </div>

          <PanelList title="Current stack" items={content.stack} />
          <PanelList title="Focus" items={content.focus} />
        </dl>
      </div>
    </aside>
  );
}

function PanelList({
  title,
  items,
}: {
  readonly title: string;
  readonly items: readonly string[];
}) {
  return (
    <div className="space-y-2.5">
      <dt className="text-[length:var(--typography-size-body-sm)] font-[var(--typography-weight-emphasis)] text-[var(--color-text-muted)]">
        {title}
      </dt>
      <dd>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="text-[length:var(--typography-size-body-sm)] leading-[var(--typography-line-body)] text-[var(--color-text-secondary)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </dd>
    </div>
  );
}
