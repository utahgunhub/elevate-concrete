import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/SiteHeader";
import serviceWinch from "@/assets/service-winch.jpg";

const situations = [
  { code: "S.01", title: "Off-Road Recovery", body: "Slid off a trail, stuck in mud, or buried in snow? We can extract most vehicles from off-road situations using our winch systems." },
  { code: "S.02", title: "Ditch Recovery", body: "Vehicles that have gone into a roadside ditch require careful angle and rigging. Our operators are trained for controlled recovery." },
  { code: "S.03", title: "Embankment Situations", body: "Vehicles on embankments or steep grades require specialized rigging to prevent further sliding. We have the equipment and experience." },
  { code: "S.04", title: "Post-Accident Recovery", body: "After a collision, vehicles are often in positions that require winching before they can be towed. We handle both stages." },
  { code: "S.05", title: "Flood or Mud Stuck", body: "Heavy rain can leave vehicles stuck in unexpected places. We extract vehicles from soft ground and saturated terrain." },
  { code: "S.06", title: "Snowy Conditions", body: "Utah winters push vehicles off roads every year. We provide fast winch-out response during and after snowstorms." },
];

export function WinchOutsPage(): JSX.Element {
  return (
    <SiteLayout>
      {/* Technical header */}
      <section className="relative overflow-hidden border-b border-border py-28">
        <div className="absolute inset-0 z-0">
          <img src={serviceWinch} alt="Winch-out and recovery service Utah" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="flex items-start gap-8">
            <div className="hidden font-display text-[12rem] leading-none text-primary/10 lg:block" aria-hidden>W</div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">// Winch-Outs & Recovery — Utah</span>
              <h1 className="mt-4 font-display text-6xl uppercase leading-[0.85] tracking-tighter md:text-8xl">
                WINCH-OUTS<br /><span className="text-primary">&amp; RECOVERY</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                When a vehicle is stuck, off-road, or in a position too difficult to tow conventionally, Service Towing Utah deploys winch recovery equipment to extract it safely.
              </p>
              <a href={PHONE_HREF} className="mt-8 inline-block bg-primary px-8 py-4 font-display text-xl uppercase text-primary-foreground">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Situation grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-5xl uppercase">Situations We Handle</h2>
          <p className="mt-2 font-mono text-sm text-primary">// RECOVERY FOR ANY TERRAIN OR POSITION</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {situations.map((s) => (
              <div key={s.code} className="border border-border bg-background p-8 transition-colors hover:border-primary/50">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">[ {s.code} ]</div>
                <h3 className="mt-3 font-display text-2xl uppercase">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Copy */}
      <section className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-4xl space-y-5 px-4 text-base leading-relaxed text-muted-foreground">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">// About Winch Recovery</div>
          <h2 className="font-display text-4xl uppercase text-foreground">Precision extraction for stuck vehicles</h2>
          <p>
            Winch-outs are a specialized form of vehicle recovery used when conventional towing is not possible. Whether a vehicle has slid off a mountain road, is buried in snow, or is stuck in mud after a rainstorm, our operators assess the safest extraction angle and deploy cable winches to pull the vehicle back to stable ground.
          </p>
          <p>
            This type of recovery requires the right equipment and training. Using the wrong technique or an underpowered system can damage the vehicle further or make the situation more dangerous. Our team carries heavy-duty winch trucks rated for passenger vehicles, trucks, and larger commercial vehicles.
          </p>
          <p>
            Once the vehicle is on stable, flat ground, we evaluate whether it is driveable or needs to be towed to a repair facility. We handle both scenarios. Service available 24 hours across Utah County and Salt Lake County. Call {PHONE_DISPLAY}.
          </p>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
