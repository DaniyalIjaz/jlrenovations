// Single source of truth for all site copy + structured data.
// Keep this file plain JS so it tree-shakes cleanly.

export const company = {
  name: "JL Renovations LLC",
  shortName: "JL Renovations",
  tagline: "Renovate Your Legacy",
  subTagline: "Architects of Your Dream Space",
  established: "35+ Years of Experience",
  ownership: "Family-Owned & Operated",
  baseCity: "Linden, NJ",
  address: "529 E Blancke St, Linden, NJ 07036",
  /** Dropped pin from Google Maps (same location as embed). */
  googleMapsPlaceUrl:
    "https://www.google.com/maps/place/40%C2%B038'11.6%22N+74%C2%B015'04.9%22W/@40.6365662,-74.2539482,17z/data=!3m1!4b1!4m4!3m3!8m2!3d40.6365662!4d-74.2513733?hl=en&entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
  /** iframe `src` — lat/lng match `googleMapsPlaceUrl` pin. */
  googleMapsEmbedSrc:
    "https://www.google.com/maps?q=40.6365662,-74.2513733&z=17&hl=en&output=embed",
  phones: [
    { label: "Office", value: "(201) 890-9697", tel: "+12018909697" },
    { label: "Mobile", value: "(908) 956-1577", tel: "+19089561577" },
  ],
  email: "jlrenovations689@gmail.com",
  whatsappNumber: "19089561577", // wa.me digits
  whatsappMessage:
    "Hi JL Renovations, I'd like to get a quote for a project.",
  instagramUrl:
    "https://www.instagram.com/llcrenovationsjl?igsh=MXd5a2prNThveHBwbQ==",
  instagramHandle: "@llcrenovationsjl",
  facebookUrl:
    "https://www.facebook.com/share/18d7QTwV55/?mibextid=wwXIfr",
  facebookHandle: "JL Renovations LLC",
  tiktokUrl: "https://www.tiktok.com/@jlrenovationsllc?_r=1&_t=ZT-96FR1vA4a1V",
  tiktokHandle: "@jlrenovationsllc",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Our Work" },
  { id: "team", label: "Team" },
  { id: "areas", label: "Areas We Serve" },
];

export const heroSlides = [
  {
    headline: "Renovate Your Legacy",
    subheadline: "Where Craftsmanship Meets Timeless Design",
    description:
      "JL Renovations brings Old World attention to detail to every project — from bespoke decks and fine carpentry to full home transformations built to last generations.",
  },
  {
    headline: "Renovate Your Legacy",
    subheadline: "Kitchens, Baths & Living Spaces",
    description:
      "Family-owned in Linden, NJ. Over 35 years turning houses into homes with expert craftsmanship and a personal touch.",
  },
  {
    headline: "Renovate Your Legacy",
    subheadline: "Built to Last. Designed to Impress.",
    description:
      "Honest pricing, premium materials, and meticulous execution — your home's next chapter starts here.",
  },
];

export const services = [
  {
    id: "kitchen",
    title: "Kitchen Remodeling",
    short:
      "Custom kitchens built for daily life smart layouts, clean finishes, and craftsmanship that holds up for years.",
    items: [
      "Kitchen Remodeling",
      "Basement Finishing",
      "Room Additions",
      "Flooring Installation",
      "Drywall & Plastering",
      "Tile Work",
      "Structural Repairs",
      "Interior & Exterior Updates",
      "Custom Carpentry & Trim Work",
    ],
  },
  {
    id: "bathroom",
    title: "Bathroom Remodeling",
    short:
      "From refresh to full renovation tile, fixtures, and finishes installed with precision and lasting durability.",
    items: [
      "Bathroom Renovation",
      "Tile Work",
      "Flooring Installation",
      "Drywall & Plastering",
      "Structural Repairs",
      "Interior & Exterior Updates",
      "Custom Carpentry & Trim Work",
    ],
  },
  {
    id: "painting",
    title: "Painting",
    short:
      "Flawless finishes that protect and beautify your home premium paints, expert prep, and lasting results.",
    items: [
      "Interior Painting Walls, Ceilings & Trim",
      "Exterior Painting & Weatherproofing",
      "Deck & Fence Staining",
      "Cabinet Painting & Refinishing",
      "Epoxy Floor Coatings",
      "Specialty Finishes & Textures",
      "Color Consultation",
      "Surface Preparation & Priming",
      "Wallpaper Removal",
    ],
  },
];

