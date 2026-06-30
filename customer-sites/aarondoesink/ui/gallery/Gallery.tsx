import { GalleryProvider } from "./GalleryProvider";
import { Lightbox } from "./LightBox";
import { GalleryGrid } from "./GalleryGrid";

import type { UserImage } from "@inktree/db";

type GalleryProps = {
  getImages: () => Promise<UserImage[]>;
};

export default async function Gallery({ getImages }: GalleryProps) {
  const images = await getImages();

  return (
    <GalleryProvider>
      <GalleryGrid images={images} />
      <Lightbox images={images} />
    </GalleryProvider>
  );
}
