"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "@/components/theme/useTheme";
import { isAppLocale, routing } from "@/i18n/routing";
import { getLocalizedHref } from "./navigationHref";

export function BrandLogo() {
  const { isHydrated, resolvedTheme } = useTheme();
  const currentLocaleValue = useLocale();
  const currentLocale = isAppLocale(currentLocaleValue)
    ? currentLocaleValue
    : routing.defaultLocale;
  const t = useTranslations("Navigation");

  return (
    <Link
      href={getLocalizedHref("/", currentLocale)}
      aria-label={`Anas Mokhlis - ${t("home")}`}
      data-theme-ready={isHydrated ? resolvedTheme : undefined}
      className={[
        "focus-ring relative inline-flex aspect-[3/2] w-14 shrink-0 items-center",
        "rounded-[var(--shape-radius-subtle)] md:w-[7.5rem]",
      ].join(" ")}
    >
      <Image
        src="/brand/logo black.png"
        alt=""
        fill
        sizes="(min-width: 768px) 92px, 86px"
        className={[
          "object-contain opacity-0",
          "[html[data-theme='light']_&]:opacity-100",
        ].join(" ")}
        priority
      />
      <Image
        src="/brand/logo white.png"
        alt=""
        fill
        sizes="(min-width: 768px) 92px, 86px"
        className={[
          "object-contain opacity-100",
          "[html[data-theme='light']_&]:opacity-0",
          "[html[data-theme='dark']_&]:opacity-100",
        ].join(" ")}
        priority
      />
    </Link>
  );
}
