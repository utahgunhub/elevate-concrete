import type { JSX } from "react";
import { AreaPageLayout } from "@/components/site/AreaPageLayout";
import { areasContent } from "@/lib/areas-content";

function makeAreaPage(slug: keyof typeof areasContent): () => JSX.Element {
  return function AreaPage() {
    return <AreaPageLayout data={areasContent[slug]} />;
  };
}

export const UtahCountyPage = makeAreaPage("utah-county");
export const SaltLakeCountyPage = makeAreaPage("salt-lake-county");
export const DavisCountyPage = makeAreaPage("davis-county");
