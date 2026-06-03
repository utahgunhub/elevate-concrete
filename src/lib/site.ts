export const COMPANY_NAME = "Elevate Concrete";
export const LEGAL_NAME = "T's Construction LLC";

export const COMPANY_DESCRIPTION =
  "Elevate Concrete LLC is a professional concrete flatwork company dedicated to delivering durable, high-quality results for residential and commercial projects. With experienced crews, precise finishing, and a focus on timely, reliable service, we specialize in driveways, patios, sidewalks, slabs, and decorative finishes. At Elevate Concrete, we combine craftsmanship and attention to detail to elevate every surface for lasting performance and curb appeal. Specializing in TEAROUT and HAUL OFF as well !!!";

export const PHONE_DISPLAY = "(801) 599-9951";
export const PHONE_HREF = "tel:+18015999951";
export const EMAIL_DISPLAY = "staumoepeau@gmail.com";
export const EMAIL_HREF = "mailto:staumoepeau@gmail.com";

export const SERVICE_COUNTIES = [
  "Utah County",
  "Salt Lake County",
  "Davis County",
] as const;

export type ServiceLink = { href: string; label: string };

export const serviceLinks: ServiceLink[] = [
  { href: "/services/concrete-tearout", label: "Concrete Tearout & Haul Off" },
  { href: "/services/flatwork", label: "Flatwork" },
  { href: "/services/driveways", label: "Driveways" },
  { href: "/services/patios", label: "Patios" },
  { href: "/services/rv-pads", label: "RV Pads" },
  { href: "/services/walkways", label: "Walkways" },
  { href: "/services/sidewalks", label: "Sidewalks" },
  { href: "/services/decorative-concrete", label: "Decorative Concrete" },
  {
    href: "/services/small-footings-foundations",
    label: "Small Footings & Foundations",
  },
];

export const areaLinks: ServiceLink[] = [
  { href: "/areas/utah-county", label: "Utah County" },
  { href: "/areas/salt-lake-county", label: "Salt Lake County" },
  { href: "/areas/davis-county", label: "Davis County" },
];
