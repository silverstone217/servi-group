import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://servi-group.vercel.app";

  const staticRoutes = [
    "",
    "/services",
    // "/a-propos",
    // "/documentation",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes];
}
