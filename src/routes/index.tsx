import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCTA } from "@/components/site/FinalCTA";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { ClickableImage } from "@/components/site/ImageLightbox";
import { NavLink } from "@/components/NavLink";
import {
  getAccentImages,
  getMarketingHeroImage,
  getServiceHeroImage,
  type ServiceSlug,
} from "@/lib/gallery-images";
import {
  areaLinks,
  COMPANY_DESCRIPTION,
  COMPANY_NAME,
  EMAIL_DISPLAY,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  serviceLinks,
} from "@/lib/site";
import { Phone, Hammer, Clock, MapPin, Layers } from "lucide-react";

const heroImage = getMarketingHeroImage(0);

const featuredServices: {
  id: string;
  slug: ServiceSlug;
  title: string;
  blurb: string;
  href: string;
}[] = [
  {
    id: "01",
    slug: "concrete-tearout",
    title: "Tearout & Haul Off",
    blurb: "Remove old concrete and clear the site for a clean, replace-ready pour.",
    href: "/services/concrete-tearout",
  },
  {
    id: "02",
    slug: "driveways",
    title: "Driveways & Patios",
    blurb: "Flatwork built for daily use — proper base, joints, and finishes for Utah weather.",
    href: "/services/driveways",
  },
  {
    id: "03",
    slug: "sidewalks",
    title: "Walks & Sidewalks",
    blurb: "Safe, even paths and front walks that tie into your existing hardscape.",
    href: "/services/sidewalks",
  },
  {
    id: "04",
    slug: "decorative-concrete",
    title: "Decorative Concrete",
    blurb: "Stamped, stained, and accent finishes on a solid structural pour.",
    href: "/services/decorative-concrete",
  },
];

const homeGalleryPreview = getAccentImages(6);

const trustPoints = [
  {
    icon: Hammer,
    title: "Experienced Crews",
    body: "Skilled finishers focused on flatwork quality — placement, edges, and control joints done right.",
  },
  {
    icon: Layers,
    title: "Tearout Specialists",
    body: "Concrete removal and haul off so you are not stuck managing debris before the new pour.",
  },
  {
    icon: Clock,
    title: "Reliable Scheduling",
    body: "Clear communication on timing, weather, and cure windows — we respect your property and timeline.",
  },
];

const testimonials = [
  {
    quote:
      "They tore out our cracked driveway and poured new broom finish in one coordinated job. Straightforward estimate and the crew left the street clean.",
    name: "James T.",
    role: "Homeowner — Utah County",
  },
  {
    quote:
      "Needed an RV pad beside the shop — level, thick enough for our trailer, and finished on the day they promised.",
    name: "Maria S.",
    role: "Property Owner — Davis County",
  },
  {
    quote:
      "Stamped patio turned out better than the sample board. They explained sealer maintenance up front so we knew what to expect.",
    name: "Chris L.",
    role: "Homeowner — Salt Lake County",
  },
];

const faqs = [
  {
    q: "What areas do you serve?",
    a: "Utah County, Salt Lake County, and Davis County. See each county page for representative cities, or call if you are nearby.",
  },
  {
    q: "Do you handle concrete tearout?",
    a: "Yes — tearout and haul off is a specialty. We remove old flatwork and leave the site ready for new concrete.",
  },
  {
    q: "Do you pour basement foundations?",
    a: "We focus on small footings and foundations for sheds, shops, and similar structures — not full basement foundation packages.",
  },
  {
    q: "How do I get an estimate?",
    a: "Call (801) 599-9951 or use the contact form with your project address, approximate size, and photos if you have them.",
  },
  {
    q: "What finishes do you offer?",
    a: "Standard broom and smooth finishes, plus decorative options including stamped and stained concrete on qualifying projects.",
  },
];

