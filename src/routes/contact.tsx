import type { JSX } from "react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import {
  EMAIL_DISPLAY,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/components/site/SiteHeader";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import contactHero from "@/assets/contact-hero.png";

export function ContactPage(): JSX.Element {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        tag="Dispatch"
        title="GET A"
        highlight="UNIT ROLLING."
        description="For active emergencies, always call. For quotes, scheduled transport, or fleet inquiries, drop us a note."
        imageSrc={contactHero}
        imageAlt="Tow truck arriving for roadside help in a Utah neighborhood"
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-5">
          {/* Contact info */}
          <div className="space-y-6 lg:col-span-2">
            <a
              href={PHONE_HREF}
              className="block border-2 border-urgent bg-urgent/10 p-8 transition-colors hover:bg-urgent/20"
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-urgent">
                <Phone className="size-3" strokeWidth={2.5} />
                24/7 Emergency Dispatch
              </div>
              <div className="mt-3 font-display text-4xl text-foreground md:text-5xl">
                {PHONE_DISPLAY}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Tap to call from mobile
              </div>
            </a>

            <div className="space-y-4">
              {[
                {
                  icon: Clock,
                  label: "Hours",
                  value: "24 hours · 7 days · 365 days",
                },
                {
                  icon: MapPin,
                  label: "Service Area",
                  value: "Utah County · Salt Lake County",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: EMAIL_DISPLAY,
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-start gap-4 border border-border bg-card/40 p-5"
                >
                  <row.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {row.label}
                    </div>
                    <div className="mt-1 text-sm font-bold">
                      {row.label === "Email" ? (
                        <a href={EMAIL_HREF} className="hover:text-primary">
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="border border-border bg-card/40 p-8 md:p-10">
              <div className="font-mono text-xs uppercase tracking-widest text-primary">
                // Non-urgent request form
              </div>
              <h2 className="mt-2 font-display text-3xl uppercase">
                Request a Quote
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                For active emergencies, call dispatch. For scheduled transport,
                fleet accounts, or quote requests, use the form below.
              </p>

              {submitted ? (
                <div className="mt-8 border-2 border-primary bg-primary/10 p-6">
                  <div className="font-display text-2xl uppercase text-primary">
                    Request received.
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A dispatcher will respond within 1 business hour. For
                    immediate help, call {PHONE_DISPLAY}.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-8 space-y-5"
                >
                  <FormField label="Name" name="name" required />
                  <FormField
                    label="Phone"
                    name="phone"
                    type="tel"
                    required
                  />
                  <FormField label="Email" name="email" type="email" />
                  <FormField
                    label="Vehicle Location"
                    name="location"
                    placeholder="e.g. I-15 Exit 272"
                  />
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Service Type
                    </label>
                    <select
                      name="service"
                      className="mt-2 w-full border border-border bg-background px-3 py-3 text-sm focus:border-primary focus:outline-none"
                    >
                      <option>Accident Recovery</option>
                      <option>Flatbed Towing</option>
                      <option>Roadside Assistance</option>
                      <option>Fleet / Scheduled Transport</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Details
                    </label>
                    <textarea
                      name="details"
                      rows={4}
                      className="mt-2 w-full border border-border bg-background px-3 py-3 text-sm focus:border-primary focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary py-4 font-display text-lg uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
      >
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border border-border bg-background px-3 py-3 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
