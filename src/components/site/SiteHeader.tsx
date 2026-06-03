import { useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import elevateLogo from "@/assets/elevate.png";
import { NavLink } from "@/components/NavLink";
import {
  areaLinks,
  COMPANY_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  serviceLinks,
} from "@/lib/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";

  const navClass = (href: string) =>
    `font-mono text-xs uppercase tracking-widest transition-colors hover:text-primary ${
      currentPath === href || currentPath.startsWith(href + "/")
        ? "text-primary"
        : "text-neutral-400"
    }`;

  const close = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-primary/25 bg-black">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <NavLink href="/" className="flex shrink-0 items-center gap-2 sm:gap-3">
          <img
            src={elevateLogo}
            alt=""
            aria-hidden
            width={200}
            height={72}
            className="h-12 w-auto object-contain sm:h-14"
          />
          <span className="bg-primary px-2 py-0.5 font-display text-base leading-none tracking-tight text-primary-foreground sm:text-xl">
            {COMPANY_NAME.toUpperCase()}
          </span>
        </NavLink>

        <div className="hidden items-center gap-6 lg:flex">
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
              <div className="absolute left-0 top-full z-50 max-h-[70vh] w-72 overflow-y-auto border border-primary/20 bg-black shadow-xl">
                <NavLink
                  href="/services"
                  className="block border-b border-primary/20 px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-primary hover:bg-white/5"
                  onClick={() => setServicesOpen(false)}
                >
                  All Services →
                </NavLink>
                {serviceLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-xs uppercase text-neutral-400 hover:bg-white/5 hover:text-primary"
                    onClick={() => setServicesOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button
              type="button"
              onClick={() => setAreasOpen((o) => !o)}
              className={`${navClass("/areas")} flex items-center gap-1`}
            >
              Service Areas
              <ChevronDown
                className={`size-3 transition-transform ${areasOpen ? "rotate-180" : ""}`}
              />
            </button>

            {areasOpen && (
              <div className="absolute left-0 top-full z-50 w-56 border border-primary/20 bg-black shadow-xl">
                <NavLink
                  href="/areas"
                  className="block border-b border-primary/20 px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-primary hover:bg-white/5"
                  onClick={() => setAreasOpen(false)}
                >
                  All Areas →
                </NavLink>
                {areaLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-xs uppercase text-neutral-400 hover:bg-white/5 hover:text-primary"
                    onClick={() => setAreasOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink href="/gallery" className={navClass("/gallery")}>
            Gallery
          </NavLink>
          <NavLink href="/about" className={navClass("/about")}>
            About
          </NavLink>
          <NavLink href="/contact" className={navClass("/contact")}>
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 bg-primary px-3 py-2.5 font-display text-sm text-primary-foreground transition-colors hover:bg-primary/90 sm:px-5 sm:text-lg lg:flex"
          >
            <Phone className="size-4 shrink-0" strokeWidth={2.5} />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex items-center justify-center border border-white/20 p-2 text-white lg:hidden"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-primary/20 bg-black px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
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
                    className="py-2 text-xs uppercase text-neutral-400 hover:text-primary"
                    onClick={close}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setMobileAreasOpen((o) => !o)}
              className={`${navClass("/areas")} flex items-center justify-between py-3`}
            >
              <span>Service Areas</span>
              <ChevronDown
                className={`size-3 transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileAreasOpen && (
              <div className="mb-2 ml-4 flex flex-col gap-1 border-l-2 border-primary/30 pl-4">
                <NavLink
                  href="/areas"
                  className="py-2 font-mono text-[10px] uppercase tracking-widest text-primary"
                  onClick={close}
                >
                  All Areas
                </NavLink>
                {areaLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    className="py-2 text-xs uppercase text-neutral-400 hover:text-primary"
                    onClick={close}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}

            <NavLink href="/gallery" className={`${navClass("/gallery")} py-3`} onClick={close}>
              Gallery
            </NavLink>
            <NavLink href="/about" className={`${navClass("/about")} py-3`} onClick={close}>
              About
            </NavLink>
            <NavLink href="/contact" className={`${navClass("/contact")} py-3`} onClick={close}>
              Contact
            </NavLink>

            <a
              href={PHONE_HREF}
              className="mt-3 inline-flex items-center justify-center gap-2 bg-primary px-4 py-3 font-display text-base text-primary-foreground"
            >
              <Phone className="size-4 shrink-0" strokeWidth={2.5} />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export {
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL_DISPLAY,
  EMAIL_HREF,
} from "@/lib/site";
