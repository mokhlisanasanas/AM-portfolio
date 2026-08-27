"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/theme/useTheme";

export function BrandLogo() {
  const { isHydrated, resolvedTheme } = useTheme();

  return (
    <Link
      href="/"
      aria-label="Anas Mokhlis — Home"
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
