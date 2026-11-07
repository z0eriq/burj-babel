import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: company.siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${company.siteUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${company.siteUrl}/products`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${company.siteUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
