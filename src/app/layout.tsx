import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeScript } from "@/components/theme/ThemeScript";
import { getAbsoluteUrl, siteUrl } from "@/config/site/siteUrl";
import "./globals.css";

const siteName = "Anas Mokhlis";
const siteTitle = "Anas Mokhlis - Front-End Developer";
const siteDescription =
  "Front-End Developer specialized in React, Next.js and TypeScript, focused on scalable frontend architecture, performance, accessibility and modern web experiences.";
const linkedInUrl = "https://www.linkedin.com/in/anas-mokhlis";
const email = "anas.mokhlis.me@gmail.com";
const futureOgImagePath = "/og/anas-mokhlis-portfolio.png";
const hasOgImage = existsSync(
  join(process.cwd(), "public", "og", "anas-mokhlis-portfolio.png"),
);
const socialImages = hasOgImage
  ? [
      {
        url: getAbsoluteUrl(futureOgImagePath),
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ]
  : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Anas Mokhlis",
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
    "frontend architecture",
    "accessibility",
    "performance",
  ],
  authors: [{ name: siteName, url: linkedInUrl }],
  creator: siteName,
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: getAbsoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    url: getAbsoluteUrl("/"),
    siteName,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    images: socialImages,
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: socialImages?.map((image) => image.url),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    jobTitle: "Front-End Developer",
    description: siteDescription,
    email: `mailto:${email}`,
    url: siteUrl,
    sameAs: [linkedInUrl],
    knowsAbout: ["React", "Next.js", "TypeScript"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteTitle,
    description: siteDescription,
    url: siteUrl,
    author: {
      "@type": "Person",
      name: siteName,
    },
  },
];

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
