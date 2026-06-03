import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import coverageMap from "@/assets/coverage-map.jpg";
import coverageHero from "@/assets/coverage-hero.png";

const counties = [
  {
    name: "Salt Lake County Area",
    cities: [
      "Salt Lake City",
      "South Salt Lake",
      "West Jordan",
      "South Jordan",
      "Sandy",
      "Draper",
      "Murray",
      "Midvale",
      "Riverton",
      "Taylorsville",
      "Herriman",
      "Bluffdale",
      "Magna",
      "Holladay",
      "Cottonwood",
      "Bingham Canyon",
    ],
  },
  {
    name: "Davis & North Salt Lake Area",
    cities: [
      "Bountiful",
      "North Salt Lake",
      "Centerville",
      "Farmington",
      "Kaysville",
      "Layton",
      "Syracuse",
      "Woods Cross",
      "Hill AFB",
    ],
  },
  {
    name: "Mountain & Outlying Areas",
    cities: ["Heber City", "Midway", "Kamas"],
  },
];

const utahCountyCities = [
  "Provo",
  "Lehi",
  "Orem",
  "American Fork",
  "Pleasant Grove",
  "Lindon",
  "Highland",
  "Alpine",
  "Cedar Hills",
  "Saratoga Springs",
  "Eagle Mountain",
  "Cedar Valley",
  "Spanish Fork",
  "Springville",
  "Mapleton",
  "Salem",
  "Santaquin",
  "Payson",
  "Elberta",
  "Goshen",
];

export function CoveragePage(): JSX.Element {
  return (
    <SiteLayout>
      <PageHero
        tag="Coverage Map"
        title="WASATCH"
        highlight="FRONT."
        description="Strategically positioned dispatch points along the I-15 corridor mean a unit is rarely more than 20 minutes from your location."
        imageSrc={coverageHero}
        imageAlt="Tow truck overlooking city coverage area in Utah"
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="aspect-square border-2 border-border">
              <img
                src={coverageMap}
                alt="Service area map of northern Utah"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-8 hidden lg:block">
              <div className="font-mono text-xs uppercase tracking-widest text-primary">
                // Coverage Zone
              </div>
              <h2 className="mt-2 font-display text-4xl uppercase">Utah County Area</h2>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
                {utahCountyCities.map((city) => (
                  <li key={city} className="border-l-2 border-primary/40 pl-3 text-sm uppercase">
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-12 lg:col-span-3">
            <div className="lg:hidden">
              <div className="font-mono text-xs uppercase tracking-widest text-primary">
                // Coverage Zone
              </div>
              <h2 className="mt-2 font-display text-4xl uppercase">Utah County Area</h2>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
                {utahCountyCities.map((city) => (
                  <li key={city} className="border-l-2 border-primary/40 pl-3 text-sm uppercase">
                    {city}
                  </li>
                ))}
              </ul>
            </div>

            {counties.map((c) => (
              <div key={c.name}>
                <div className="font-mono text-xs uppercase tracking-widest text-primary">
                  // Coverage Zone
                </div>
                <h2 className="mt-2 font-display text-4xl uppercase">{c.name}</h2>
                <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
                  {c.cities.map((city) => (
                    <li
                      key={city}
                      className="border-l-2 border-primary/40 pl-3 text-sm uppercase"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="border border-border bg-card/40 p-6">
              <div className="font-mono text-xs uppercase tracking-widest text-primary">
                // Outside this zone?
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                We handle long-distance transport across Utah and the surrounding
                states. Call dispatch for a custom quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
