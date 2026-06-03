import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { GalleryImage } from "@/lib/gallery-images";

export function ImageLightbox({
  image,
  onClose,
}: {
  image: GalleryImage | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={image !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[min(96vw,72rem)] border-border bg-black/95 p-2 sm:p-4">
        <DialogTitle className="sr-only">{image?.alt ?? "Project photo"}</DialogTitle>
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            className="mx-auto max-h-[85vh] w-auto max-w-full object-contain"
          />
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

export function ClickableImage({
  image,
  className,
  onClick,
}: {
  image: GalleryImage;
  className?: string;
  /** Called before opening lightbox (e.g. stopPropagation inside links). */
  onClick?: (e: React.MouseEvent) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          onClick?.(e);
          setOpen(true);
        }}
        className="block w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={`View full size: ${image.alt}`}
      >
        <img src={image.src} alt={image.alt} loading="lazy" className={className} />
      </button>
      <ImageLightbox image={open ? image : null} onClose={() => setOpen(false)} />
    </>
  );
}

/** One lightbox for a grid — click any thumbnail to view full size. */
export function GalleryGridWithLightbox({
  images,
  columns = "default",
}: {
  images: GalleryImage[];
  columns?: "default" | "compact";
}) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  if (images.length === 0) return null;

  const gridClass =
    columns === "compact"
      ? "grid gap-2 sm:grid-cols-2 md:grid-cols-3"
      : "grid gap-3 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <ul className={gridClass}>
        {images.map((image) => (
          <li key={image.src} className="group overflow-hidden border border-border bg-card/30">
            <button
              type="button"
              onClick={() => setSelected(image)}
              className="block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`View full size: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </button>
          </li>
        ))}
      </ul>
      <ImageLightbox image={selected} onClose={() => setSelected(null)} />
    </>
  );
}
