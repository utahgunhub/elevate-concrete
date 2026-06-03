import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/SiteHeader";
import serviceFleet from "@/assets/service-fleet.jpg";
import serviceFlatbed from "@/assets/service-flatbed.jpg";
import serviceWinch from "@/assets/service-winch.jpg";
import junkCarsHero from "@/assets/junk-cars-hero.png";

const purchaseTypes = [
  {
    code: "TYPE.01",
    title: "Broken Or Not Running",
    image: serviceFlatbed,
    bullets: [
      "No-start or dead battery vehicles",
      "Engine or transmission failure",
      "Cars too expensive to repair",
    ],
  },
  {
    code: "TYPE.02",
    title: "Wrecked Or Damaged",
    image: serviceWinch,
    bullets: [
      "Accident-damaged vehicles",
      "Cosmetic or body damage",
      "Insurance total-loss situations",
    ],
  },
  {
    code: "TYPE.03",
    title: "Old Cars And Clunkers",
    image: serviceFleet,
    bullets: [
      "Cars and trucks from 1945-2013",
      "Unused vehicles taking up space",
      "Free pickup with fast payment",
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "Call Or Submit Details",
    body: "Tell us your year, make, model, condition, and location. We will quickly estimate your vehicle value.",
  },
  {
    n: "02",
    title: "Get Your Offer",
    body: "We provide a straightforward cash offer with no pressure. If you accept, we schedule pickup right away.",
  },
  {
    n: "03",
    title: "Pickup + Payment",
    body: "A licensed tow driver arrives, handles removal, and pays you on the spot. Most pickups happen fast, often within 24 hours.",
  },
];

export function FleetPage(): JSX.Element {
  return (
    <SiteLayout>
      <PageHero
        tag="Cash For Junk Cars"
        title="TURN THAT CLUNKER"
        highlight="INTO CASH."
        description="We pay cash for junk cars and clunkers across Utah with quick quotes, free pickup, and payment at handoff."
        imageSrc={junkCarsHero}
        imageAlt="Flatbed towing an older vehicle for cash-for-junk-cars service"
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-2">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              // Why people call us
            </div>
            <h2 className="mt-2 font-display text-4xl uppercase leading-tight">
              Cash for junk cars in Utah
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                If your old vehicle is sitting in the driveway, garage, or on the side
                of your property, we can remove it and pay you for it. We buy cars and
                trucks in almost any condition, from worn-out clunkers to accident-damaged
                vehicles.
              </p>
              <p>
                A lot of people hold onto non-running cars for months or years. Instead of
                paying storage costs or repair bills, you can turn that vehicle into cash
                quickly with one call.
              </p>
              <p>
                Our team serves Orem, American Fork, Provo, Lehi, and surrounding Utah
                communities. If you are outside those areas, contact dispatch and we will
                confirm coverage options.
              </p>
            </div>
          </div>
          <div className="border border-primary/30 bg-primary/5 p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              // Quick offer hotline
            </div>
            <h3 className="mt-2 font-display text-4xl uppercase">Get Paid Fast</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              We pay top-dollar offers based on your vehicle year, condition, and current
              market value.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-8 inline-block bg-primary px-8 py-4 font-display text-2xl uppercase text-primary-foreground"
            >
              Call {PHONE_DISPLAY}
            </a>
            <ul className="mt-8 space-y-2 text-sm">
              <li className="border-l-2 border-primary/40 pl-3">
                Cars and trucks from 1945 through 2013
              </li>
              <li className="border-l-2 border-primary/40 pl-3">
                Free towing pickup included
              </li>
              <li className="border-l-2 border-primary/40 pl-3">
                Fast scheduling, usually same-day or next-day
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-5xl uppercase tracking-tight">What We Buy</h2>
          <p className="mt-2 font-mono text-sm text-primary">
            // ANY CAR OR TRUCK, ANY CONDITION
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {purchaseTypes.map((type) => (
              <article
                key={type.code}
                className="flex flex-col border border-border bg-background transition-colors hover:border-primary/50"
              >
                <div className="aspect-video border-b border-border">
                  <img
                    src={type.image}
                    alt={type.title}
                    width={800}
                    height={608}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                    [ {type.code} ]
                  </div>
                  <h3 className="mt-2 font-display text-3xl uppercase">{type.title}</h3>
                  <ul className="mt-6 space-y-2">
                    {type.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm">
                        <span className="font-mono text-primary">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.n}
              className="border border-border bg-card/30 p-8 transition-colors hover:border-primary/50"
            >
              <div className="font-display text-4xl text-primary">{step.n}</div>
              <h3 className="mt-3 font-display text-2xl uppercase">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">
            // Local highlights
          </div>
          <h2 className="mt-2 font-display text-4xl uppercase">
            Top cash offers in Utah County
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            We regularly buy junk cars in Orem, American Fork, Provo, and Lehi. If your
            vehicle is an eyesore, won&apos;t start, or costs too much to repair, we can
            turn it into cash and clear your space quickly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-widest">
            {["Orem", "American Fork", "Provo", "Lehi", "Spanish Fork", "Sandy"].map(
              (city) => (
                <span key={city} className="border border-border bg-background px-3 py-2">
                  {city}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="border-2 border-primary bg-primary/10 p-8 text-center">
            <h2 className="font-display text-4xl uppercase md:text-5xl">
              Ready to sell your junk car?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              Skip the stress of private listings and repair shops. Call now for a fast
              quote and scheduled pickup.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-8 inline-block bg-primary px-8 py-4 font-display text-2xl uppercase text-primary-foreground"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs text-muted-foreground">
            Final payout depends on vehicle condition, documentation, and market factors.
          </p>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
