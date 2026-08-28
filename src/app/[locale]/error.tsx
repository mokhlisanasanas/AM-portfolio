"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button, LinkButton, Text } from "@/shared/components/ui";
import { getLocalizedPath } from "@/i18n/metadata";
import { isAppLocale, routing } from "@/i18n/routing";

interface ErrorPageProps {
  readonly reset: () => void;
}

export default function LocalizedErrorPage({ reset }: ErrorPageProps) {
  const t = useTranslations("Errors.runtime");
  const localeValue = useLocale();
  const locale = isAppLocale(localeValue) ? localeValue : routing.defaultLocale;

  return (
    <div className="mx-auto w-full max-w-[var(--layout-container-page)] px-[var(--layout-container-padding-sm)] py-[var(--layout-section-gap-lg)] sm:px-[var(--layout-container-padding-md)] lg:px-[var(--layout-container-padding-lg)]">
      <div className="max-w-2xl space-y-6">
        <div className="space-y-4">
          <p className="text-[length:var(--typography-size-body-sm)] font-[var(--typography-weight-emphasis)] text-[var(--color-text-muted)]">
            {t("eyebrow")}
          </p>
          <h1 className="text-[length:var(--typography-size-heading-lg)] font-[var(--typography-weight-heading)] leading-[var(--typography-line-heading)] text-[var(--color-text-primary)]">
            {t("title")}
          </h1>
          <Text size="lg">{t("description")}</Text>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button type="button" onClick={reset}>
            {t("tryAgain")}
          </Button>
          <LinkButton href={getLocalizedPath("/", locale)} variant="secondary">
            {t("backHome")}
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
