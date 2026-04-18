import { GalleryProvider } from "./GalleryProvider";
import { Lightbox } from "./LightBox";
import { GalleryGrid } from "./GalleryGrid";

export default function GalleryWrapper({ images }: { images: any }) {
  return (
    <GalleryProvider>
      <GalleryGrid images={images} />
      <Lightbox images={images} />
    </GalleryProvider>
  );
}
