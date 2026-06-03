import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCTA } from "@/components/site/FinalCTA";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { PageHero } from "@/components/site/PageHero";
import { getServiceHeroImage, getServiceImages } from "@/lib/gallery-images";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import type { ServicePageData } from "@/lib/services-content";

export function ServicePageLayout({ data }: { data: ServicePageData }): JSX.Element {
  const images = getServiceImages(data.slug);
  const hero = getServiceHeroImage(data.slug);

  return (
    <SiteLayout>
      <PageHero
        tag={data.tag}
        title={data.title}
        highlight={data.highlight}
        description={data.intro}
        imageSrc={hero?.src}
        imageAlt={hero?.alt}
        action={
          <a
            href={PHONE_HREF}
            className="inline-block bg-primary px-8 py-4 font-display text-xl uppercase text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Call {PHONE_DISPLAY}
          </a>
        }
      />

      {images.length > 0 && (
        <section className="border-b border-border bg-card/30 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              // Project gallery
            </div>
            <h2 className="mt-2 font-display text-3xl uppercase">Recent work</h2>
            <div className="mt-8">
              <GalleryGrid images={images} />
            </div>
          </div>
        </section>
      )}

      <section className="border-y border-border py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-5xl uppercase">{data.sectionTitle}</h2>
          <p className="mt-2 font-mono text-sm text-primary">{data.sectionSubtitle}</p>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2">
            {data.features.map((f) => (
              <div key={f.code} className="bg-background p-8">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  [ {f.code} ]
                </div>
                <h3 className="mt-3 font-display text-2xl uppercase">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-3">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-2">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              // About this service
            </div>
            {data.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              {data.listTitle}
            </div>
            {data.listItems.map((item) => (
              <div key={item} className="border-l-2 border-primary/40 pl-4 text-sm uppercase">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
