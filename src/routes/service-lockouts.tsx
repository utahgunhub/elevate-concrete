import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/SiteHeader";

const faqs = [
  { q: "Will you damage my car to open it?", a: "No. We use professional lockout tools designed to open vehicle doors without causing any damage to the frame, window seals, or locking mechanism." },
  { q: "What if my key is broken in the lock?", a: "We can attempt broken key extraction using specialized tools. In some cases we may recommend a locksmith, but we will always assess the situation on arrival." },
  { q: "Do you unlock all vehicle makes?", a: "We can open most domestic and foreign vehicles. Some newer high-security systems may require a dealership, but we will let you know immediately on arrival." },
  { q: "How fast can you get here?", a: "We dispatch immediately and aim to reach you as quickly as possible anywhere in Utah County and Salt Lake County, 24 hours a day." },
];

export function LockoutsPage(): JSX.Element {
  return (
    <SiteLayout>
      {/* Clean center-focused hero */}
      <section className="border-b border-border px-4 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">// Car Lockout Service — Utah</div>
          <h1 className="mt-6 font-display text-6xl uppercase leading-[0.85] tracking-tighter md:text-8xl">
            LOCKED OUT?<br /><span className="text-primary">WE'LL GET YOU IN.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Left your keys inside the car? Service Towing Utah responds quickly to lockouts across Utah County and Salt Lake County — 24 hours a day.
          </p>
          <a href={PHONE_HREF} className="mt-8 inline-block bg-primary px-10 py-5 font-display text-2xl uppercase text-primary-foreground">
            Call Now: {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Body content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-5 text-base leading-relaxed text-muted-foreground">
              <div className="font-mono text-xs uppercase tracking-widest text-primary">// About This Service</div>
              <h2 className="font-display text-4xl uppercase text-foreground">Fast, damage-free lockout service</h2>
              <p>
                Getting locked out of your car is frustrating, especially when you are parked on a busy road, in a parking garage, or late at night. Service Towing Utah provides professional lockout service with tools designed to open your vehicle safely and without causing any damage.
              </p>
              <p>
                Our drivers are experienced with the lockout tools and techniques used across most domestic and foreign vehicle makes. We do not force, pry, or use improvised methods — we use the right equipment for each job. This protects your door seals, windows, and locking mechanisms from costly damage.
              </p>
              <p>
                If you have locked a child or pet inside a vehicle, call us immediately for urgent response. We treat those situations as the highest priority and dispatch right away.
              </p>
              <p>
                Available 24 hours across Provo, Orem, Lehi, Salt Lake City, Sandy, Murray, Draper, and all surrounding areas in Utah County and Salt Lake County. Call {PHONE_DISPLAY} anytime.
              </p>
            </div>
            <div>
              <div className="border-2 border-primary bg-primary/5 p-8">
                <div className="font-mono text-xs uppercase tracking-widest text-primary">// Quick Call</div>
                <p className="mt-4 text-sm text-muted-foreground">Don't wait. We dispatch immediately and aim to arrive as fast as possible.</p>
                <a href={PHONE_HREF} className="mt-6 block bg-primary px-6 py-4 text-center font-display text-2xl uppercase text-primary-foreground">
                  {PHONE_DISPLAY}
                </a>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li className="border-l-2 border-primary/40 pl-3">No damage to your vehicle</li>
                  <li className="border-l-2 border-primary/40 pl-3">Available 24 hours</li>
                  <li className="border-l-2 border-primary/40 pl-3">Utah County &amp; Salt Lake County</li>
                  <li className="border-l-2 border-primary/40 pl-3">Fast dispatch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-display text-4xl uppercase">Common Questions</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-lg uppercase">
                  <span>{faq.q}</span>
                  <span className="font-mono text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
