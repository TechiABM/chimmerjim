import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/ads/"], // ads landers — not for organic indexing
      },
    ],
    sitemap: "https://chimmerjim.com/sitemap.xml",
  };
}
