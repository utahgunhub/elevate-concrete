import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCTA } from "@/components/site/FinalCTA";
import {
  EMAIL_DISPLAY,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/components/site/SiteHeader";
import { NavLink } from "@/components/NavLink";
import heroTruck from "@/assets/hero-truck.jpg";
import serviceWinch from "@/assets/service-winch.jpg";
import serviceFlatbed from "@/assets/service-flatbed.jpg";
import serviceHazard from "@/assets/service-hazard.jpg";
import serviceFleet from "@/assets/service-fleet.jpg";
import coverageMap from "@/assets/coverage-map.jpg";
import { Phone, Shield, Clock, Truck, MapPin } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Accident Recovery",
    blurb:
      "Precision extraction and secure transport for high-impact accident scenes. Direct insurance coordination.",
    image: serviceWinch,
  },
  {
    id: "02",
    title: "Flatbed Towing",
    blurb:
      "Damage-free transport for luxury vehicles, SUVs, EVs, and heavy-duty trucks across the Wasatch Front.",
    image: serviceFlatbed,
  },
  {
    id: "03",
    title: "Roadside Ops",
    blurb:
      "Rapid response for lockouts, jump-starts, tire changes, and fuel delivery in any of Utah'sweather conditions.",
    image: serviceHazard,
  },
  {
    id: "04",
    title: "Fleet Transport",
    blurb:
      "Logistics and multi-vehicle relocation for commercial fleets and dealership inventory management.",
    image: serviceFleet,
  },
];

const trustPoints = [
  {
    icon: Shield,
    title: "Licensed & Fully Insured",
    body: "Certified operators handling every vehicle with industrial-grade precision and care.",
  },
  {
    icon: Truck,
    title: "Heavy-Duty Fleet",
    body: "Equipped for Utah's toughest terrain and weather—snow, mud, or mountain passes.",
  },
  {
    icon: Clock,
    title: "Immediate Dispatch",
    body: "Proprietary routing logic puts the closest unit to Salt Lake or Utah County en route first.",
  },
];

const testimonials = [
  {
    quote:
      "Truck flipped on I-15 north of Lehi at 2 AM. Operator was on scene in 22 minutes, handled the recovery start to finish, dealt with my insurance directly. Genuine pros.",
    name: "Marcus R.",
    role: "Owner-Operator",
  },
  {
    quote:
      "We use Service Towing for our regional fleet. Their dispatch is the most responsive in Utah — they handle scheduled transports and emergencies with the same calm competence.",
    name: "Dana K.",
    role: "Logistics Manager",
  },
  {
    quote:
      "Locked my keys in the car at the Sandy trailhead in a storm. They were there before I finished my coffee. Clean, fast, friendly.",
    name: "Ben P.",
    role: "Local Customer",
  },
];

const faqs = [
  {
    q: "What is your average response time?",
    a: "We target under 30 minutes in metro Salt Lake and Utah counties. Dispatch always provides a live ETA before the unit rolls.",
  },
  {
    q: "Do you work directly with insurance?",
    a: "Yes. We provide complete documentation and direct-bill most major insurance providers for accident recovery and roadside work.",
  },
  {
    q: "Can you tow electric vehicles?",
    a: "Absolutely. Our flatbed fleet handles the unique weight distribution and manufacturer towing requirements of EVs including Tesla, Rivian, and Ford Lightning.",
  },
  {
    q: "What areas do you cover?",
    a: "All of Utah County and Salt Lake County — Provo, Orem, Lehi, Spanish Fork, Salt Lake City, West Valley, Sandy, Draper, and everything along the Wasatch Front.",
  },
  {
    q: "Do you handle heavy-duty and commercial trucks?",
    a: "Yes. Our heavy-duty wreckers are rated for semis, box trucks, and commercial fleet vehicles.",
  },
];

