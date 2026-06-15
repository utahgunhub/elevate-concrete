import type { FormEvent, JSX } from "react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { NavLink } from "@/components/NavLink";
import { sendContactForm } from "@/lib/emailjs";
import { PHONE_DISPLAY } from "@/lib/site";
import { Loader2, Star } from "lucide-react";

const GOOGLE_REVIEWS_URL = "https://g.page/r/CRh95-Ru4z0KEAE/review";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ReviewPage(): JSX.Element {
  const [rating, setRating] = useState<number | null>(null);
  const [showLowRatingForm, setShowLowRatingForm] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleStarClick(value: number): void {
    setRating(value);
    if (value >= 4) {
      window.location.assign(GOOGLE_REVIEWS_URL);
      return;
    }
    setShowLowRatingForm(true);
    setStatus("idle");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (rating === null || rating > 3) return;

    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();

    try {
      await sendContactForm({
        name: `${firstName} ${lastName}`.trim(),
        phone: String(formData.get("phone") ?? ""),
        email: String(formData.get("email") ?? ""),
        location: "Review feedback",
        service: `Private review (${rating}/5 stars)`,
        details: `Rating: ${rating} out of 5 stars\n\n${String(formData.get("message") ?? "")}`,
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <SiteLayout>
      <PageHero
        tag="Feedback"
        title="HOW DID"
        highlight="WE DO?"
        description="Your experience matters. If we poured for you, a quick rating helps other Utah homeowners—and honest feedback helps us stay sharp."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="border border-border bg-card/40 p-8 md:p-10">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              // Rate your experience
            </div>
            <h2 className="mt-2 font-display text-3xl uppercase">Tap the stars</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Select 1 to 5 stars that match your experience.
            </p>

            <div className="mt-8 border-2 border-primary/20 bg-primary/5 p-6 sm:p-8">
              <div
                className="flex justify-center gap-1 sm:gap-2"
                role="group"
                aria-label="Rate your experience from 1 to 5 stars"
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => handleStarClick(value)}
                    className="rounded-sm p-2 transition-all hover:scale-110 hover:bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:p-3"
                    aria-label={`${value} star${value === 1 ? "" : "s"}`}
                  >
                    <Star
                      className={`size-11 sm:size-14 ${
                        rating !== null && value <= rating
                          ? "fill-primary text-primary"
                          : "text-muted-foreground/35"
                      }`}
                      strokeWidth={rating !== null && value <= rating ? 0 : 1.25}
                    />
                  </button>
                ))}
              </div>
              <p className="mt-4 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {rating === null ? "Select 1 to 5 stars" : "Thank you"}
              </p>
            </div>

            {showLowRatingForm && rating !== null && rating <= 3 ? (
              <div className="mt-10 border-t border-border pt-10">
                <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
                <h3 className="mt-8 font-display text-2xl uppercase md:text-3xl">
                  Let us make it right
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  We are sorry we missed the mark. Share what happened and we will reach out
                  personally—usually within one business day.
                </p>

                {status === "success" ? (
                  <div className="mt-8 border-2 border-primary bg-primary/10 p-6">
                    <div className="font-display text-2xl uppercase text-primary">
                      Feedback received.
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Thank you for your feedback. A member of our team will follow up with you
                      soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    {status === "error" ? (
                      <div className="border border-destructive bg-destructive/10 p-4 text-sm text-destructive">
                        Something went wrong sending your feedback. Please call {PHONE_DISPLAY} or
                        try again.
                      </div>
                    ) : null}

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <FormField
                        label="First name"
                        name="firstName"
                        required
                        autoComplete="given-name"
                        disabled={status === "submitting"}
                      />
                      <FormField
                        label="Last name"
                        name="lastName"
                        required
                        autoComplete="family-name"
                        disabled={status === "submitting"}
                      />
                    </div>
                    <FormField
                      label="Email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      disabled={status === "submitting"}
                    />
                    <FormField
                      label="Phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      disabled={status === "submitting"}
                    />
                    <div>
                      <label
                        htmlFor="message"
                        className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                      >
                        What can we improve?<span className="text-primary"> *</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        disabled={status === "submitting"}
                        placeholder="Project address or details help us look up your job."
                        className="mt-2 min-h-[120px] w-full resize-y border border-border bg-background px-3 py-3 text-sm focus:border-primary focus:outline-none disabled:opacity-60"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="flex w-full items-center justify-center gap-2 bg-primary py-4 font-display text-lg uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="size-5 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        "Send feedback"
                      )}
                    </button>
                  </form>
                )}
              </div>
            ) : null}

            <p className="mt-10 text-center text-sm text-muted-foreground">
              Prefer to browse?{" "}
              <NavLink
                href="/"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Back to home
              </NavLink>{" "}
              or{" "}
              <NavLink
                href="/gallery"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                see our work
              </NavLink>
              .
            </p>
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
  autoComplete,
  disabled,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  disabled?: boolean;
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
        autoComplete={autoComplete}
        disabled={disabled}
        className="mt-2 w-full border border-border bg-background px-3 py-3 text-sm focus:border-primary focus:outline-none disabled:opacity-60"
      />
    </div>
  );
}
