"use client";

import { Button, LinkButton, Text } from "@/shared/components/ui";

interface ErrorPageProps {
  readonly reset: () => void;
}

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <div className="mx-auto w-full max-w-[var(--layout-container-page)] px-[var(--layout-container-padding-sm)] py-[var(--layout-section-gap-lg)] sm:px-[var(--layout-container-padding-md)] lg:px-[var(--layout-container-padding-lg)]">
      <div className="max-w-2xl space-y-6">
        <div className="space-y-4">
          <p className="text-[length:var(--typography-size-body-sm)] font-[var(--typography-weight-emphasis)] text-[var(--color-text-muted)]">
            Something went wrong
          </p>
          <h1 className="text-[length:var(--typography-size-heading-lg)] font-[var(--typography-weight-heading)] leading-[var(--typography-line-heading)] text-[var(--color-text-primary)]">
            The portfolio could not be loaded.
          </h1>
          <Text size="lg">Please try again, or return to the homepage.</Text>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button type="button" onClick={reset}>
            Try again
          </Button>
          <LinkButton href="/" variant="secondary">
            Back to home
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
