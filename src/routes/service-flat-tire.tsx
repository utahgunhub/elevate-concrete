import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/SiteHeader";

export function FlatTirePage(): JSX.Element {
  return (
    <SiteLayout>
      {/* Stacked bold header */}
      <section className="border-b-4 border-primary bg-background px-4 py-28">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">// Flat Tire &amp; Tire Change — Utah</span>
          <h1 className="mt-4 font-display text-6xl uppercase leading-[0.85] tracking-tighter md:text-9xl">
            FLAT TIRES &amp;<br /><span className="text-primary">TIRE CHANGE</span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={PHONE_HREF} className="bg-primary px-8 py-4 font-display text-xl uppercase text-primary-foreground">
              Call {PHONE_DISPLAY}
            </a>
            <span className="border-2 border-border px-8 py-4 font-display text-xl uppercase text-muted-foreground">
              Available 24 Hours
            </span>
          </div>
        </div>
      </section>

      {/* Two options */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-5xl uppercase">Two Ways We Help</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="border-2 border-border p-10">
              <div className="font-mono text-xs uppercase tracking-widest text-primary">[ OPTION.01 ]</div>
              <h3 className="mt-3 font-display text-3xl uppercase">Spare Tire Install</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                If your vehicle has a spare tire in usable condition, we will swap it out on the spot. You can then drive to a tire shop to get your flat repaired or replaced properly.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {["We come to your location", "Spare must be in usable condition", "Gets you back on the road fast", "Recommended for highway situations"].map(i => (
                  <li key={i} className="flex gap-3"><span className="font-mono text-primary">→</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="border-2 border-primary bg-primary/5 p-10">
              <div className="font-mono text-xs uppercase tracking-widest text-primary">[ OPTION.02 ]</div>
              <h3 className="mt-3 font-display text-3xl uppercase">Tow to Tire Shop</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                No spare, or spare is flat or a run-flat vehicle? We tow your vehicle directly to a tire shop of your choosing where it can be properly repaired or replaced.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {["Works even with no spare", "Flatbed available for safety", "Transport to your preferred shop", "Best for run-flats or rim damage"].map(i => (
                  <li key={i} className="flex gap-3"><span className="font-mono text-primary">→</span>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-4xl space-y-5 px-4 text-base leading-relaxed text-muted-foreground">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">// About This Service</div>
          <h2 className="font-display text-4xl uppercase text-foreground">Flat tire help when you need it most</h2>
          <p>
            Flat tires are more than an inconvenience — on a highway or at night, they can be a safety issue. Service Towing Utah responds quickly to flat tire calls across Utah County and Salt Lake County, getting you either back on the road with a spare or safely transported to a shop.
          </p>
          <p>
            Our drivers assess your situation on arrival. If you have a usable spare, we install it correctly and make sure it is properly inflated and safe to drive on. If no spare is available or the flat has caused rim damage, we recommend a flatbed tow to prevent further damage to your wheel.
          </p>
          <p>
            We serve all major cities in the region including Provo, Orem, Lehi, Spanish Fork, Salt Lake City, Sandy, Draper, Murray, and more. Flat tire response is available 24 hours a day at {PHONE_DISPLAY}.
          </p>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
