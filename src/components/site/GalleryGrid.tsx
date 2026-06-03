import type { GalleryImage } from "@/lib/gallery-images";
import { GalleryGridWithLightbox } from "@/components/site/ImageLightbox";

export function GalleryGrid({
  images,
  columns = "default",
}: {
  images: GalleryImage[];
  columns?: "default" | "compact";
}) {
  return <GalleryGridWithLightbox images={images} columns={columns} />;
}
