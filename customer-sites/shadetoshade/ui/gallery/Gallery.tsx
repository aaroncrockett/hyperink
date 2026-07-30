"use client";
import { GalleryProvider } from "./GalleryProvider";
import { Lightbox } from "./LightBox";
import { GalleryGrid } from "./GalleryGrid";

import type { UserImage } from "@hyperinkstudio/db";

type GalleryProps = {
  images: UserImage[];
};

export default function Gallery({ images }: GalleryProps) {
  return (
    <GalleryProvider>
      <GalleryGrid images={images} />
      <Lightbox images={images} />
    </GalleryProvider>
  );
}
