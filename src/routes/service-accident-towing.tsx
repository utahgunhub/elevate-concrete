import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/SiteHeader";
import serviceWinch from "@/assets/service-winch.jpg";

export function AccidentTowingPage(): JSX.Element {
  return (
    <SiteLayout>
      {/* Dark full-bleed hero */}
      <section className="relative overflow-hidden bg-background py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={serviceWinch}
            alt="Accident towing and recovery in Utah"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            // Service Towing Utah
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-7xl uppercase leading-[0.85] tracking-tighter md:text-9xl">
            ACCIDENT<br />
            <span className="text-primary">TOWING &<br />RECOVERY</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            When accidents happen in Utah County and Salt Lake County, Service Towing Utah responds fast. Our certified operators handle vehicle recovery safely from the moment of impact to final delivery.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-8 inline-flex items-center gap-3 bg-urgent px-8 py-4 font-display text-2xl uppercase text-urgent-foreground"
          >
            Call Now: {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Split content */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-2">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">// What We Do</div>
            <h2 className="font-display text-4xl uppercase text-foreground">On-scene in minutes. Professional every time.</h2>
            <p>
              Accident scenes require controlled, professional handling. Our drivers arrive prepared — with the right equipment to safely extract, secure, and transport any vehicle involved in a collision, whether it is a sedan on a city street or a truck on the I-15 corridor.
            </p>
            <p>
              We coordinate directly with law enforcement and insurance carriers to simplify the process for you. You have enough to deal with after an accident. We handle the vehicle so you don't have to think about it.
            </p>
            <p>
              Service Towing Utah provides accident towing service across Provo, Orem, Lehi, Salt Lake City, Sandy, Draper, and all surrounding communities in Utah County and Salt Lake County. Available 24 hours, every day of the year.
            </p>
          </div>
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">// What's Included</div>
            {[
              "Accident towing from any road or location",
              "Winch-outs and vehicle extraction",
              "Heavy-duty recovery for trucks and large vehicles",
              "Safe transport to body shop or storage",
              "Insurance coordination and documentation",
              "24-hour emergency response",
              "Flatbed available for damaged vehicles",
              "Scene clearance support",
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 border border-border bg-card/30 px-5 py-4">
                <span className="font-mono text-lg text-primary">→</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency banner */}
      <section className="border-y-2 border-urgent bg-urgent/10 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-urgent">// 24-Hour Emergency Line</p>
          <a href={PHONE_HREF} className="mt-3 block font-display text-5xl uppercase text-foreground md:text-7xl">
            {PHONE_DISPLAY}
          </a>
          <p className="mt-3 text-sm text-muted-foreground">Call anytime — accident towing dispatched immediately across Utah County and Salt Lake County</p>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
