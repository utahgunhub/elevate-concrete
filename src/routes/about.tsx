import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { NavLink } from "@/components/NavLink";
import { getAccentImages, getServiceHeroImage } from "@/lib/gallery-images";
import {
  COMPANY_DESCRIPTION,
  COMPANY_NAME,
  LEGAL_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";

const aboutHero = getServiceHeroImage("driveways") ?? getAccentImages(1)[0];
const aboutGallery = getAccentImages(8);

const values = [
  {
    n: "01",
    title: "Craftsmanship",
    body: "Precise finishing and attention to detail on every pour — from broom drives to decorative patios.",
  },
  {
    n: "02",
    title: "Durable Results",
    body: "Proper base prep, thickness, and joints aimed at surfaces that perform in Utah weather.",
  },
  {
    n: "03",
    title: "Reliable Service",
    body: "Clear estimates, honest timelines, and crews that show up ready to work.",
  },
];

export function AboutPage(): JSX.Element {
  return (
    <SiteLayout>
      <PageHero
        tag="About Us"
        title="CONCRETE FLATWORK"
        highlight="YOU CAN TRUST"
        description={COMPANY_DESCRIPTION}
        imageSrc={aboutHero?.src}
        imageAlt={aboutHero?.alt}
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-2">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              // About {COMPANY_NAME}
            </div>
            <h2 className="mt-2 font-display text-4xl uppercase leading-tight">
              Elevate every surface.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>{COMPANY_DESCRIPTION}</p>
              <p>
                We serve homeowners, builders, and property managers across Utah County,
                Salt Lake County, and Davis County with flatwork you can use and be proud
                of — plus tearout and haul off when replacement starts with removal.
              </p>
              <p className="text-sm text-muted-foreground">
                Public contact: {LEGAL_NAME}
              </p>
              <a href={PHONE_HREF} className="inline-block font-bold text-foreground">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              // Why choose us
            </div>
            <div className="mt-2 space-y-1">
              {values.map((v) => (
                <div
                  key={v.n}
                  className="border border-border bg-card/40 p-6 transition-colors hover:border-primary/50"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-3xl text-primary">{v.n}</span>
                    <h3 className="font-display text-2xl uppercase">{v.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {aboutGallery.length > 0 && (
        <section className="border-y border-border py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <h2 className="font-display text-4xl uppercase">Our work</h2>
              <NavLink
                href="/gallery"
                className="font-mono text-xs uppercase text-primary hover:underline"
              >
                Full gallery →
              </NavLink>
            </div>
            <div className="mt-8">
              <GalleryGrid images={aboutGallery} columns="compact" />
            </div>
          </div>
        </section>
      )}

      <section className="border-y border-border bg-card/40 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
          {[
            { v: "9+", l: "Concrete services" },
            { v: "3", l: "Counties served" },
            { v: "★", l: "Tearout specialty" },
            { v: "100%", l: "Focus on flatwork" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl text-primary md:text-6xl">{s.v}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