export function HomePage(): JSX.Element {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden px-4 pt-20 pb-32">
        {heroImage ? (
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="h-full w-full object-cover opacity-35 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-card/80 via-background to-background" />
        )}
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl animate-entrance">
            <div className="mb-6 inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Utah · Salt Lake · Davis Counties
              </span>
            </div>
            <h1 className="mb-8 font-display text-6xl uppercase leading-[0.9] tracking-tighter md:text-8xl">
              CONCRETE FLATWORK
              <br />
              <span className="text-primary">IN UTAH</span>
            </h1>
            <p className="mb-10 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground md:text-2xl">
              {COMPANY_NAME} delivers durable driveways, patios, sidewalks, and
              decorative finishes — plus concrete tearout and haul off when the old
              slab has to go.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 bg-primary px-8 py-4 font-display text-xl uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Phone className="size-5" strokeWidth={2.5} />
                Get a Quote
              </a>
              <NavLink
                href="/services"
                className="border-2 border-foreground/20 px-8 py-4 font-display text-xl uppercase tracking-wider transition-colors hover:bg-foreground/5"
              >
                Our Services
              </NavLink>
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-primary">
              {PHONE_DISPLAY} •{" "}
              <a href={EMAIL_HREF} className="underline underline-offset-4">
                {EMAIL_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border lg:grid-cols-4">
          {[
            { label: "Specialty", value: "TEAROUT & HAUL" },
            { label: "Focus", value: "FLATWORK" },
            { label: "Counties", value: "UT · SL · DAVIS" },
            { label: "Finishes", value: "BROOM & DECORATIVE" },
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

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="max-w-4xl text-base leading-relaxed text-muted-foreground">
            {COMPANY_DESCRIPTION}
          </p>
        </div>
      </section>

      <section className="bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-5xl uppercase tracking-tight">
                Core Services
              </h2>
              <p className="mt-2 font-mono text-sm text-primary">
                // FLATWORK · TEAROUT · DECORATIVE
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((s) => {
              const image = getServiceHeroImage(s.slug);
              return (
                <div
                  key={s.id}
                  className="group flex flex-col overflow-hidden border border-border bg-background transition-colors hover:border-primary/50"
                >
                  {image ? (
                    <ClickableImage
                      image={image}
                      className="aspect-[4/3] w-full object-cover transition-opacity group-hover:opacity-90"
                    />
                  ) : null}
                  <NavLink href={s.href} className="flex flex-1 flex-col p-8">
                    <span className="font-mono text-xs text-muted-foreground">
                      [ SERVICE.{s.id} ]
                    </span>
                    <h3 className="mb-4 mt-4 font-display text-3xl uppercase transition-colors group-hover:text-primary">
                      {s.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.blurb}
                    </p>
                    <span className="mt-6 font-mono text-xs text-primary">Learn more →</span>
                  </NavLink>
                </div>
              );
            })}
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

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 font-display text-5xl uppercase leading-none">
              SERVING THE
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
                    <h3 className="flex items-center gap-2 text-lg font-bold uppercase">
                      <p.icon className="size-4 text-primary" />
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-border p-8">
            <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary">
              <MapPin className="size-3" /> Service areas
            </div>
            <ul className="space-y-3">
              {areaLinks.map((area) => (
                <li key={area.href}>
                  <NavLink
                    href={area.href}
                    className="font-display text-2xl uppercase transition-colors hover:text-primary"
                  >
                    {area.label} →
                  </NavLink>
                </li>
              ))}
            </ul>
            <NavLink
              href="/areas"
              className="mt-8 inline-block font-mono text-xs uppercase text-primary"
            >
              View all service areas →
            </NavLink>
          </div>
        </div>
      </section>

      {homeGalleryPreview.length > 0 && (
        <section className="border-y border-border py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="font-display text-5xl uppercase tracking-tight">
                  Project Gallery
                </h2>
                <p className="mt-2 font-mono text-sm text-primary">
                  // REAL WORK ACROSS UTAH
                </p>
              </div>
              <NavLink
                href="/gallery"
                className="font-mono text-xs uppercase text-primary hover:underline"
              >
                View full gallery →
              </NavLink>
            </div>
            <GalleryGrid images={homeGalleryPreview} columns="compact" />
          </div>
        </section>
      )}

      <section className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-2 font-display text-5xl uppercase tracking-tight">
            Client Feedback
          </h2>
          <p className="mb-12 font-mono text-sm text-primary">
            // FROM HOMEOWNERS ACROSS THE VALLEY
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col border border-border bg-background p-8"
              >
                <blockquote className="flex-1 text-base leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-bold uppercase">{t.name}</div>
                  <div className="font-mono text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-5xl uppercase leading-none">
              Frequently
              <br />
              <span className="text-primary">Asked</span>
            </h2>
            <p className="mt-4 font-mono text-sm text-muted-foreground">
              // PROJECT BASICS
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

      <section className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">
            // All services
          </div>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} className="text-sm uppercase hover:text-primary">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
