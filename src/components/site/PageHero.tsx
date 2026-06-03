import type { ReactNode } from "react";

export function PageHero({
  tag,
  title,
  highlight,
  description,
  imageSrc,
  imageAlt = "",
}: {
  tag: string;
  title: string;
  highlight?: string;
  description: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border px-4 pt-20 pb-24">
      {imageSrc ? (
        <div className="absolute inset-0 z-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            width={1920}
            height={1088}
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>
      ) : null}
      <div className="relative z-10 mx-auto max-w-7xl animate-entrance">
        <div className="inline-flex items-center gap-2 border border-primary/30 bg-background/70 px-3 py-1">
          <span className="size-2 rounded-full bg-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {tag}
          </span>
        </div>
        <h1 className="mt-6 font-display text-6xl uppercase leading-[0.85] tracking-tighter md:text-8xl">
          {title}
          {highlight ? (
            <>
              <br />
              <span className="text-primary">{highlight}</span>
            </>
          ) : null}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {description}
        </p>
      </div>
    </section>
  );
}