export const differentiators = [
  {
    title: "Customer Service",
    body: "From the moment you reach out, you are treated like family. Whether the project is large or small, we make every effort to meet or exceed your expectations.",
  },
  {
    title: "Quality",
    body: "We never cut corners. Quality is the result of careful planning and skilled execution. Every detail matters on every project.",
  },
  {
    title: "Communication",
    body: "We keep you informed every step of the way. Our team is accessible and responsive — clear, honest communication is at the heart of what we do.",
  },
  {
    title: "Timeliness",
    body: "We respect your schedule and work diligently to meet deadlines without compromising the quality of our work.",
  },
];

export const mission = [
  {
    title: "Skilled Craftsmanship",
    body: "Deliver high-quality renovation services through skilled craftsmanship, honest work, and personal attention on every project.",
  },
  {
    title: "Lasting Relationships",
    body: "Build lasting relationships with clients based on trust, transparency, and exceptional results that stand the test of time.",
  },
  {
    title: "Family Heritage",
    body: "Grow as a family business while staying true to our core values — integrity, dedication, and pride in every job we complete.",
  },
];

export const values = [
  {
    letter: "Q",
    title: "Quality",
    body: "We never cut corners. Every detail matters. Our craftsmanship is our signature, and we deliver results that last.",
  },
  {
    letter: "I",
    title: "Integrity",
    body: "Honest pricing, honest work, always. Full transparency with our clients — no hidden costs, no surprises.",
  },
  {
    letter: "F",
    title: "Family",
    body: "We treat your home like it were our own. As a family-owned business, we understand the trust you place in us.",
  },
  {
    letter: "T",
    title: "Timeliness",
    body: "We respect your time and meet our deadlines. Every project is planned to minimize disruption to your daily life.",
  },
  {
    letter: "C",
    title: "Communication",
    body: "We keep you informed every step of the way, ensuring you are confident in the progress of your project.",
  },
];

export const team = [
  {
    name: "Julián Blandón López",
    role: "Owner & General Contractor",
    bio: "35+ years of hands-on construction and renovation experience. Julián leads every project with expertise, dedication, and an unwavering commitment to quality.",
  },
  {
    name: "Maria Camila Angel",
    role: "Business Operations Manager",
    bio: "Handles client relations, project coordination, scheduling, estimations, accounting, and payroll. Maria ensures every project runs smoothly from start to finish.",
  },
];

export const ceoMessage = {
  name: "Julián Blandón López",
  role: "Owner & General Contractor",
  message:
    "When you welcome us into your home, you're trusting us with more than walls and floors, you're trusting us with your family's story. After 35+ years in this trade, I still believe the difference between good work and great work is care. We sweat the small details, communicate honestly, and treat every project like it's our own home. Thank you for letting us help write the next chapter of yours.",
  signature: "— Julián",
};

export const serviceAreas = [
  "Berkeley Heights",
  "Branchburg",
  "Chatham",
  "Cranford",
  "Dunellen",
  "East Hanover",
  "Edison",
  "Elizabeth",
  "Florham Park",
  "Gillette",
  "Linden",
  "Livingston",
  "Madison",
  "Maplewood",
  "Millburn",
  "Morris Plains",
  "Morristown",
  "Mountainside",
  "New Providence",
  "Newark",
  "North Bergen",
  "Piscataway",
  "Roselle Park",
  "Scotch Plains",
  "Short Hills",
  "South Plainfield",
  "Springfield",
  "Summit",
  "Warren",
  "Watchung",
  "Weehawken",
  "West Orange",
  "Westfield",
];
