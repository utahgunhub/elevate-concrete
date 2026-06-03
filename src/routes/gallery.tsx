import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { allGalleryImages } from "@/lib/gallery-images";

export function GalleryPage(): JSX.Element {
  return (
    <SiteLayout>
      <PageHero
        tag="Project Gallery"
        title="OUR"
        highlight="WORK"
        description={`Browse ${allGalleryImages.length} photos from Elevate Concrete projects across Utah — flatwork, tearout, decorative finishes, and more.`}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <GalleryGrid images={allGalleryImages} />
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