export function HomePage(): JSX.Element {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-20 pb-32">
        <div className="absolute inset-0 z-0">
          <img
            src={heroTruck}
            alt="Heavy-duty flatbed tow truck on a Utah mountain highway at dusk"
            width={1920}
            height={1088}
            className="h-full w-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl animate-entrance">
            <div className="mb-6 inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Salt Lake & Utah County Coverage
              </span>
            </div>
            <h1 className="mb-8 font-display text-6xl uppercase leading-[0.9] tracking-tighter md:text-8xl">
              TOWING & ROADSIDE
              <br />
              <span className="text-primary">ASSISTANCE IN UTAH</span>
            </h1>
            <p className="mb-10 max-w-xl text-pretty text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Professional towing and emergency roadside assistance. We move
              everything from stranded SUVs to entire commercial fleets — 24/7/365.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 bg-primary px-8 py-4 font-display text-xl uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Phone className="size-5" strokeWidth={2.5} />
                Request Dispatch
              </a>
              <NavLink
                href="/services"
                className="border-2 border-foreground/20 px-8 py-4 font-display text-xl uppercase tracking-wider transition-colors hover:bg-foreground/5"
              >
                Our Services
              </NavLink>
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-primary">
              Call anytime: {PHONE_DISPLAY} •{" "}
              <a href={EMAIL_HREF} className="underline underline-offset-4">
                {EMAIL_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border lg:grid-cols-4">
          {[
            { label: "Availability", value: "24 / 7 / 365" },
            { label: "Avg Response", value: "15-30 MIN" },
            { label: "Compliance", value: "LICENSED & INSURED" },
            { label: "Service Area", value: "UT + SL COUNTIES" },
          ].map((stat) => (
            <div key={stat.label} className="bg-background px-6 py-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                // {stat.label}
              </div>
              <div className="mt-3 font-display text-2xl uppercase tracking-tight md:text-3xl">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-5xl uppercase tracking-tight">
                Core Capabilities
              </h2>
              <p className="mt-2 font-mono text-sm text-primary">
                // FULL-SPECTRUM ROADSIDE SOLUTIONS
              </p>
            </div>
            <div className="hidden text-right md:block">
              <span className="font-display text-6xl opacity-10">01-04</span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.id}
                className="group flex h-[420px] flex-col border border-border bg-background p-8 transition-colors hover:border-primary/50"
              >
                <span className="mb-auto font-mono text-xs text-muted-foreground">
                  [ SERVICE.{s.id} ]
                </span>
                <h3 className="mb-4 mt-4 font-display text-3xl uppercase">
                  {s.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {s.blurb}
                </p>
                <img
                  src={s.image}
                  alt={s.title}
                  width={800}
                  height={608}
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <NavLink
              href="/services"
              className="inline-block border-2 border-border px-8 py-4 font-display text-lg uppercase tracking-wider transition-colors hover:border-primary hover:text-primary"
            >
              See All Services →
            </NavLink>
          </div>
        </div>
      </section>

      {/* Coverage / Why us */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 font-display text-5xl uppercase leading-none">
              WE DOMINATE THE
              <br />
              <span className="text-primary">WASATCH FRONT</span>
            </h2>
            <div className="space-y-6">
              {trustPoints.map((p, i) => (
                <div key={p.title} className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center border border-primary/30 bg-primary/10 font-display text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="flex items-center gap-2 font-bold text-lg uppercase">
                      <p.icon className="size-4 text-primary" />
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square border-2 border-border">
            <img
              src={coverageMap}
              alt="Service area map of Salt Lake County and Utah County, Utah"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover opacity-60"
            />
            <div className="absolute bottom-6 right-6 max-w-xs border border-primary bg-background p-6">
              <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary">
                <MapPin className="size-3" /> Primary Coverage
              </div>
              <ul className="space-y-1 text-sm font-bold uppercase">
                <li>— Salt Lake City</li>
                <li>— Provo / Orem</li>
                <li>— Lehi / Silicon Slopes</li>
                <li>— Sandy / Draper</li>
                <li>— Spanish Fork</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-2 font-display text-5xl uppercase tracking-tight">
            Field Reports
          </h2>
          <p className="mb-12 font-mono text-sm text-primary">
            // FROM DRIVERS WE'VE PULLED OUT OF TIGHT SPOTS
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col border border-border bg-background p-8"
              >
                <blockquote className="flex-1 text-base leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-bold uppercase">{t.name}</div>
                  <div className="font-mono text-xs text-muted-foreground">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-5xl uppercase leading-none">
              Frequently
              <br />
              <span className="text-primary">Asked</span>
            </h2>
            <p className="mt-4 font-mono text-sm text-muted-foreground">
              // OPERATIONAL CLARITY
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-xl uppercase">
                    <span>{f.q}</span>
                    <span className="font-mono text-primary transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
