import type { Service } from "../types";
import { interiorCore } from "./interior-core";
import { interiorFinish } from "./interior-finish";
import { exteriorCore } from "./exterior-core";
import { restorationServices } from "./restoration";

/** Order = order in menus and grids (matches nav.services in site.ts). */
const order = [
  "impact-windows-doors",
  "bathroom-remodeling",
  "kitchen-remodeling",
  "storm-damage-rebuild",
  "whole-home-remodeling",
  "home-additions",
  "lanai-screen-enclosures",
  "exterior-remodeling",
  "roofing",
  "siding",
  "painting",
  "flooring",
  "outdoor-living",
  "home-restoration",
];

const all: Service[] = [...interiorCore, ...interiorFinish, ...exteriorCore, ...restorationServices];

export const services: Service[] = order
  .map((slug) => all.find((s) => s.slug === slug))
  .filter((s): s is Service => Boolean(s));

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceGroups: { key: Service["group"]; title: string; intro: string }[] = [
  {
    key: "interior",
    title: "Interior Remodeling",
    intro: "Kitchens, bathrooms, whole-home renovations and additions, built by our own crew under one contract.",
  },
  {
    key: "exterior",
    title: "Exterior & Hurricane Protection",
    intro: "Impact windows and doors, lanais, roofing, siding, stucco and paint that stand up to Gulf Coast weather.",
  },
  {
    key: "restoration",
    title: "Restoration & Rebuilds",
    intro: "Older Florida homes brought back to life, and storm or water damage rebuilt right, with permits and inspections.",
  },
];
