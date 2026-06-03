import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import aboutHero from "@/assets/about-hero.png";

const values = [
  {
    n: "01",
    title: "Professional Drivers",
    body: "Our team is known for friendly communication, safe towing practices, and dependable service.",
  },
  {
    n: "02",
    title: "Safe Towing Methods",
    body: "Flatbed towing and careful loading procedures help protect your vehicle from pickup to drop-off.",
  },
  {
    n: "03",
    title: "Reliable Response",
    body: "Fast dispatch, clear communication, and straightforward pricing make towing hassle-free for customers.",
  },
];

export function AboutPage(): JSX.Element {
  return (
    <SiteLayout>
      <PageHero
        tag="About Us"
        title="PROFESSIONAL TOWING"
        highlight="YOU CAN TRUST."
        description="Service Towing Utah provides professional 24-hour towing and roadside assistance throughout Utah County and Salt Lake County."
        imageSrc={aboutHero}
        imageAlt="Service Towing Utah truck on a Utah highway at sunset"
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-2">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              // About Service Towing Utah
            </div>
            <h2 className="mt-2 font-display text-4xl uppercase leading-tight">
              Reliable service, clear communication.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Service Towing Utah provides professional 24-hour towing and roadside
                assistance throughout Utah County and Salt Lake County. We specialize in
                accident recovery, flatbed towing, roadside assistance, and vehicle
                transport for cars, SUVs, trucks, and fleets.
              </p>
              <p>
                Our mission is simple: provide reliable, professional towing service and
                make the process easy for every customer. Whether you need an accident tow,
                emergency roadside help, or long-distance transport, our experienced drivers
                handle your vehicle with care.
              </p>
              <p>
                We regularly work with repair shops, dealerships, and insurance companies
                to help customers get back on the road quickly and safely.
              </p>
              <p className="font-bold text-foreground">Call now: 801-900-3869</p>
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              // Why Customers Choose Service Towing Utah
            </div>
            <div className="mt-2 space-y-1">
              {values.map((v) => (
                <div
                  key={v.n}
                  className="border border-border bg-card/40 p-6 transition-colors hover:border-primary/50"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-3xl text-primary">
                      {v.n}
                    </span>
                    <h3 className="font-display text-2xl uppercase">{v.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
          {[
            { v: "24/7", l: "Live dispatch" },
            { v: "2", l: "Primary counties served" },
            { v: "Fast", l: "Reliable response focus" },
            { v: "100%", l: "Commitment to customer care" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl text-primary md:text-6xl">
                {s.v}
              </div>
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
