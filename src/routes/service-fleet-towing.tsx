import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/SiteHeader";
import serviceFleet from "@/assets/service-fleet.jpg";

const useCases = [
  { title: "Commercial Fleets", body: "Regular or on-demand towing for businesses that operate multiple vehicles across Utah." },
  { title: "Dealership Transport", body: "Dealer trades, auction pickups, and inventory moves handled professionally on your schedule." },
  { title: "Breakdown Response", body: "When a fleet vehicle breaks down on the road, we dispatch and transport it to your preferred shop." },
  { title: "Long-Distance Transport", body: "Need a vehicle moved across the state? We provide long-distance transport at competitive rates." },
];

export function FleetTowingPage(): JSX.Element {
  return (
    <SiteLayout>
      {/* Business-focused header */}
      <section className="border-b border-border bg-background py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">// Fleet Towing & Vehicle Transport — Utah</span>
              <h1 className="mt-4 font-display text-6xl uppercase leading-[0.85] tracking-tighter md:text-8xl">
                FLEET TOWING<br /><span className="text-primary">&amp; TRANSPORT</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Reliable fleet towing and vehicle transport for businesses, dealerships, and commercial operators across Utah County and Salt Lake County.
              </p>
              <a href={PHONE_HREF} className="mt-8 inline-block bg-primary px-8 py-4 font-display text-xl uppercase text-primary-foreground">
                Call {PHONE_DISPLAY}
              </a>
            </div>
            <div className="border-2 border-border">
              <img src={serviceFleet} alt="Fleet towing and vehicle transport Utah" className="aspect-video w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Use case grid */}
      <section className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-5xl uppercase">Who We Work With</h2>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
            {useCases.map((u) => (
              <div key={u.title} className="bg-background p-10">
                <h3 className="font-display text-3xl uppercase">{u.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-5 text-base leading-relaxed text-muted-foreground">
              <div className="font-mono text-xs uppercase tracking-widest text-primary">// About Fleet Towing</div>
              <h2 className="font-display text-4xl uppercase text-foreground">Professional transport for business vehicles</h2>
              <p>
                Businesses that operate vehicles need a towing partner they can count on. Service Towing Utah works with companies of all sizes to provide fleet towing and vehicle transport on demand. Whether you have a single company car that broke down or a multi-vehicle relocation to coordinate, we handle it professionally and on schedule.
              </p>
              <p>
                We understand that fleet downtime costs money. Our dispatchers work quickly to get the right truck to your vehicle and transport it to your preferred repair facility, storage location, or destination. We also offer scheduled transport for businesses that need regular vehicle moves across the region.
              </p>
              <p>
                Our fleet towing services cover all of Utah County and Salt Lake County, including Provo, Lehi, Orem, American Fork, Salt Lake City, West Valley, Sandy, Draper, South Jordan, and more. Long-distance transport options are available for moves outside these areas.
              </p>
            </div>
            <div className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-primary">// Service Details</div>
              {[
                "Available 24 hours",
                "Scheduled or on-demand",
                "Single or multi-vehicle",
                "Flatbed and wrecker available",
                "Competitive business pricing",
                "Utah County & Salt Lake County",
                "Long-distance transport available",
              ].map((item) => (
                <div key={item} className="border border-border bg-card/30 px-5 py-3 text-sm uppercase">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
