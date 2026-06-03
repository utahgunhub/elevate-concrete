import { EMAIL_DISPLAY, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from "./SiteHeader";
import { NavLink } from "@/components/NavLink";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="bg-primary px-2 py-0.5 inline-block font-display text-xl tracking-tight text-primary-foreground">
              SERVICE TOWING UTAH
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Professional 24-hour towing and roadside assistance across Utah County
              and Salt Lake County. Licensed, insured, and always on call.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-6 inline-block font-display text-3xl text-primary"
            >
              {PHONE_DISPLAY}
            </a>
            <a href={EMAIL_HREF} className="mt-2 block text-sm text-muted-foreground hover:text-primary">
              {EMAIL_DISPLAY}
            </a>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
              // Services
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <NavLink href="/services/accident-towing" className="hover:text-primary">
                  Accident Towing & Recovery
                </NavLink>
              </li>
              <li>
                <NavLink href="/services/flatbed-towing" className="hover:text-primary">
                  Flatbed Towing
                </NavLink>
              </li>
              <li>
                <NavLink href="/services/roadside-assistance" className="hover:text-primary">
                  Roadside Assistance
                </NavLink>
              </li>
              <li>
                <NavLink href="/services/fleet-towing" className="hover:text-primary">
                  Fleet Towing & Transport
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
                <NavLink href="/about" className="hover:text-primary">About</NavLink>
              </li>
              <li>
                <NavLink href="/fleet" className="hover:text-primary">We Buy Junk Cars</NavLink>
              </li>
              <li>
                <NavLink href="/coverage" className="hover:text-primary">Coverage Area</NavLink>
              </li>
              <li>
                <NavLink href="/contact" className="hover:text-primary">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Service Towing Utah. Licensed & Insured.</span>
          <span className="font-mono uppercase tracking-widest">
            Available 24 / 7 / 365
          </span>
        </div>
      </div>
    </footer>
  );
}
