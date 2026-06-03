import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { NavLink } from "@/components/NavLink";
import { areaLinks, SERVICE_COUNTIES } from "@/lib/site";
import { areasContent } from "@/lib/areas-content";

export function AreasPage(): JSX.Element {
  return (
    <SiteLayout>
      <PageHero
        tag="Service Areas"
        title="CONCRETE WORK"
        highlight="ACROSS UTAH"
        description="Elevate Concrete serves Utah County, Salt Lake County, and Davis County with flatwork, tearout, haul off, and decorative concrete."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {areaLinks.map((link) => {
              const slug = link.href.replace("/areas/", "");
              const data = areasContent[slug];
              return (
                <NavLink
                  key={link.href}
                  href={link.href}
                  className="group flex flex-col border border-border bg-background p-8 transition-colors hover:border-primary/60"
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                    // Service area
                  </div>
                  <h2 className="mt-3 font-display text-4xl uppercase transition-colors group-hover:text-primary">
                    {data.county}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {data.intro}
                  </p>
                  <span className="mt-6 font-mono text-xs uppercase text-primary">
                    View cities & services →
                  </span>
                </NavLink>
              );
            })}
          </div>

          <div className="mt-16 border border-border bg-card/40 p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              // Coverage summary
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              We focus on {SERVICE_COUNTIES.join(", ")}. Each county page lists
              representative cities — call if your town is nearby and not listed.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
