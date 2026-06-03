import type { JSX } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/SiteHeader";

export function DeadBatteryPage(): JSX.Element {
  return (
    <SiteLayout>
      {/* Diagnostic style header */}
      <section className="border-b border-border bg-background py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">// Dead Battery — Utah</span>
              <h1 className="mt-4 font-display text-6xl uppercase leading-[0.85] tracking-tighter md:text-8xl">
                DEAD<br /><span className="text-primary">BATTERY</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Won't start? We respond to dead battery situations across Utah County and Salt Lake County 24 hours a day.
              </p>
              <a href={PHONE_HREF} className="mt-8 inline-block bg-primary px-8 py-4 font-display text-xl uppercase text-primary-foreground">
                Call {PHONE_DISPLAY}
              </a>
            </div>
            {/* Diagnostic panel */}
            <div className="border border-border bg-card/40 p-8 font-mono text-sm">
              <div className="text-primary uppercase tracking-widest text-xs mb-6">// Battery Status Diagnostic</div>
              {[
                { label: "Engine cranks slowly", status: "CHECK BATTERY" },
                { label: "No crank at all", status: "LIKELY DEAD" },
                { label: "Clicking sound only", status: "DEAD OR CABLE" },
                { label: "Interior lights dim", status: "LOW CHARGE" },
                { label: "Battery warning light on", status: "NEEDS SERVICE" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between border-b border-border py-3 last:border-0">
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className="text-primary text-xs">{row.status}</span>
                </div>
              ))}
              <div className="mt-6 border-t border-primary pt-4 text-primary uppercase tracking-widest text-xs">
                All cases → Call {PHONE_DISPLAY}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body copy */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl space-y-5 px-4 text-base leading-relaxed text-muted-foreground">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">// What Happens When You Call</div>
          <h2 className="font-display text-4xl uppercase text-foreground">Quick response for battery problems</h2>
          <p>
            A dead battery is one of the most common reasons drivers call for roadside help. It can happen anywhere — in a parking lot, at home, or on a highway shoulder. When it does, Service Towing Utah sends a driver to your location with professional battery jump-starting equipment to get you moving again.
          </p>
          <p>
            If a jump start is enough to get your vehicle started, you are free to go. We recommend driving straight to an auto parts store or shop to have the battery tested if it has been dying repeatedly or is more than three to four years old.
          </p>
          <p>
            If your battery is completely dead and cannot hold a charge, or if there is an underlying electrical issue, we can tow your vehicle to the shop of your choice. We make the process easy — one call handles both the roadside response and the tow if needed.
          </p>
          <p>
            Available 24 hours across Provo, Orem, Lehi, Salt Lake City, Sandy, Draper, Murray, Taylorsville, and all surrounding cities. Call {PHONE_DISPLAY} anytime.
          </p>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
