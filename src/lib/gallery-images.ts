import type { ServicePageData } from "@/lib/services-content";

const imageModules = import.meta.glob<string>("../assets/gallery-images/*", {
  eager: true,
  import: "default",
});

export type GalleryImage = {
  src: string;
  filename: string;
  alt: string;
};

export type ServiceSlug = ServicePageData["slug"];

/** Avoid as default hero — still appears in flatwork gallery, sorted last. */
const DEPRIORITIZED_HERO_FILES = new Set(["concrete-pouring.jpg"]);

/** Demolition / teardown shots — filenames do not hint at tearout. */
const TEAROUT_FILENAMES = new Set(["img_2849.jpg", "img_2859.jpg"]);

const SERVICE_SLUGS: ServiceSlug[] = [
  "concrete-tearout",
  "flatwork",
  "driveways",
  "patios",
  "rv-pads",
  "walkways",
  "sidewalks",
  "decorative-concrete",
  "small-footings-foundations",
];

function filenameFromPath(path: string): string {
  return path.split("/").pop() ?? path;
}

function normalizeBase(filename: string): string {
  return filename.replace(/\.[^.]+$/, "").toLowerCase();
}

/** Assign gallery files to a service slug when the filename clearly matches. */
export function matchServiceSlug(filename: string): ServiceSlug | null {
  const base = normalizeBase(filename);

  if (TEAROUT_FILENAMES.has(filename.toLowerCase())) {
    return "concrete-tearout";
  }
  if (
    base.includes("concrete-tearout") ||
    base.includes("concrete-hauloff") ||
    base.includes("teardown") ||
    base.includes("tear-out") ||
    base.includes("tearout") ||
    base.includes("hauloff") ||
    base.includes("haul-off")
  ) {
    return "concrete-tearout";
  }
  if (base.includes("decorative")) {
    return "decorative-concrete";
  }
  if (
    base.includes("small-footing") ||
    base.includes("small-foundation") ||
    base.includes("smallfooting") ||
    base === "foundation"
  ) {
    return "small-footings-foundations";
  }
  if (base.includes("driveway") || base.includes("drive-way")) {
    return "driveways";
  }
  if (base.includes("rv-pad")) {
    return "rv-pads";
  }
  if (base.includes("sidewalk")) {
    return "sidewalks";
  }
  if (base.includes("walkway")) {
    return "walkways";
  }
  if (base.includes("patio")) {
    return "patios";
  }
  if (base.includes("flatwork") || base.includes("concrete-pouring")) {
    return "flatwork";
  }

  return null;
}

const SERVICE_LABELS: Record<ServiceSlug, string> = {
  "concrete-tearout": "concrete tearout and haul off",
  flatwork: "concrete flatwork",
  driveways: "concrete driveway",
  patios: "concrete patio",
  "rv-pads": "concrete RV pad",
  walkways: "concrete walkway",
  sidewalks: "concrete sidewalk",
  "decorative-concrete": "decorative concrete",
  "small-footings-foundations": "concrete footing and foundation",
};

function altFromFilename(filename: string, slug: ServiceSlug | null): string {
  const label = slug ? SERVICE_LABELS[slug] : "concrete project";
  const base = normalizeBase(filename).replace(/[-_]+/g, " ");
  return `Elevate Concrete ${label} — ${base}`;
}

const allImages: GalleryImage[] = Object.entries(imageModules)
  .map(([path, src]) => {
    const filename = filenameFromPath(path);
    const slug = matchServiceSlug(filename);
    return { src, filename, alt: altFromFilename(filename, slug) };
  })
  .sort((a, b) => a.filename.localeCompare(b.filename));

const emptyServiceMap = (): Record<ServiceSlug, GalleryImage[]> =>
  Object.fromEntries(SERVICE_SLUGS.map((slug) => [slug, []])) as Record<
    ServiceSlug,
    GalleryImage[]
  >;

function sortForDisplay(images: GalleryImage[]): GalleryImage[] {
  return [...images].sort((a, b) => {
    const aLast = DEPRIORITIZED_HERO_FILES.has(a.filename.toLowerCase()) ? 1 : 0;
    const bLast = DEPRIORITIZED_HERO_FILES.has(b.filename.toLowerCase()) ? 1 : 0;
    if (aLast !== bLast) return aLast - bLast;
    return a.filename.localeCompare(b.filename);
  });
}

const serviceMap = allImages.reduce((acc, image) => {
  const slug = matchServiceSlug(image.filename);
  if (slug) acc[slug].push(image);
  return acc;
}, emptyServiceMap());

for (const slug of SERVICE_SLUGS) {
  serviceMap[slug] = sortForDisplay(serviceMap[slug]);
}

/** Images whose filenames match a service slug. */
export const imagesByService: Record<ServiceSlug, GalleryImage[]> = serviceMap;

/** All other project photos for the site-wide gallery and accents. */
export const generalGalleryImages: GalleryImage[] = allImages.filter(
  (image) => !matchServiceSlug(image.filename),
);

export const allGalleryImages: GalleryImage[] = allImages;

export function getServiceImages(slug: ServiceSlug): GalleryImage[] {
  return imagesByService[slug] ?? [];
}

export function getServiceHeroImage(slug: ServiceSlug): GalleryImage | undefined {
  const images = getServiceImages(slug);
  return (
    images.find((img) => !DEPRIORITIZED_HERO_FILES.has(img.filename.toLowerCase())) ??
    images[0]
  );
}

const MARKETING_HERO_SLUGS: ServiceSlug[] = [
  "driveways",
  "decorative-concrete",
  "patios",
  "concrete-tearout",
  "sidewalks",
];

/** Site-wide page heroes (home, services index) — never default to flatwork pouring shot. */
export function getMarketingHeroImage(index = 0): GalleryImage | undefined {
  const slug = MARKETING_HERO_SLUGS[index % MARKETING_HERO_SLUGS.length];
  return getServiceHeroImage(slug);
}

/** Pick accent images for marketing sections (general project photos, diverse service heroes). */
export function getAccentImages(count: number): GalleryImage[] {
  const pool = generalGalleryImages.filter(
    (img) => !DEPRIORITIZED_HERO_FILES.has(img.filename.toLowerCase()),
  );
  const seen = new Set(pool.map((p) => p.src));

  for (const slug of MARKETING_HERO_SLUGS) {
    if (pool.length >= count) break;
    const hero = getServiceHeroImage(slug);
    if (hero && !seen.has(hero.src)) {
      pool.push(hero);
      seen.add(hero.src);
    }
  }

  for (const slug of SERVICE_SLUGS) {
    if (pool.length >= count) break;
    const hero = getServiceHeroImage(slug);
    if (hero && !seen.has(hero.src)) {
      pool.push(hero);
      seen.add(hero.src);
    }
  }

  return pool.slice(0, count);
}
