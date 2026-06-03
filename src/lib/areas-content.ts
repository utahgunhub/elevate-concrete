export type AreaPageData = {
  slug: string;
  county: string;
  tag: string;
  title: string;
  highlight: string;
  intro: string;
  cities: string[];
  body: string[];
};

export const areasContent: Record<string, AreaPageData> = {
  "utah-county": {
    slug: "utah-county",
    county: "Utah County",
    tag: "Service Area — Utah County",
    title: "UTAH",
    highlight: "COUNTY",
    intro:
      "Concrete flatwork, tearout, and haul off for homeowners and contractors across Utah County — from the Point of the Mountain to Spanish Fork and the valley floor.",
    cities: [
      "Provo",
      "Orem",
      "Lehi",
      "American Fork",
      "Pleasant Grove",
      "Lindon",
      "Highland",
      "Alpine",
      "Spanish Fork",
      "Springville",
      "Mapleton",
      "Saratoga Springs",
      "Eagle Mountain",
      "Payson",
      "Santaquin",
    ],
    body: [
      "Utah County is one of our core service areas. Elevate Concrete completes driveways, patios, sidewalks, RV pads, decorative flatwork, and concrete tearout projects from busy suburban streets to growing mountain communities.",
      "We understand local access constraints — narrow driveways, sloped lots, and HOA neighborhoods — and plan pours and haul routes accordingly.",
      "Call for a site visit and estimate on your Utah County project.",
    ],
  },
  "salt-lake-county": {
    slug: "salt-lake-county",
    county: "Salt Lake County",
    tag: "Service Area — Salt Lake County",
    title: "SALT LAKE",
    highlight: "COUNTY",
    intro:
      "Residential and light commercial concrete across the Salt Lake Valley — driveways, walks, patios, tearout, and decorative finishes with reliable scheduling.",
    cities: [
      "Salt Lake City",
      "West Valley City",
      "Sandy",
      "Draper",
      "Murray",
      "Midvale",
      "South Jordan",
      "West Jordan",
      "Riverton",
      "Herriman",
      "Taylorsville",
      "Millcreek",
      "Cottonwood Heights",
      "Holladay",
    ],
    body: [
      "Salt Lake County projects range from full driveway replacements in established neighborhoods to new patio pours in infill lots. We handle tearout and haul off when old concrete has to go first.",
      "Our crews focus on flatwork quality — proper base, joints, and finishes that stand up to valley winters and heavy use.",
      "Contact us to discuss timing, access, and scope for your Salt Lake County address.",
    ],
  },
  "davis-county": {
    slug: "davis-county",
    county: "Davis County",
    tag: "Service Area — Davis County",
    title: "DAVIS",
    highlight: "COUNTY",
    intro:
      "Concrete services along the Wasatch Front in Davis County — from Bountiful and Farmington to Layton and Syracuse.",
    cities: [
      "Bountiful",
      "North Salt Lake",
      "Woods Cross",
      "Centerville",
      "Farmington",
      "Kaysville",
      "Layton",
      "Syracuse",
      "Clearfield",
      "Clinton",
      "West Point",
      "Fruit Heights",
    ],
    body: [
      "Davis County homeowners and small commercial clients choose Elevate Concrete for straightforward communication and flatwork done with care — not rushed pours.",
      "We pour new flatwork and remove old concrete when replacement is the right answer. Decorative and standard broom finishes are available depending on your project.",
      "Reach out to schedule an estimate in Davis County.",
    ],
  },
};
