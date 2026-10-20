import type { MetadataRoute } from "next";

const SITE = "https://queenspalmsi.org";

const routes = [
  { path: "", priority: 1.0 },
  { path: "/about", priority: 0.8 },
  { path: "/programs", priority: 0.8 },
  { path: "/programs/leadership-development", priority: 0.6 },
  { path: "/programs/entrepreneurship-training", priority: 0.6 },
  { path: "/programs/soft-skill-development", priority: 0.6 },
  { path: "/programs/mentorship", priority: 0.6 },
  { path: "/publications", priority: 0.7 },
  { path: "/publications/10-soft-skills-2025", priority: 0.6 },
  { path: "/publications/press", priority: 0.5 },
  { path: "/gallery", priority: 0.5 },
  { path: "/register", priority: 0.9 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${SITE}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
