import { useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import stuLogo from "@/assets/stu-logo.png";
import { NavLink } from "@/components/NavLink";

const PHONE_DISPLAY = "(801) 900-3869";
const PHONE_HREF = "tel:+18019003869";
const EMAIL_DISPLAY = "Info@servicetowingutah.com";
const EMAIL_HREF = "mailto:Info@servicetowingutah.com";

const serviceLinks = [
  { href: "/services/accident-towing", label: "Accident Towing & Recovery" },
  { href: "/services/flatbed-towing", label: "Flatbed Towing" },
  { href: "/services/emergency-towing", label: "Emergency Towing" },
  { href: "/services/roadside-assistance", label: "Roadside Assistance" },
  { href: "/services/jump-starts", label: "Jump Starts" },
  { href: "/services/lockouts", label: "Lockouts" },
  { href: "/services/fuel-delivery", label: "Fuel Delivery" },
  { href: "/services/winch-outs", label: "Winch-Outs & Recovery" },
  { href: "/services/fleet-towing", label: "Fleet Towing & Transport" },
  { href: "/services/long-distance-towing", label: "Long-Distance Towing" },
  { href: "/services/dead-battery", label: "Dead Battery" },
  { href: "/services/flat-tire", label: "Flat Tires & Tire Change" },
  { href: "/services/engine-problems", label: "Engine Problems" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";

  const navClass = (href: string) =>
    `font-mono text-xs uppercase tracking-widest transition-colors hover:text-primary ${
      currentPath === href || currentPath.startsWith(href + "/")
        ? "text-primary"
        : "text-muted-foreground"
    }`;

  const close = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-primary/20 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <NavLink href="/" className="flex items-center gap-3">
          <img
            src={stuLogo}
            alt="Service Towing Utah logo"
            width={72}
            height={72}
            className="size-18 object-contain"
          />
          <span className="bg-primary px-2 py-0.5 font-display text-lg tracking-tight text-primary-foreground sm:text-xl">
            SERVICE TOWING UTAH
          </span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((o) => !o)}
              className={`${navClass("/services")} flex items-center gap-1`}
            >
              Services
              <ChevronDown
                className={`size-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 w-64 border border-border bg-background shadow-xl">
                <NavLink
                  href="/services"
                  className="block border-b border-border px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-primary hover:bg-card/40"
                  onClick={() => setServicesOpen(false)}
                >
                  All Services →
                </NavLink>
                {serviceLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-xs uppercase hover:bg-card/40 hover:text-primary text-muted-foreground"
                    onClick={() => setServicesOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink href="/coverage" className={navClass("/coverage")}>Coverage</NavLink>
          <NavLink href="/about" className={navClass("/about")}>About</NavLink>
          <NavLink href="/contact" className={navClass("/contact")}>Contact</NavLink>
          <NavLink
            href="/fleet"
            className={`${navClass("/fleet")} tracking-normal`}
            style={{ wordSpacing: "-0.2em" }}
          >
            We Buy Junk Cars
          </NavLink>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 bg-urgent px-3 py-2.5 font-display text-sm text-urgent-foreground transition-colors hover:bg-urgent/90 sm:px-5 sm:text-lg lg:flex"
          >
            <Phone className="size-4 shrink-0" strokeWidth={2.5} />
            <span>CALL NOW: {PHONE_DISPLAY}</span>
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex items-center justify-center border border-border bg-card/40 p-2 text-foreground lg:hidden"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {/* Services accordion */}
            <button
              type="button"
              onClick={() => setMobileServicesOpen((o) => !o)}
              className={`${navClass("/services")} flex items-center justify-between py-3`}
            >
              <span>Services</span>
              <ChevronDown
                className={`size-3 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="mb-2 ml-4 flex flex-col gap-1 border-l-2 border-primary/30 pl-4">
                <NavLink
                  href="/services"
                  className="py-2 font-mono text-[10px] uppercase tracking-widest text-primary"
                  onClick={close}
                >
                  All Services
                </NavLink>
                {serviceLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    className="py-2 text-xs uppercase text-muted-foreground hover:text-primary"
                    onClick={close}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}

            <NavLink href="/coverage" className={`${navClass("/coverage")} py-3`} onClick={close}>Coverage</NavLink>
            <NavLink href="/about" className={`${navClass("/about")} py-3`} onClick={close}>About</NavLink>
            <NavLink href="/contact" className={`${navClass("/contact")} py-3`} onClick={close}>Contact</NavLink>
            <NavLink
              href="/fleet"
              className={`${navClass("/fleet")} tracking-normal py-3`}
              style={{ wordSpacing: "-0.2em" }}
              onClick={close}
            >
              We Buy Junk Cars
            </NavLink>

            <a
              href={PHONE_HREF}
              className="mt-3 inline-flex items-center justify-center gap-2 bg-urgent px-4 py-3 font-display text-base text-urgent-foreground transition-colors hover:bg-urgent/90"
            >
              <Phone className="size-4 shrink-0" strokeWidth={2.5} />
              <span>CALL NOW: {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export { PHONE_DISPLAY, PHONE_HREF, EMAIL_DISPLAY, EMAIL_HREF };
