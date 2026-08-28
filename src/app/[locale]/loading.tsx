import { getTranslations } from "next-intl/server";
import { Container } from "@/shared/components/Container";

export default async function LocalizedLoading() {
  const t = await getTranslations("Errors.loading");

  return (
    <Container className="py-[var(--layout-section-gap-lg)]">
      <p className="text-[length:var(--typography-size-body)] text-[var(--color-text-secondary)]">
        {t("portfolio")}
      </p>
    </Container>
  );
}
