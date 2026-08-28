import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/shared/components/Container";
import { Heading, LinkButton, Text } from "@/shared/components/ui";
import { isAppLocale, routing } from "@/i18n/routing";
import { getLocalizedPath } from "@/i18n/metadata";

export default async function LocalizedNotFound() {
  const t = await getTranslations("Errors.notFound");
  const localeValue = await getLocale();
  const locale = isAppLocale(localeValue) ? localeValue : routing.defaultLocale;

  return (
    <Container className="py-[var(--layout-section-gap-lg)]">
      <div className="max-w-2xl space-y-6">
        <div className="space-y-4">
          <p className="text-[length:var(--typography-size-body-sm)] font-[var(--typography-weight-emphasis)] text-[var(--color-text-muted)]">
            {t("eyebrow")}
          </p>
          <Heading level={1} size="page">
            {t("title")}
          </Heading>
          <Text size="lg">{t("description")}</Text>
        </div>

        <LinkButton href={getLocalizedPath("/", locale)} variant="primary">
          {t("backHome")}
        </LinkButton>
      </div>
    </Container>
  );
}
