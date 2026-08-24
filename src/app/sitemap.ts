import type { MetadataRoute } from "next";
import { getAbsoluteUrl } from "@/config/site/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getAbsoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
