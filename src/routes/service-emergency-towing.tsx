import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/SiteHeader";
import serviceWinch from "@/assets/service-winch.jpg";

export function EmergencyTowingPage(): JSX.Element {
  return (
    <SiteLayout>
      {/* Full urgent banner */}
      <section className="bg-urgent py-6">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-display text-xl uppercase tracking-wider text-urgent-foreground">
            24-Hour Emergency Towing — {PHONE_DISPLAY}
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={serviceWinch}
            alt="Emergency towing service Utah"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-display text-7xl uppercase leading-[0.85] tracking-tighter md:text-[10rem]">
            EMERGENCY<br /><span className="text-primary">TOWING</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            Stranded anywhere in Utah County or Salt Lake County? Our emergency towing team dispatches immediately — 24 hours, every day.
          </p>
          <a href={PHONE_HREF} className="mt-10 inline-block bg-urgent px-10 py-5 font-display text-3xl uppercase text-urgent-foreground">
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Stat strip */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            { v: "24/7", l: "Availability" },
            { v: "Fast", l: "Dispatch" },
            { v: "2", l: "Counties covered" },
            { v: "Any", l: "Vehicle type" },
          ].map((s) => (
            <div key={s.l} className="bg-background px-6 py-10 text-center">
              <div className="font-display text-4xl text-primary md:text-5xl">{s.v}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <div className="font-mono text-xs uppercase tracking-widest text-primary">// Emergency Response</div>
              <h2 className="font-display text-4xl uppercase text-foreground">When you need a tow right now</h2>
              <p>
                Emergencies don't follow a schedule, and neither do we. Service Towing Utah keeps drivers on call around the clock specifically for emergency towing situations across Utah. Whether your vehicle broke down on a busy freeway, a mountain road, or a side street, we will get to you.
              </p>
              <p>
                Our drivers are trained and equipped for urgent situations. We handle accidents, mechanical failures, flat tires requiring towing, and any situation where your vehicle is unsafe or immovable. We carry flatbeds and wheel-lift trucks to handle whatever is needed on arrival.
              </p>
              <p>
                We serve every city in Utah County and Salt Lake County — Provo, Orem, Lehi, Spanish Fork, Salt Lake City, Sandy, Murray, West Valley, Draper, and all surrounding areas. Long-distance emergency towing is also available for situations outside our standard range.
              </p>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">// Call When You</div>
              <div className="space-y-2">
                {[
                  "Are stranded on the highway",
                  "Have been in an accident",
                  "Cannot get your vehicle to start or move",
                  "Have a flat and no spare",
                  "Are in an unsafe location",
                  "Need towing outside of business hours",
                  "Need a vehicle moved immediately",
                  "Have a mechanical failure on a main road",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 border border-border bg-card/30 px-5 py-4 text-sm">
                    <span className="font-mono text-primary text-lg">!</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
