import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/SiteHeader";
import serviceWinch from "@/assets/service-winch.jpg";

const signs = [
  "Engine warning light is on",
  "Vehicle overheating",
  "Smoke coming from the hood",
  "Grinding, knocking, or loud sounds",
  "Vehicle stalled and won't restart",
  "Loss of power while driving",
  "Burning smell from engine",
  "Oil or fluid leak visible",
];

export function EngineProblemsPage(): JSX.Element {
  return (
    <SiteLayout>
      {/* Dark alert hero */}
      <section className="relative overflow-hidden bg-background py-28">
        <div className="absolute inset-0 z-0">
          <img src={serviceWinch} alt="Engine problem towing Utah" className="h-full w-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-urgent">// Engine Problems &amp; Breakdowns — Utah</span>
            <h1 className="mt-4 font-display text-6xl uppercase leading-[0.85] tracking-tighter md:text-8xl">
              ENGINE<br /><span className="text-primary">PROBLEMS</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              If your vehicle is making noises it shouldn't, overheating, leaking fluids, or stalled entirely — do not keep driving. Call us and we will tow it safely to a repair shop.
            </p>
            <a href={PHONE_HREF} className="mt-8 inline-block bg-urgent px-8 py-4 font-display text-xl uppercase text-urgent-foreground">
              Call Now: {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="border-y border-border py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-5xl uppercase">Stop Driving If You Notice</h2>
          <p className="mt-2 font-mono text-sm text-urgent">// WARNING SIGNS — PULL OVER &amp; CALL US</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {signs.map((s) => (
              <div key={s} className="border border-border bg-card/30 px-5 py-4 text-sm">
                <span className="font-mono text-urgent mr-2">!</span>{s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">// Why Not to Keep Driving</div>
            <h2 className="font-display text-4xl uppercase text-foreground">Continuing to drive can cause serious damage</h2>
            <p>
              When an engine problem appears — whether it is a warning light, a strange noise, overheating, or something you can smell — the safest choice is to pull over and call for a tow. Continuing to drive can turn a repairable problem into a totaled engine, costing thousands more than the original issue.
            </p>
            <p>
              Service Towing Utah will transport your vehicle safely to the repair shop of your choosing. We do not diagnose mechanical issues, but we make sure your vehicle arrives at the mechanic without additional road damage.
            </p>
            <p>
              We serve all areas across Utah County and Salt Lake County. Whether you are on I-15, a city street, or a back road, we dispatch and reach you as quickly as possible — 24 hours a day.
            </p>
          </div>
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">// What We Do</div>
            {[
              "Respond to your location fast",
              "Assess whether the vehicle is safe to move",
              "Load onto flatbed or use wheel lift",
              "Transport to your preferred shop",
              "Available any time of day or night",
            ].map((item) => (
              <div key={item} className="border border-border bg-background px-6 py-5 text-sm">
                <span className="font-mono text-primary mr-3">→</span>{item}
              </div>
            ))}
            <a href={PHONE_HREF} className="mt-4 block bg-primary px-6 py-4 text-center font-display text-xl uppercase text-primary-foreground">
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
