export type ProjectCategory =
  | "Cinema"
  | "Rollers"
  | "Reels"
  | "Trucks"
  | "Events"
  | "Brand";

export type Project = {
  _id: string;
  slug: string;
  title: string;
  client?: string;
  year: number;
  category: ProjectCategory;
  cover: { url: string; alt: string };
  videoUrl?: string;
  description: string;
  tags: string[];
  featured?: boolean;
};

const PROJECTS: Project[] = [
  // ===== CINEMA — featured cuts get videos =====
  {
    _id: "p-01",
    slug: "amg-gt-cinematic",
    title: "AMG GT · Cinematic",
    year: 2025,
    category: "Cinema",
    cover: { url: "/posters/amg-gt-cinematic.jpg", alt: "Mercedes AMG GT in tunnel light" },
    videoUrl: "/videos/amg-gt-cinematic.mp4",
    description:
      "Headliner cut. Tunnel rollers, garage edit, color grade pulled to a single pump of warm key. The reel I open every pitch with.",
    tags: ["Cinema", "Rollers", "AMG", "Headliner"],
    featured: true,
  },
  {
    _id: "p-02",
    slug: "lambo-sto-christmas",
    title: "Lambo STO · Christmas",
    year: 2024,
    category: "Cinema",
    cover: { url: "/posters/lambo-sto-christmas.jpg", alt: "Lamborghini STO Christmas film" },
    videoUrl: "/videos/lambo-sto-christmas.mp4",
    description:
      "Holiday brand cut. Speedramps, ambient garage light, and a 600hp Italian on a chrome night. Shot in one evening before close.",
    tags: ["Cinema", "Speedramp", "Lamborghini"],
    featured: true,
  },
  {
    _id: "p-03",
    slug: "bmw-g30-wrap-reveal",
    title: "BMW G30 · Wrap Reveal",
    year: 2025,
    category: "Cinema",
    cover: { url: "/posters/bmw-g30-wrap-reveal.jpg", alt: "BMW G30 wrap reveal" },
    videoUrl: "/videos/bmw-g30-wrap-reveal.mp4",
    description:
      "Reveal film for a satin metallic G30 wrap. Booth lighting, slow drift around the car, peel-shot intercut. Pulled three follow-up bookings the week it dropped.",
    tags: ["Cinema", "Wrap", "Reveal", "BMW"],
    featured: true,
  },
  {
    _id: "p-04",
    slug: "bmw-f82-cinematic",
    title: "BMW F82 · Cinematic Rollers",
    year: 2025,
    category: "Cinema",
    cover: { url: "/posters/bmw-f82-cinematic.jpg", alt: "BMW F82 M4 cinematic rollers" },
    videoUrl: "/videos/bmw-f82-cinematic.mp4",
    description:
      "F82 rollers cut over a sundown highway. Locked tracking, twin-turbo I6 left raw on the audio bed. No music license needed.",
    tags: ["Cinema", "Rollers", "BMW M4"],
    featured: true,
  },
  {
    _id: "p-05",
    slug: "q50-night-cinematic",
    title: "Q50 · Night Cinematic",
    year: 2026,
    category: "Cinema",
    cover: { url: "/posters/q50-night-cinematic.jpg", alt: "Infiniti Q50 at night" },
    videoUrl: "/videos/q50-night-cinematic.mp4",
    description:
      "Single-night Q50 piece. Wet pavement reflections, headlight spill, custom intake hiss. Shot from a chase car with practical lighting only.",
    tags: ["Cinema", "Night", "Q50"],
    featured: true,
  },
  {
    _id: "p-06",
    slug: "american-muscle-duo",
    title: "American Muscle · Duo",
    year: 2026,
    category: "Cinema",
    cover: { url: "/posters/american-muscle-duo.jpg", alt: "American muscle car duo" },
    videoUrl: "/videos/american-muscle-duo.mp4",
    description:
      "Two-car duo cut. Mustang and Camaro on the same canyon road. Synced lead-and-chase, gimbal pans, V8 only on the audio.",
    tags: ["Cinema", "Muscle", "Duo"],
    featured: true,
  },
  { _id: "p-07", slug: "lambo-sto-vol-02", title: "Lambo STO · Vol 02", year: 2024, category: "Cinema", cover: { url: "/posters/lambo-sto-christmas.jpg", alt: "Lambo STO" }, description: "Second pass on the STO. New angles, no music — just exhaust and editing.", tags: ["Cinema", "Lamborghini"] },
  { _id: "p-08", slug: "supra-christmas", title: "Supra · Christmas", year: 2024, category: "Cinema", cover: { url: "/posters/lambo-sto-christmas.jpg", alt: "Supra Christmas" }, description: "Holiday Supra short. Snow flurries, garage warm-ups, twin-turbo whistle.", tags: ["Cinema", "Supra"] },

  // ===== ROLLERS & SPEEDRAMPS =====
  {
    _id: "p-09",
    slug: "amg-glc-rollers",
    title: "AMG GLC 63s · Rollers",
    year: 2024,
    category: "Rollers",
    cover: { url: "/posters/amg-glc-rollers.jpg", alt: "AMG GLC 63s rollers" },
    videoUrl: "/videos/amg-glc-rollers.mp4",
    description:
      "Featured roller piece. Tracking shots through a tree-tunnel road, ride-along door cam, 4.0L V8 on full song.",
    tags: ["Rollers", "AMG", "Featured"],
    featured: true,
  },
  {
    _id: "p-10",
    slug: "gt500-rollers",
    title: "GT500 · Rollers",
    year: 2024,
    category: "Rollers",
    cover: { url: "/posters/gt500-rollers.jpg", alt: "Shelby GT500 rollers" },
    videoUrl: "/videos/gt500-rollers.mp4",
    description: "Supercharged 5.2L on a daylight roller run. Long lens compression, slow-mo pulls.",
    tags: ["Rollers", "Shelby", "GT500"],
    featured: true,
  },
  {
    _id: "p-11",
    slug: "zl1-rollers",
    title: "ZL1 · Rollers",
    year: 2024,
    category: "Rollers",
    cover: { url: "/posters/zl1-rollers.jpg", alt: "Camaro ZL1 rollers" },
    videoUrl: "/videos/zl1-rollers.mp4",
    description: "ZL1 mid-day rollers piece. Simple, direct, all about the car.",
    tags: ["Rollers", "Camaro", "ZL1"],
    featured: true,
  },
  {
    _id: "p-12",
    slug: "widebody-brz-speedramp",
    title: "Widebody BRZ · Speedramp",
    year: 2025,
    category: "Rollers",
    cover: { url: "/posters/widebody-brz-speedramp.jpg", alt: "Widebody BRZ speedramp" },
    videoUrl: "/videos/widebody-brz-speedramp.mp4",
    description: "Speedramp cut on a fender-flared BRZ. Tight angles, ramped time, sharp grade.",
    tags: ["Rollers", "Speedramp", "BRZ"],
    featured: true,
  },
  { _id: "p-13", slug: "amg-glc-speedramp", title: "AMG GLC 63s · Speedramp", year: 2025, category: "Rollers", cover: { url: "/posters/amg-glc-rollers.jpg", alt: "AMG GLC speedramp" }, description: "Speedramp companion to the GLC rollers piece.", tags: ["Rollers", "Speedramp"] },
  { _id: "p-14", slug: "amg-wrap-speedramp", title: "AMG · Wrap Speedramp", year: 2026, category: "Rollers", cover: { url: "/posters/amg-glc-rollers.jpg", alt: "AMG wrap speedramp" }, description: "Wrap reveal speedramp.", tags: ["Rollers", "Wrap"] },
  { _id: "p-15", slug: "bmw-burn", title: "BMW · Burn", year: 2025, category: "Rollers", cover: { url: "/posters/bmw-f82-cinematic.jpg", alt: "BMW burnout" }, description: "Burn cut. Smoke, light, the M-badge.", tags: ["Rollers", "BMW"] },
  { _id: "p-16", slug: "m4-speed-ramp", title: "M4 · Speed Ramp", year: 2026, category: "Rollers", cover: { url: "/posters/bmw-f82-cinematic.jpg", alt: "M4 speed ramp" }, description: "Tight M4 speedramp.", tags: ["Rollers", "BMW M4"] },
  { _id: "p-17", slug: "truck-show-speedramp", title: "Truck Show · Speed Ramp", year: 2024, category: "Rollers", cover: { url: "/posters/gt500-rollers.jpg", alt: "Truck show speed ramp" }, description: "Truck show speedramp cut.", tags: ["Rollers", "Truck"] },
  { _id: "p-18", slug: "before-after-truck", title: "Before/After · Truck", year: 2026, category: "Rollers", cover: { url: "/posters/gt500-rollers.jpg", alt: "Before after truck" }, description: "Build progress reveal.", tags: ["Rollers", "Truck", "Reveal"] },

  // ===== REELS =====
  { _id: "p-19", slug: "car-reel-01", title: "Car Reel 01", year: 2026, category: "Reels", cover: { url: "/posters/zl1-rollers.jpg", alt: "Car reel 01" }, description: "Short-form car reel.", tags: ["Reels"] },
  { _id: "p-20", slug: "car-reel-02", title: "Car Reel 02", year: 2024, category: "Reels", cover: { url: "/posters/zl1-rollers.jpg", alt: "Car reel 02" }, description: "Short-form car reel.", tags: ["Reels"] },
  { _id: "p-21", slug: "car-reel-03", title: "Car Reel 03", year: 2026, category: "Reels", cover: { url: "/posters/zl1-rollers.jpg", alt: "Car reel 03" }, description: "Short-form car reel.", tags: ["Reels"] },
  { _id: "p-22", slug: "car-reel-04", title: "Car Reel 04", year: 2025, category: "Reels", cover: { url: "/posters/zl1-rollers.jpg", alt: "Car reel 04" }, description: "Short-form car reel.", tags: ["Reels"] },
  { _id: "p-23", slug: "car-reel-05", title: "Car Reel 05", year: 2024, category: "Reels", cover: { url: "/posters/zl1-rollers.jpg", alt: "Car reel 05" }, description: "Short-form car reel.", tags: ["Reels"] },
  { _id: "p-24", slug: "m4-reel", title: "M4 · Reel", year: 2026, category: "Reels", cover: { url: "/posters/bmw-f82-cinematic.jpg", alt: "M4 reel" }, description: "M4 short reel.", tags: ["Reels", "M4"] },
  { _id: "p-25", slug: "poppin-them-thangz", title: "Poppin Them Thangz", year: 2026, category: "Reels", cover: { url: "/posters/zl1-rollers.jpg", alt: "Poppin them thangz" }, description: "Reel.", tags: ["Reels"] },
  { _id: "p-26", slug: "porsche-fresno", title: "Porsche · Fresno", year: 2024, category: "Reels", cover: { url: "/posters/cars-and-coffee-fresno.jpg", alt: "Porsche Fresno" }, description: "Porsche reel.", tags: ["Reels", "Porsche"] },
  { _id: "p-27", slug: "mitsubishi-fresno", title: "Mitsubishi · Fresno", year: 2025, category: "Reels", cover: { url: "/posters/cars-and-coffee-fresno.jpg", alt: "Mitsubishi Fresno" }, description: "Mitsubishi reel.", tags: ["Reels"] },

  // ===== TRUCKS =====
  { _id: "p-28", slug: "truck-shop", title: "Truck · Shop", year: 2026, category: "Trucks", cover: { url: "/posters/gt500-rollers.jpg", alt: "Truck shop" }, description: "Truck shop cut.", tags: ["Trucks"] },
  { _id: "p-29", slug: "truck-white", title: "Truck · White", year: 2024, category: "Trucks", cover: { url: "/posters/gt500-rollers.jpg", alt: "White truck" }, description: "Truck cut.", tags: ["Trucks"] },
  { _id: "p-30", slug: "truck-vol-02", title: "Truck · Vol 02", year: 2024, category: "Trucks", cover: { url: "/posters/gt500-rollers.jpg", alt: "Truck vol 02" }, description: "Truck volume two.", tags: ["Trucks"] },
  { _id: "p-31", slug: "truck-vol-03", title: "Truck · Vol 03", year: 2024, category: "Trucks", cover: { url: "/posters/gt500-rollers.jpg", alt: "Truck vol 03" }, description: "Truck volume three.", tags: ["Trucks"] },
  { _id: "p-32", slug: "haiden-edward-5th-gen", title: "Haiden Edward · 5th Gen", year: 2024, category: "Trucks", cover: { url: "/posters/gt500-rollers.jpg", alt: "5th gen truck" }, description: "Personal truck build.", tags: ["Trucks"] },
  { _id: "p-33", slug: "hotshot-booth-truck", title: "HotShot · Booth Truck", year: 2024, category: "Trucks", cover: { url: "/posters/gt500-rollers.jpg", alt: "HotShot truck" }, description: "Brand truck cut.", tags: ["Trucks", "Brand"] },

  // ===== EVENTS =====
  {
    _id: "p-34",
    slug: "cars-and-coffee-fresno",
    title: "Cars and Coffee · Fresno",
    year: 2025,
    category: "Events",
    cover: { url: "/posters/cars-and-coffee-fresno.jpg", alt: "Cars and Coffee Fresno" },
    videoUrl: "/videos/cars-and-coffee-fresno.mp4",
    description: "Recap from Cars and Coffee Fresno. Mostly handheld, mostly available light, all 35mm.",
    tags: ["Events", "Recap"],
    featured: true,
  },
  {
    _id: "p-35",
    slug: "rolling-fender",
    title: "Custom Works × Rolling Fender",
    year: 2025,
    category: "Events",
    cover: { url: "/posters/rolling-fender.jpg", alt: "Rolling Fender meet" },
    videoUrl: "/videos/rolling-fender.mp4",
    description: "Joint meet recap. Two shops, one parking lot, every kind of engine.",
    tags: ["Events", "Meet"],
    featured: true,
  },
  { _id: "p-36", slug: "porsche-fort-meet", title: "Porsche · Fort Meet", year: 2024, category: "Events", cover: { url: "/posters/cars-and-coffee-fresno.jpg", alt: "Porsche fort meet" }, description: "Porsche fort meet recap.", tags: ["Events", "Porsche"] },

  // ===== BRAND & COMMERCIAL =====
  { _id: "p-37", slug: "red-chickz-ad", title: "The Red Chickz · Ad", year: 2025, category: "Brand", cover: { url: "/posters/cars-and-coffee-fresno.jpg", alt: "Red Chickz ad" }, description: "30s spot for The Red Chickz.", tags: ["Brand", "Ad"] },
  { _id: "p-38", slug: "food-vol-01", title: "Food · Vol 01", year: 2026, category: "Brand", cover: { url: "/posters/cars-and-coffee-fresno.jpg", alt: "Food vol 01" }, description: "Food brand reel.", tags: ["Brand", "Food"] },
  { _id: "p-39", slug: "food-vol-02", title: "Food · Vol 02", year: 2024, category: "Brand", cover: { url: "/posters/cars-and-coffee-fresno.jpg", alt: "Food vol 02" }, description: "Food brand reel.", tags: ["Brand", "Food"] },
  { _id: "p-40", slug: "tnf-preworkout", title: "TNF · Pre-Workout", year: 2025, category: "Brand", cover: { url: "/posters/cars-and-coffee-fresno.jpg", alt: "TNF preworkout" }, description: "Sports nutrition spot.", tags: ["Brand", "Fitness"] },
  { _id: "p-41", slug: "steph-gym", title: "Steph · Gym", year: 2024, category: "Brand", cover: { url: "/posters/cars-and-coffee-fresno.jpg", alt: "Steph gym" }, description: "Athlete piece.", tags: ["Brand", "Fitness"] },
  { _id: "p-42", slug: "real-estate-agent", title: "Real Estate · Agent", year: 2026, category: "Brand", cover: { url: "/posters/cars-and-coffee-fresno.jpg", alt: "Real estate agent" }, description: "Agent brand video.", tags: ["Brand", "Real Estate"] },
  { _id: "p-43", slug: "real-estate-edit-01", title: "Real Estate · Edit 01", year: 2025, category: "Brand", cover: { url: "/posters/cars-and-coffee-fresno.jpg", alt: "Real estate edit 01" }, description: "Property cut.", tags: ["Brand", "Real Estate"] },
  { _id: "p-44", slug: "real-estate-edit-02", title: "Real Estate · Edit 02", year: 2025, category: "Brand", cover: { url: "/posters/cars-and-coffee-fresno.jpg", alt: "Real estate edit 02" }, description: "Property cut.", tags: ["Brand", "Real Estate"] },
  { _id: "p-45", slug: "real-estate-reel-01", title: "Real Estate · Reel 01", year: 2025, category: "Brand", cover: { url: "/posters/cars-and-coffee-fresno.jpg", alt: "Real estate reel 01" }, description: "Property reel.", tags: ["Brand", "Real Estate"] },
  { _id: "p-46", slug: "gls-tint", title: "GLS · Tint", year: 2026, category: "Brand", cover: { url: "/posters/amg-glc-rollers.jpg", alt: "GLS tint" }, description: "Tint shop content piece.", tags: ["Brand", "Tint"] },
  { _id: "p-47", slug: "construction-reel-01", title: "Construction · Reel 01", year: 2025, category: "Brand", cover: { url: "/posters/gt500-rollers.jpg", alt: "Construction reel" }, description: "Construction crew brand cut.", tags: ["Brand"] },
];

export async function getProjects(): Promise<Project[]> {
  return PROJECTS;
}

export async function getFeatured(): Promise<Project[]> {
  return PROJECTS.filter((p) => p.featured);
}

export async function getProject(slug: string): Promise<Project | null> {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}

export const CATEGORY_ORDER: ProjectCategory[] = [
  "Cinema",
  "Rollers",
  "Reels",
  "Trucks",
  "Events",
  "Brand",
];
