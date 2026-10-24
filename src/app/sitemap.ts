import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { posts } from "@/content/blog";
import { areas } from "@/content/areas";
import { cityServices } from "@/content/city-services";
import { absoluteUrl } from "@/lib/seo";

type SitemapEntry = MetadataRoute.Sitemap[number];
type ChangeFrequency = NonNullable<SitemapEntry["changeFrequency"]>;

type StaticRoute = {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
};

const staticRoutes: StaticRoute[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/free-estimate", priority: 0.9, changeFrequency: "yearly" },
  { path: "/projects", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/service-areas", priority: 0.7, changeFrequency: "monthly" },
  { path: "/reviews", priority: 0.7, changeFrequency: "weekly" },
  { path: "/resources", priority: 0.7, changeFrequency: "weekly" },
  { path: "/estimate-builder", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about/team", priority: 0.5, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.5, changeFrequency: "monthly" },
  { path: "/referral", priority: 0.5, changeFrequency: "yearly" },
  { path: "/process", priority: 0.6, changeFrequency: "monthly" },
  { path: "/financing", priority: 0.6, changeFrequency: "monthly" },
  { path: "/warranty", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
  // /review (post-job "leave us a review" page) is intentionally excluded.
];

/** Parse "2026-10-20" or "2026-03"; fall back to `fallback` if unparseable. */
function toDate(value: string, fallback: Date): Date {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? fallback : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statics: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified: toDate(project.date, now),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/resources/${post.slug}`),
    lastModified: toDate(post.date, now),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const areaEntries: MetadataRoute.Sitemap = areas.map((area) => ({
    url: absoluteUrl(`/service-areas/${area.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const cityServiceEntries: MetadataRoute.Sitemap = cityServices.map((c) => ({
    url: absoluteUrl(`/service-areas/${c.area}/${c.service}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...statics, ...serviceEntries, ...projectEntries, ...postEntries, ...areaEntries, ...cityServiceEntries];
}
