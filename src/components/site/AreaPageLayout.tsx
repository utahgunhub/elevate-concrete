import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { NavLink } from "@/components/NavLink";
import { serviceLinks } from "@/lib/site";
import type { AreaPageData } from "@/lib/areas-content";

export function AreaPageLayout({ data }: { data: AreaPageData }): JSX.Element {
  return (
    <SiteLayout>
      <PageHero
        tag={data.tag}
        title={data.title}
        highlight={data.highlight}
        description={data.intro}
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              // {data.county}
            </div>
            {data.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              // Cities we serve
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-2">
              {data.cities.map((city) => (
                <li
                  key={city}
                  className="border-l-2 border-primary/40 pl-3 text-sm uppercase"
                >
                  {city}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Don&apos;t see your city? Call us — we may still cover your area within{" "}
              {data.county}.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">
            // Services in {data.county}
          </div>
          <h2 className="mt-2 font-display text-3xl uppercase">Concrete services</h2>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  className="block border border-border bg-background px-4 py-3 text-sm uppercase transition-colors hover:border-primary hover:text-primary"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
