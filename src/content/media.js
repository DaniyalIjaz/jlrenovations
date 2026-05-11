// Image manifest powered by Vite's import.meta.glob.
// All images live in src/assets/images/<Category>/* and are bundled with hashed names.

import heroCarousel1 from "../assets/images/HeroCarousel/1.jpg";
import heroCarousel2 from "../assets/images/HeroCarousel/2.jpg";
import heroCarousel3 from "../assets/images/HeroCarousel/3.jpg";
import heroCarousel4 from "../assets/images/HeroCarousel/4.jpg";

const modules = import.meta.glob("../assets/images/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

// Build { Category: [url, ...] } from the file paths.
const buckets = {};
for (const path in modules) {
  // path like ../assets/images/Bathroom_Remodel/IMG_2002.jpeg
  const segments = path.split("/");
  const category = segments[segments.length - 2];
  if (!buckets[category]) buckets[category] = [];
  buckets[category].push(modules[path]);
}

const prettify = (key) =>
  key
    .replace(/_/g, " ")
    .replace(/\bAnd\b/gi, "&")
    .replace(/Before After/i, "Before & After")
    .trim();

// Curated category order (most striking categories first).
const preferredOrder = [
  "Kitchen_Remodel",
  "Bathroom_Remodel",
  "Fireplace_Entertainment_Wall",
  "Basement_Renovation",
  "Deck",
  "Screened_Porch_Renovation",
  "Kitchen_Cabinet_Upgrade",
  "Backsplash",
  "Wall_Molding_Paneling",
  "Custom_Shelves",
  "Shelves",
  "Commercial_Built-in_Cabinets",
  "Doors",
  "Laminate_Flooring",
  "Exterior_Bay_Window_Trim",
  "Exterior_Paint",
  "Radiator_Cover",
];

// Keep internal-only folders out of the public "Our Work" filter UI.
const EXCLUDE_FROM_GALLERY = new Set(["Julian", "Team", "HeroCarousel"]);

const orderedKeys = [
  ...preferredOrder.filter((k) => buckets[k]),
  ...Object.keys(buckets).filter(
    (k) => !preferredOrder.includes(k) && !EXCLUDE_FROM_GALLERY.has(k)
  ),
];

export const galleryCategories = orderedKeys.map((key) => ({
  id: key,
  label: prettify(key),
  images: buckets[key] || [],
}));

// Flat list (used as a fallback / "All" tab).
export const allGalleryImages = galleryCategories.flatMap((c) =>
  c.images.map((src) => ({ src, category: c.label }))
);

const pick = (cat, idx = 0) => {
  const list = buckets[cat];
  return list && list[idx] ? list[idx] : null;
};

// Hero carousel: fixed order (1–4) from `src/assets/images/HeroCarousel/`.
export const heroImages = [
  heroCarousel1,
  heroCarousel2,
  heroCarousel3,
  heroCarousel4,
];

// Service cards imagery (used in Services section).
export const serviceImages = {
  kitchen: pick("Kitchen_Remodel", 0) || pick("Kitchen_Cabinet_Upgrade", 0),
  bathroom: pick("Bathroom_Remodel", 0),
  painting: pick("Exterior_Paint", 0) || pick("Exterior_Bay_Window_Trim", 1),
};

// CEO portrait
export const julianImage =
  (buckets["Julian"] && buckets["Julian"][0]) || null;
