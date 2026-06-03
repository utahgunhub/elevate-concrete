import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/SiteHeader";

export function FuelDeliveryPage(): JSX.Element {
  return (
    <SiteLayout>
      {/* Two-tone split layout */}
      <section className="grid lg:grid-cols-2 min-h-[50vh]">
        <div className="bg-primary px-10 py-28 flex flex-col justify-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary-foreground/70">// Fuel Delivery — Utah</span>
          <h1 className="mt-4 font-display text-6xl uppercase leading-[0.85] tracking-tighter text-primary-foreground md:text-7xl">
            OUT OF GAS?<br />WE DELIVER.
          </h1>
          <a href={PHONE_HREF} className="mt-8 inline-block bg-primary-foreground px-8 py-4 font-display text-xl uppercase text-primary self-start">
            {PHONE_DISPLAY}
          </a>
        </div>
        <div className="bg-card/40 px-10 py-28 flex flex-col justify-center border-l border-border">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">// What We Deliver</div>
          {["Regular unleaded gasoline", "Premium gasoline", "Diesel fuel", "Delivered to your exact location", "Available 24 hours", "Utah County &amp; Salt Lake County"].map((item) => (
            <div key={item} className="border-b border-border py-4 text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: `<span class="font-mono text-primary mr-3">→</span>${item}` }} />
          ))}
        </div>
      </section>

      {/* Body */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl space-y-6 px-4 text-base leading-relaxed text-muted-foreground">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">// About Fuel Delivery</div>
          <h2 className="font-display text-4xl uppercase text-foreground">Gas or diesel brought straight to you</h2>
          <p>
            Running out of fuel happens to everyone. Maybe the gauge was off, maybe you were trying to stretch the tank a little too far, or maybe you simply forgot to stop before getting on the highway. Whatever the reason, Service Towing Utah delivers gas or diesel to your exact location anywhere in Utah County and Salt Lake County.
          </p>
          <p>
            We carry both gasoline and diesel fuel in our service vehicles so we can serve any type of car, truck, or SUV without delay. Just tell our dispatcher your location and what type of fuel your vehicle takes — we handle the rest.
          </p>
          <p>
            Fuel delivery is available 24 hours a day. We serve every major city in the region, including Provo, Orem, Lehi, American Fork, Salt Lake City, Sandy, Murray, Draper, Taylorsville, South Jordan, and more. If you are unsure whether we cover your area, call us — we will confirm right away.
          </p>
          <p>
            If you are out of fuel in an unsafe location — on a highway shoulder or a dark road — stay in your vehicle with your hazard lights on while you wait. Our drivers are trained to approach and assist safely.
          </p>
        </div>
      </section>

      {/* CTA callout */}
      <section className="border-y-2 border-primary bg-primary/5 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">// We deliver gas or diesel</p>
          <h2 className="mt-4 font-display text-5xl uppercase">Out of fuel? One call does it.</h2>
          <a href={PHONE_HREF} className="mt-8 inline-block bg-primary px-10 py-5 font-display text-3xl uppercase text-primary-foreground">
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
