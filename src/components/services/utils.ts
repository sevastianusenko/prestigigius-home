import type { Service } from "@/content/types";

/** Short noun used in pattern headings ("Which Kitchen Project Fits Your Home?"). */
const short: Record<string, string> = {
  "whole-home-remodeling": "Whole-Home",
  "kitchen-remodeling": "Kitchen",
  "bathroom-remodeling": "Bathroom",
  "home-additions": "Addition",
  "impact-windows-doors": "Window & Door",
  "lanai-screen-enclosures": "Lanai",
  "exterior-remodeling": "Exterior",
  roofing: "Roofing",
  siding: "Siding",
  painting: "Painting",
  flooring: "Flooring",
  "outdoor-living": "Outdoor Living",
  "home-restoration": "Restoration",
  "storm-damage-rebuild": "Storm Rebuild",
};

export function shortName(s: Service): string {
  return short[s.slug] ?? s.navLabel;
}
