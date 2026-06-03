import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/SiteHeader";
import serviceFlatbed from "@/assets/service-flatbed.jpg";

const features = [
  { code: "F.01", title: "Zero Drivetrain Wear", body: "All four wheels stay off the ground the entire transport. No mileage added, no wear on your drivetrain or transmission." },
  { code: "F.02", title: "EV Safe", body: "Electric vehicles require specialized transport. Our flatbeds meet manufacturer requirements for Tesla, Rivian, Ford Lightning, and more." },
  { code: "F.03", title: "Low-Clearance Capable", body: "Sports cars, modified vehicles, and low-profile cars load safely using our extended ramp systems." },
  { code: "F.04", title: "Long-Distance Ready", body: "Need transport beyond Utah County? We handle long-distance runs across the state and beyond at competitive rates." },
];

export function FlatbedTowingPage(): JSX.Element {
  return (
    <SiteLayout>
      {/* Image + headline side-by-side */}
      <section className="grid min-h-[60vh] lg:grid-cols-2">
        <div className="relative overflow-hidden">
          <img
            src={serviceFlatbed}
            alt="Flatbed towing service in Utah"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r" />
        </div>
        <div className="flex flex-col justify-center bg-background px-8 py-16 lg:px-16">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">// Flatbed Towing — Utah</span>
          <h1 className="mt-4 font-display text-6xl uppercase leading-[0.85] tracking-tighter md:text-7xl">
            FLATBED<br /><span className="text-primary">TOWING</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            The safest method for transporting cars, SUVs, EVs, and trucks across Utah. Your vehicle rides fully loaded — protected from road debris, weather, and damage from start to finish.
          </p>
          <a href={PHONE_HREF} className="mt-8 inline-block bg-primary px-8 py-4 font-display text-xl uppercase text-primary-foreground">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Feature cards */}
      <section className="border-y border-border py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-5xl uppercase">Why Flatbed?</h2>
          <p className="mt-2 font-mono text-sm text-primary">// THE SAFEST WAY TO MOVE YOUR VEHICLE</p>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.code} className="bg-background p-8">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">[ {f.code} ]</div>
                <h3 className="mt-3 font-display text-2xl uppercase">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body copy */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-5 text-base leading-relaxed text-muted-foreground">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">// About This Service</div>
            <h2 className="font-display text-4xl uppercase text-foreground">Damage-free towing for any vehicle</h2>
            <p>
              Flatbed towing is the most reliable form of vehicle transport. Rather than being pulled with a wheel lift — which puts stress on the front axle, tires, and steering — your vehicle is driven or winched onto a flat steel deck and secured with professional-grade straps and chains. It travels fully elevated with no contact with the road.
            </p>
            <p>
              This method is especially important for AWD and 4WD vehicles, which can suffer serious transmission damage if flat-towed. It is also the required method for most electric vehicles, whose warranties specify deck transport only.
            </p>
            <p>
              Service Towing Utah operates flatbed trucks across Utah County and Salt Lake County. We serve Provo, Orem, Lehi, American Fork, Salt Lake City, Sandy, Draper, Murray, and every city in between — 24 hours a day.
            </p>
          </div>
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">// We Tow</div>
            {["Cars & Sedans", "SUVs & Crossovers", "Trucks & Pickups", "Electric Vehicles", "Luxury & Exotic Cars", "Modified Vehicles", "Non-Running Vehicles", "Long-Distance Loads"].map((v) => (
              <div key={v} className="border-l-2 border-primary/40 pl-4 text-sm uppercase">{v}</div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
