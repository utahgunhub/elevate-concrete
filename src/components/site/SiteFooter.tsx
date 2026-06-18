import { NavLink } from "@/components/NavLink";
import {
  areaLinks,
  COMPANY_NAME,
  EMAIL_DISPLAY,
  EMAIL_HREF,
  LEGAL_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  serviceLinks,
} from "@/lib/site";

const footerLinkClass =
  "text-neutral-400 transition-colors hover:text-primary";

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/25 bg-black py-16 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="inline-block bg-primary px-2 py-0.5 font-display text-xl tracking-tight text-primary-foreground">
              {COMPANY_NAME.toUpperCase()}
            </div>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
              {LEGAL_NAME}
            </p>
            <p className="mt-4 max-w-sm text-sm text-neutral-400">
              Professional concrete flatwork, tearout, and haul off across Utah County,
              Salt Lake County, and Davis County.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-6 inline-block font-display text-3xl text-primary transition-colors hover:text-primary/90"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={EMAIL_HREF}
              className={`mt-2 block text-sm ${footerLinkClass}`}
            >
              {EMAIL_DISPLAY}
            </a>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
              // Services
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {serviceLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} className={footerLinkClass}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink href="/services" className={footerLinkClass}>
                  All services →
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
              // Company
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <NavLink href="/gallery" className={footerLinkClass}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink href="/about" className={footerLinkClass}>
                  About
                </NavLink>
              </li>
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} className={footerLinkClass}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink href="/areas" className={footerLinkClass}>
                  All service areas
                </NavLink>
              </li>
              <li>
                <NavLink href="/contact" className={footerLinkClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-primary/20 pt-8 text-xs text-neutral-500 md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} {LEGAL_NAME} · {COMPANY_NAME}
          </span>
          <span>
            Website created by{" "}
            <a
              href="https://www.zensitemedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-primary"
            >
              Zensite Media
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
