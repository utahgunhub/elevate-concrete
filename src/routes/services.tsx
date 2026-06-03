import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { NavLink } from "@/components/NavLink";
import serviceWinch from "@/assets/service-winch.jpg";
import serviceFlatbed from "@/assets/service-flatbed.jpg";
import serviceHazard from "@/assets/service-hazard.jpg";
import serviceFleet from "@/assets/service-fleet.jpg";
import serviceHero from "@/assets/service-hero.png";


const services = [
  {
    id: "01",
    href: "/services/accident-towing",
    title: "Accident Towing & Recovery",
    image: serviceWinch,
    body: "From minor collisions to serious incidents, our operators secure your vehicle, clear the scene, and transport where you need it.",
    bullets: [
      { label: "Accident towing and recovery", href: "/services/accident-towing" },
      { label: "Emergency towing", href: "/services/emergency-towing" },
      { label: "Winch-outs and recovery", href: "/services/winch-outs" },
    ],
  },
  {
    id: "02",
    href: "/services/flatbed-towing",
    title: "Flatbed Towing",
    image: serviceFlatbed,
    body: "We tow any car with a friendly and secure towing service across Utah County and surrounding areas.",
    bullets: [
      { label: "Flatbed towing", href: "/services/flatbed-towing" },
      { label: "Fleet towing and vehicle transport", href: "/services/fleet-towing" },
      { label: "Long-distance towing", href: "/services/long-distance-towing" },
    ],
  },
  {
    id: "03",
    href: "/services/roadside-assistance",
    title: "Roadside Assistance",
    image: serviceHazard,
    body: "Dispatch is available 24 hours for roadside calls. Whether you are stranded at home, work, or on the highway, we send help fast.",
    bullets: [
      { label: "Jump Starts", href: "/services/jump-starts" },
      { label: "Lockouts", href: "/services/lockouts" },
      { label: "Fuel delivery", href: "/services/fuel-delivery" },
      { label: "Flat Tires & Tire Change", href: "/services/flat-tire" },
      { label: "Engine Problems", href: "/services/engine-problems" },
    ],
  },
  {
    id: "04",
    href: "/services/dead-battery",
    title: "Battery & Dead Battery Service",
    image: serviceFleet,
    body: "If your vehicle won't start, we can get power restored or tow it safely to your preferred destination.",
    bullets: [
      { label: "Dead Battery", href: "/services/dead-battery" },
      { label: "Jump Starts", href: "/services/jump-starts" },
    ],
  },
];

export function ServicesPage(): JSX.Element {
  return (
    <SiteLayout>
      <PageHero
        tag="Services"
        title="TOWING & ROADSIDE"
        highlight="SERVICES"
        description="Our towing and roadside services are available 24 hours with certified drivers and friendly support across Utah County and surrounding areas."
        imageSrc={serviceHero}
        imageAlt="Tow trucks staged for professional roadside services in Utah"
      />

      <section className="border-y border-border bg-card/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-4xl uppercase">Our Towing & Roadside Services</h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            We tow any car with a friendly and secure towing service in Utah County and nearby
            areas. Our dispatchers are ready 24 hours, and our certified drivers treat your
            car, SUV, or truck with care and excellent customer service.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl space-y-24 px-4">
          {services.map((s, i) => (
            <article
              key={s.id}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""
              }`}
            >
              <NavLink href={s.href} className="group block border-2 border-border transition-colors hover:border-primary/60">
                <img
                  src={s.image}
                  alt={s.title}
                  width={800}
                  height={608}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-opacity group-hover:opacity-90"
                />
              </NavLink>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-primary">
                  [ SERVICE.{s.id} ]
                </div>
                <NavLink href={s.href} className="group">
                  <h2 className="mt-3 font-display text-5xl uppercase leading-none transition-colors group-hover:text-primary">
                    {s.title}
                  </h2>
                </NavLink>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b.href} className="border-l-2 border-primary/40 pl-4">
                      <NavLink
                        href={b.href}
                        className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
                      >
                        <span className="font-mono text-primary">→</span>
                        <span>{b.label}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
