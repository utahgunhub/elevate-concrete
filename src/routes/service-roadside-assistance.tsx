import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/SiteHeader";
import serviceHazard from "@/assets/service-hazard.jpg";
import { Zap, Lock, Fuel, Wrench, AlertTriangle, Circle } from "lucide-react";

const items = [
  { icon: Zap, title: "Jump Starts", body: "Dead battery? We carry professional jump packs and can get most vehicles running on the spot." },
  { icon: Lock, title: "Lockouts", body: "Locked out of your car? Our drivers have the tools to open most vehicles without damage." },
  { icon: Fuel, title: "Fuel Delivery", body: "We deliver gas or diesel to your exact location so you can get back on the road fast." },
  { icon: Circle, title: "Flat Tire Help", body: "We change your spare or tow your vehicle to a tire shop if no spare is available." },
  { icon: Wrench, title: "Engine Problems", body: "If your engine won't cooperate, we assess the situation and tow you safely to a repair shop." },
  { icon: AlertTriangle, title: "General Roadside", body: "Whatever the situation, call us. We dispatch quickly to help resolve or tow your vehicle." },
];

export function RoadsideAssistancePage(): JSX.Element {
  return (
    <SiteLayout>
      {/* Stacked hero */}
      <section className="relative border-b border-border px-4 pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={serviceHazard} alt="Roadside assistance Utah" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-xl">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">// 24-Hour Roadside Assistance — Utah</div>
            <h1 className="mt-4 font-display text-6xl uppercase leading-[0.85] tracking-tighter md:text-8xl">
              ROADSIDE<br /><span className="text-primary">ASSISTANCE</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Service Towing Utah responds to roadside breakdowns across Utah County and Salt Lake County around the clock. Call us when you need help, wherever you are.
            </p>
            <a href={PHONE_HREF} className="mt-8 inline-block bg-primary px-8 py-4 font-display text-xl uppercase text-primary-foreground">
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Icon grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-5xl uppercase">What We Handle</h2>
          <p className="mt-2 font-mono text-sm text-primary">// FULL ROADSIDE COVERAGE</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div key={item.title} className="border border-border bg-background p-8 transition-colors hover:border-primary/50">
                <item.icon className="size-8 text-primary" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-2xl uppercase">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-4xl space-y-5 px-4 text-base leading-relaxed text-muted-foreground">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">// About Roadside Assistance</div>
          <h2 className="font-display text-4xl uppercase text-foreground">Help arrives fast, wherever you are</h2>
          <p>
            Being stranded is stressful. Our goal is to reduce that stress as much as possible by responding quickly with the right equipment. Whether you are on the side of the freeway, stuck in a parking lot, or stranded at home, our dispatchers will get someone to you.
          </p>
          <p>
            Service Towing Utah handles the most common roadside problems — dead batteries, flat tires, fuel delivery, and lockouts — but we are also ready to assess more serious issues. If your car cannot be fixed roadside, we tow it to your preferred destination safely.
          </p>
          <p>
            We serve all cities in Utah County and Salt Lake County. Available 24 hours, 7 days a week, 365 days a year. Call anytime: {PHONE_DISPLAY}.
          </p>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
