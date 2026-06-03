import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/SiteHeader";
import serviceFlatbed from "@/assets/service-flatbed.jpg";

export function LongDistanceTowingPage(): JSX.Element {
  return (
    <SiteLayout>
      {/* Wide scenic header */}
      <section className="relative overflow-hidden py-36">
        <div className="absolute inset-0 z-0">
          <img src={serviceFlatbed} alt="Long-distance towing Utah" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">// Long-Distance Towing — Utah</span>
          <h1 className="mt-6 font-display text-6xl uppercase leading-[0.85] tracking-tighter md:text-9xl">
            LONG-DISTANCE<br /><span className="text-primary">TOWING</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            Need a vehicle transported across Utah or beyond? Service Towing Utah provides professional long-distance towing at competitive rates.
          </p>
          <a href={PHONE_HREF} className="mt-8 inline-block bg-primary px-10 py-5 font-display text-2xl uppercase text-primary-foreground">
            Call for a Quote: {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Route info strip */}
      <section className="border-y border-border bg-card/40 py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-widest">
            <span className="text-primary">// Common Routes</span>
            {["Utah to Nevada", "Salt Lake to St. George", "Utah County to Las Vegas", "Statewide Transport", "Cross-State Moves"].map((r) => (
              <span key={r} className="border border-border px-3 py-2 text-muted-foreground">{r}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">// About This Service</div>
            <h2 className="font-display text-4xl uppercase text-foreground">We go the distance.</h2>
            <p>
              Sometimes you need a vehicle moved farther than a local tow can cover. Service Towing Utah provides long-distance towing for situations where a vehicle needs to travel across the state or to a neighboring state. We plan the route, handle the vehicle with care, and deliver it safely to the destination.
            </p>
            <p>
              Long-distance towing requires more than just a bigger truck. It requires a driver who can navigate highway conditions safely over extended distances, a properly rigged vehicle that is secured against road vibration and shifting, and clear communication with the customer from pickup to delivery.
            </p>
            <p>
              We use flatbed transport for long-distance moves wherever possible. This keeps your vehicle's wheels off the road for the entire journey and eliminates any risk of drivetrain wear or road debris damage. It is the safest, most professional way to transport a vehicle over long distances.
            </p>
            <p>
              Call us for a quote on any long-distance towing need. We will provide clear pricing based on distance, vehicle type, and route. No hidden fees, no surprises at delivery.
            </p>
          </div>
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">// Why Choose Us</div>
            {[
              { title: "Flatbed Transport", body: "Your vehicle rides fully loaded with no road contact for the entire journey." },
              { title: "Competitive Rates", body: "We offer straightforward pricing based on distance and vehicle type." },
              { title: "Experienced Drivers", body: "Long-distance runs require skilled drivers — ours handle routes across Utah and the Southwest." },
              { title: "Direct Communication", body: "We keep you updated throughout the journey from pickup to delivery." },
            ].map((item) => (
              <div key={item.title} className="border border-border bg-background p-6">
                <h3 className="font-display text-xl uppercase">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
