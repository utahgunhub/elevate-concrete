import type { JSX } from "react";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { servicesContent } from "@/lib/services-content";

function makeServicePage(slug: keyof typeof servicesContent): () => JSX.Element {
  return function ServicePage() {
    return <ServicePageLayout data={servicesContent[slug]} />;
  };
}

export const ConcreteTearoutPage = makeServicePage("concrete-tearout");
export const FlatworkPage = makeServicePage("flatwork");
export const DrivewaysPage = makeServicePage("driveways");
export const PatiosPage = makeServicePage("patios");
export const RvPadsPage = makeServicePage("rv-pads");
export const WalkwaysPage = makeServicePage("walkways");
export const SidewalksPage = makeServicePage("sidewalks");
export const DecorativeConcretePage = makeServicePage("decorative-concrete");
export const SmallFootingsFoundationsPage = makeServicePage("small-footings-foundations");
