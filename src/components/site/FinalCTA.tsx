import { PHONE_DISPLAY, PHONE_HREF } from "./SiteHeader";
import { NavLink } from "@/components/NavLink";

export function FinalCTA() {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <div className="font-mono text-xs uppercase tracking-widest opacity-70">
          // Emergency Dispatch
        </div>
        <h2 className="mt-4 font-display text-6xl uppercase tracking-tighter md:text-8xl">
          STRANDED NOW?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base md:text-lg">
          One call. Live operator. Closest unit dispatched to your location across
          Utah County and Salt Lake County.
        </p>
        <a
          href={PHONE_HREF}
          className="mt-10 inline-block bg-background px-8 py-5 font-display text-3xl text-foreground transition-transform hover:scale-105 md:px-12 md:py-6 md:text-4xl"
        >
          {PHONE_DISPLAY}
        </a>
        <div className="mt-12 flex flex-wrap justify-center gap-6 font-mono text-[10px] font-bold uppercase tracking-widest md:gap-12 md:text-xs">
          <span>24/7 SUPPORT</span>
          <span>UTAH COUNTY</span>
          <span>SALT LAKE COUNTY</span>
          <NavLink href="/contact" className="underline underline-offset-4">
            REQUEST NON-URGENT QUOTE
          </NavLink>
        </div>
      </div>
    </section>
  );
}
