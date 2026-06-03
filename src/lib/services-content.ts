export type ServicePageData = {
  slug: string;
  tag: string;
  title: string;
  highlight: string;
  intro: string;
  sectionTitle: string;
  sectionSubtitle: string;
  features: { code: string; title: string; body: string }[];
  body: string[];
  listTitle: string;
  listItems: string[];
};

export const servicesContent: Record<string, ServicePageData> = {
  "concrete-tearout": {
    slug: "concrete-tearout",
    tag: "Concrete Tearout — Utah",
    title: "CONCRETE",
    highlight: "TEAROUT & HAUL OFF",
    intro:
      "Remove old, cracked, or unwanted concrete the right way. We break out existing flatwork, load debris, and haul it off so your site is clean and ready for new pours.",
    sectionTitle: "Why professional tearout?",
    sectionSubtitle: "// PREP THE SITE FOR A LASTING NEW FINISH",
    features: [
      {
        code: "T.01",
        title: "Complete Removal",
        body: "Driveways, patios, sidewalks, RV pads, and slabs — we remove the old concrete and clear the area for your next project.",
      },
      {
        code: "T.02",
        title: "Haul Off Included",
        body: "Debris is loaded and hauled away. No piles left on your property — we leave a workable, broom-clean subgrade.",
      },
      {
        code: "T.03",
        title: "Replace-Ready",
        body: "Tearout pairs naturally with new flatwork. One crew, one timeline — demo today, form and pour when you are ready.",
      },
      {
        code: "T.04",
        title: "Residential & Commercial",
        body: "Homeowners, landlords, builders, and property managers across Utah County, Salt Lake County, and Davis County.",
      },
    ],
    body: [
      "Failed or settled concrete is more than an eyesore — it traps water, trips pedestrians, and makes new work harder if the old slab is not fully removed. Elevate Concrete specializes in concrete tearout and haul off so you start fresh with proper depth and drainage.",
      "We use the right equipment for the job size, protect adjacent landscaping and structures where possible, and coordinate disposal so you are not stuck with a dumpster on your driveway for weeks.",
      "Whether you are replacing a single sidewalk section or stripping an entire driveway before a new pour, we deliver a clear site and honest communication from estimate to final sweep.",
    ],
    listTitle: "// We remove",
    listItems: [
      "Old driveways",
      "Patios & landings",
      "Sidewalks & walkways",
      "RV pads & slabs",
      "Curbs & small walls",
      "Commercial flatwork",
    ],
  },
  flatwork: {
    slug: "flatwork",
    tag: "Concrete Flatwork — Utah",
    title: "CONCRETE",
    highlight: "FLATWORK",
    intro:
      "Horizontal concrete done right — proper base, reinforcement where needed, expert placement, and finishes built for Utah freeze-thaw cycles.",
    sectionTitle: "Flatwork done right",
    sectionSubtitle: "// FROM GRADE TO FINAL FINISH",
    features: [
      {
        code: "F.01",
        title: "Experienced Crews",
        body: "Skilled finishers who understand timing, edges, and control joints — not just a pour and a hope.",
      },
      {
        code: "F.02",
        title: "Precise Finishing",
        body: "Broom, smooth, or decorative-ready surfaces with consistent pitch for drainage.",
      },
      {
        code: "F.03",
        title: "Timely & Reliable",
        body: "We show up when scheduled and communicate if weather or cure times shift the plan.",
      },
      {
        code: "F.04",
        title: "Residential & Commercial",
        body: "Single-family upgrades, multi-unit walks, retail pads, and light commercial slabs.",
      },
    ],
    body: [
      "Flatwork is the foundation of curb appeal and daily use — driveways you park on, patios you live on, walks your family uses every day. Elevate Concrete focuses on durable flatwork with attention to subgrade, compaction, and finish quality.",
      "Every project starts with a clear scope: thickness, reinforcement, joint layout, and finish type. We align with your plans or help you define a practical spec for Utah soil and weather.",
      "From tearout through final seal (when specified), we aim for surfaces that look sharp on day one and hold up for years.",
    ],
    listTitle: "// Flatwork includes",
    listItems: [
      "Driveways",
      "Patios",
      "Sidewalks & walkways",
      "RV pads",
      "Garage & shop slabs",
      "Decorative flatwork",
    ],
  },
  driveways: {
    slug: "driveways",
    tag: "Concrete Driveways — Utah",
    title: "CONCRETE",
    highlight: "DRIVEWAYS",
    intro:
      "New driveways and full replacements built for daily traffic, Utah winters, and clean lines that boost curb appeal.",
    sectionTitle: "Built for daily use",
    sectionSubtitle: "// STRENGTH, DRAINAGE, AND CURB APPEAL",
    features: [
      {
        code: "D.01",
        title: "Proper Base Work",
        body: "Compaction and base prep matter as much as the pour — we do not skip what holds the slab up.",
      },
      {
        code: "D.02",
        title: "Thickness & Joints",
        body: "Control joints placed to limit random cracking; thickness matched to vehicles and use.",
      },
      {
        code: "D.03",
        title: "Tearout Available",
        body: "Remove and haul old concrete, then pour new — one team for the full transformation.",
      },
      {
        code: "D.04",
        title: "Finish Options",
        body: "Standard broom finish, smooth, or decorative accents at borders and entries.",
      },
    ],
    body: [
      "Your driveway is the first hardscape guests see and the surface your vehicles use every day. We pour driveways with correct slope away from structures, durable edges, and finishes that balance traction and appearance.",
      "Replacing a cracked, heaved, or stained driveway? Our tearout and haul off service clears the way for a full replacement without you juggling multiple contractors.",
      "Serving homeowners and property managers across Utah County, Salt Lake County, and Davis County.",
    ],
    listTitle: "// Driveway projects",
    listItems: [
      "New construction drives",
      "Full replacements",
      "Wider pads & turnarounds",
      "Approach & apron work",
      "Border & accent bands",
      "Tearout & haul off",
    ],
  },
  patios: {
    slug: "patios",
    tag: "Concrete Patios — Utah",
    title: "CONCRETE",
    highlight: "PATIOS",
    intro:
      "Backyard patios and outdoor living slabs with comfortable scale, good drainage, and finishes ready for furniture, grills, and Utah evenings.",
    sectionTitle: "Outdoor living underfoot",
    sectionSubtitle: "// COMFORT, DRAINAGE, AND STYLE",
    features: [
      {
        code: "P.01",
        title: "Custom Layouts",
        body: "Rectangles, curves, and multi-level pads shaped to your yard and home.",
      },
      {
        code: "P.02",
        title: "Drainage Planned",
        body: "Pitch and edges managed so water moves away from the house and low spots.",
      },
      {
        code: "P.03",
        title: "Decorative Ready",
        body: "Pair with stamped, stained, or bordered decorative work for a premium look.",
      },
      {
        code: "P.04",
        title: "Tearout & Replace",
        body: "Remove settled or ugly old patios and pour fresh in one coordinated scope.",
      },
    ],
    body: [
      "A well-poured patio extends your living space outdoors — level enough for seating, textured for safety, and tied into existing walks and steps where needed.",
      "We coordinate thickness, reinforcement, and joint lines with how you will use the space: hot tubs, fire pits, pergola posts, and future cover structures.",
      "Elevate Concrete delivers patios that feel intentional, not like an afterthought slab in the back corner.",
    ],
    listTitle: "// Patio work",
    listItems: [
      "Backyard patios",
      "Courtyards",
      "Pool decks (flatwork)",
      "Steps & landings",
      "Connection to walkways",
      "Decorative finishes",
    ],
  },
  "rv-pads": {
    slug: "rv-pads",
    tag: "RV Pads — Utah",
    title: "CONCRETE",
    highlight: "RV PADS",
    intro:
      "Dedicated RV, trailer, and boat pads with the thickness and base prep heavy rigs need — level, durable, and easy to maintain.",
    sectionTitle: "Built for heavy rigs",
    sectionSubtitle: "// LEVEL, DURABLE, AND MAINTAINABLE",
    features: [
      {
        code: "R.01",
        title: "Load-Aware Design",
        body: "Thickness and base tailored to RVs, trailers, and stored equipment — not a thin sidewalk spec.",
      },
      {
        code: "R.02",
        title: "Level & Accessible",
        body: "Proper grade for parking, jacks, and hookups without awkward slopes.",
      },
      {
        code: "R.03",
        title: "Side-Yard & RV Slots",
        body: "Pads beside the home, behind gates, or on secondary lots across the Wasatch Front.",
      },
      {
        code: "R.04",
        title: "Tearout Old Pads",
        body: "Remove cracked asphalt or concrete pads before a fresh pour.",
      },
    ],
    body: [
      "RV pads take concentrated weight and year-round sun, snow, and ice. We build pads meant to sit under tires and jacks without rutting or spider-cracking in the first season.",
      "Whether you need a pad for seasonal storage or a full-time spot with utilities nearby, we align size, thickness, and finish with how you use the space.",
      "Available in Utah County, Salt Lake County, and Davis County.",
    ],
    listTitle: "// RV pad uses",
    listItems: [
      "Motorhome parking",
      "Travel trailer pads",
      "Boat & toy hauler storage",
      "Shop & yard equipment",
      "Secondary driveway extensions",
      "Commercial equipment pads",
    ],
  },
  walkways: {
    slug: "walkways",
    tag: "Concrete Walkways — Utah",
    title: "CONCRETE",
    highlight: "WALKWAYS",
    intro:
      "Front walks, side paths, and garden connections with safe slope, clean edges, and finishes that tie into driveways and patios.",
    sectionTitle: "Paths that connect",
    sectionSubtitle: "// SAFE, CLEAN, AND COORDINATED",
    features: [
      {
        code: "W.01",
        title: "Code-Friendly Slopes",
        body: "Walks pitched for drainage without trip hazards at steps and landings.",
      },
      {
        code: "W.02",
        title: "Tied-In Design",
        body: "Widths and finishes that match existing flatwork or planned upgrades.",
      },
      {
        code: "W.03",
        title: "Curves & Straight Runs",
        body: "Layout flexibility for landscaping, gates, and existing grades.",
      },
      {
        code: "W.04",
        title: "Repair or Replace",
        body: "Section replacement or full tearout when old walks are beyond patch work.",
      },
    ],
    body: [
      "Walkways guide every visitor to your door. We pour walks with consistent width, stable subgrade, and control joints that reduce random cracking along long runs.",
      "From a short front entry to a full side-yard path to the backyard, Elevate Concrete handles forming, pour, and finish with the same care as larger flatwork.",
    ],
    listTitle: "// Walkway projects",
    listItems: [
      "Front entry walks",
      "Side-yard paths",
      "Garden & gate paths",
      "Walks to garages & shops",
      "ADA-minded slopes (where specified)",
      "Steps & landings",
    ],
  },
  sidewalks: {
    slug: "sidewalks",
    tag: "Concrete Sidewalks — Utah",
    title: "CONCRETE",
    highlight: "SIDEWALKS",
    intro:
      "Residential sidewalks, approaches, and multi-family walks — durable, even, and aligned with property lines and city expectations where applicable.",
    sectionTitle: "Even, durable walks",
    sectionSubtitle: "// RESIDENTIAL & LIGHT COMMERCIAL",
    features: [
      {
        code: "S.01",
        title: "Even Surfaces",
        body: "Reduce trip hazards with proper subgrade and joint layout along the run.",
      },
      {
        code: "S.02",
        title: "Property-Line Work",
        body: "New walks along frontage, between units, or connecting parking to entries.",
      },
      {
        code: "S.03",
        title: "Section Replacement",
        body: "Remove damaged panels and pour new when full tearout is not required.",
      },
      {
        code: "S.04",
        title: "Haul Off Old Concrete",
        body: "Broken sidewalk removal included in replace scopes.",
      },
    ],
    body: [
      "Heaved, cracked, or root-lifted sidewalks are a liability and an eyesore. We replace sidewalk sections or full runs with concrete meant for foot traffic and Utah weather.",
      "Homeowners, HOAs, and small commercial clients rely on us for straightforward scheduling and a finished walk that looks intentional next to existing hardscape.",
    ],
    listTitle: "// Sidewalk work",
    listItems: [
      "Front sidewalk replacement",
      "Approach & park strips",
      "Multi-family sidewalks",
      "Walks to outbuildings",
      "Curb & gutter coordination (where scoped)",
      "Tearout & haul off",
    ],
  },
  "decorative-concrete": {
    slug: "decorative-concrete",
    tag: "Decorative Concrete — Utah",
    title: "DECORATIVE",
    highlight: "CONCRETE",
    intro:
      "Stamped, stained, exposed aggregate, and accent borders that elevate driveways, patios, and entries — built on solid flatwork fundamentals.",
    sectionTitle: "Style with structure",
    sectionSubtitle: "// BEAUTY ON A SOLID SLAB",
    features: [
      {
        code: "C.01",
        title: "Stamped Finishes",
        body: "Stone, slate, and brick patterns with consistent release and sealing guidance.",
      },
      {
        code: "C.02",
        title: "Color & Stain",
        body: "Integral color and topical stains to warm up gray concrete.",
      },
      {
        code: "C.03",
        title: "Borders & Bands",
        body: "Contrast borders on driveways and patios for a designed look.",
      },
      {
        code: "C.04",
        title: "Built on Real Flatwork",
        body: "Decorative work starts with proper base, thickness, and joints — not cosmetics only.",
      },
    ],
    body: [
      "Decorative concrete should still perform like concrete: correct thickness, reinforcement where needed, and joints in the right places. We combine craftsmanship in the finish with the structural habits of a flatwork-focused crew.",
      "Discuss pattern, color, and maintenance expectations up front so your patio or driveway looks great on completion day and ages well with sealers and care.",
    ],
    listTitle: "// Decorative options",
    listItems: [
      "Stamped patios & drives",
      "Exposed aggregate",
      "Integral color",
      "Stained concrete",
      "Border & band accents",
      "Entry features",
    ],
  },
  "small-footings-foundations": {
    slug: "small-footings-foundations",
    tag: "Footings & Foundations — Utah",
    title: "SMALL FOOTINGS",
    highlight: "& FOUNDATIONS",
    intro:
      "Footings and small foundations for sheds, shops, additions, and equipment — not full basement foundations. Right-sized concrete for your structure.",
    sectionTitle: "Right-sized foundations",
    sectionSubtitle: "// SHEDS, SHOPS & SMALL STRUCTURES",
    features: [
      {
        code: "B.01",
        title: "Shed & Shop Footings",
        body: "Strip footings and pads sized to your building plan and soil conditions.",
      },
      {
        code: "B.02",
        title: "Equipment & Post Bases",
        body: "Concrete for pergolas, carports, and light structural posts where specified.",
      },
      {
        code: "B.03",
        title: "No Basement Foundations",
        body: "We focus on small-footing work — not full basement or whole-home foundation packages.",
      },
      {
        code: "B.04",
        title: "Coordinate With Flatwork",
        body: "One team for pads, walks, and the footings they connect to when schedules align.",
      },
    ],
    body: [
      "Small structures need concrete that matches the plan: width, depth, rebar, and anchor locations. Elevate Concrete pours footings and small foundations for outbuildings, shops, and site elements — without taking on full basement foundation projects.",
      "Bring your dimensions or engineering and we will walk through access, pour sequence, and cure time before forms go in.",
      "Serving Utah County, Salt Lake County, and Davis County.",
    ],
    listTitle: "// Typical projects",
    listItems: [
      "Shed footings",
      "Shop & garage pads with footings",
      "Carport & cover posts",
      "Small addition footings",
      "Equipment slabs with edges",
      "Not: full basement foundations",
    ],
  },
};
