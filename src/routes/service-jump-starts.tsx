import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/SiteHeader";

const steps = [
  { n: "01", title: "Call Us", body: "Tell us your location and that you need a jump start. We confirm your address and dispatch immediately." },
  { n: "02", title: "We Arrive", body: "A driver arrives with a professional battery jump pack — no jumper cables required, no need for another vehicle." },
  { n: "03", title: "Vehicle Started", body: "We connect to your battery and safely jump your vehicle. Most jump starts take only a few minutes." },
  { n: "04", title: "Back on the Road", body: "If the jump is successful, you are free to go. If there is a deeper battery or electrical issue, we can tow you to a shop." },
];

export function JumpStartsPage(): JSX.Element {
  return (
    <SiteLayout>
      {/* Minimal high-contrast header */}
      <section className="bg-primary px-4 py-28 text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-xs uppercase tracking-widest opacity-70">// Dead Battery Help — Utah</span>
          <h1 className="mt-4 font-display text-7xl uppercase leading-[0.85] tracking-tighter md:text-9xl">
            JUMP<br />STARTS
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-80">
            Car won't start? We come to you anywhere in Utah County or Salt Lake County and get you back on the road fast.
          </p>
          <a href={PHONE_HREF} className="mt-8 inline-block bg-primary-foreground px-8 py-4 font-display text-2xl uppercase text-primary">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-5xl uppercase">How It Works</h2>
          <p className="mt-2 font-mono text-sm text-primary">// SIMPLE 4-STEP PROCESS</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.n} className="border border-border bg-background p-8">
                <div className="font-display text-6xl text-primary opacity-30">{step.n}</div>
                <h3 className="mt-4 font-display text-2xl uppercase">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">// About Jump Starts</div>
            <h2 className="font-display text-4xl uppercase text-foreground">Dead battery? We handle it.</h2>
            <p>
              A dead battery is one of the most common roadside problems drivers face. Cold Utah winters, older batteries, and leaving interior lights on overnight are all common causes. Whatever the reason, Service Towing Utah sends a driver to your location with professional jump-starting equipment.
            </p>
            <p>
              Unlike traditional jumper cables that need a second running vehicle, we carry self-contained battery packs that can jump almost any car, truck, or SUV independently — no other car needed.
            </p>
            <p>
              If your battery cannot hold a charge after the jump start, we recommend having it tested at a shop. We can tow you directly to a repair shop or auto parts store if needed. All services are available 24 hours across Utah County and Salt Lake County.
            </p>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">// Common Situations</div>
            {[
              "Parked too long in cold weather",
              "Left lights or accessories on overnight",
              "Old or weak battery",
              "Alternator not charging properly",
              "Drained battery from stereo or accessories",
              "Won't start after extended storage",
            ].map((item) => (
              <div key={item} className="border-b border-border py-4 text-sm text-muted-foreground">
                <span className="font-mono text-primary mr-3">→</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
