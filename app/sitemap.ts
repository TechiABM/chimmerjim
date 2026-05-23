import type { MetadataRoute } from "next";
import { metros, getAllMetroSlugs } from "@/lib/data/metros";
import { getAllServiceSlugs } from "@/lib/data/services";
import { getAllDcCitySlugs, dcServiceSlugs } from "@/lib/data/cities";

const BASE = "https://chimmerjim.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const urls: MetadataRoute.Sitemap = [];

  // Homepage
  urls.push({ url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 });

  // Washington hub
  urls.push({ url: `${BASE}/washington`, lastModified: now, changeFrequency: "weekly", priority: 0.9 });

  // Metro hubs
  for (const slug of getAllMetroSlugs()) {
    urls.push({ url: `${BASE}/${slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.9 });
  }

  // Core service pages
  for (const slug of getAllServiceSlugs()) {
    urls.push({ url: `${BASE}/services/${slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  }

  // Service + metro combos
  for (const metro of getAllMetroSlugs()) {
    for (const service of getAllServiceSlugs()) {
      urls.push({ url: `${BASE}/${metro}/${service}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
    }
  }

  // DC city pages
  for (const citySlug of getAllDcCitySlugs()) {
    urls.push({ url: `${BASE}/washington/${citySlug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
    for (const serviceSlug of dcServiceSlugs) {
      urls.push({ url: `${BASE}/washington/${serviceSlug}-${citySlug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
    }
  }

  return urls;
}
