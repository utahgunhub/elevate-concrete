import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { NavLink } from "@/components/NavLink";
import { ClickableImage } from "@/components/site/ImageLightbox";
import { getMarketingHeroImage, getServiceHeroImage } from "@/lib/gallery-images";
import { serviceLinks } from "@/lib/site";
import { servicesContent } from "@/lib/services-content";

const servicesHero = getMarketingHeroImage(1);

export function ServicesPage(): JSX.Element {
  return (
    <SiteLayout>
      <PageHero
        tag="Services"
        title="CONCRETE"
        highlight="SERVICES"
        description="Flatwork, tearout, haul off, decorative finishes, and small footings across Utah County, Salt Lake County, and Davis County. Each service has its own page with scope details — call for estimates on tearout, replacement, or new flatwork."
        imageSrc={servicesHero?.src}
        imageAlt={servicesHero?.alt}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.map((link) => {
              const slug = link.href.replace("/services/", "");
              const data = servicesContent[slug];
              const image = getServiceHeroImage(slug);
              return (
                <li key={link.href}>
                  <div className="group flex h-full flex-col overflow-hidden border border-border bg-background transition-colors hover:border-primary/60">
                    {image ? (
                      <ClickableImage
                        image={image}
                        className="aspect-video w-full object-cover transition-opacity group-hover:opacity-90"
                      />
                    ) : null}
                    <NavLink href={link.href} className="flex flex-1 flex-col p-6">
                      <h2 className="font-display text-2xl uppercase transition-colors group-hover:text-primary">
                        {link.label}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {data.intro}
                      </p>
                      <span className="mt-4 inline-block font-mono text-xs text-primary">
                        View service →
                      </span>
                    </NavLink>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
