import { GalleryProvider } from "./GalleryProvider";
import { Lightbox } from "./LightBox";
import { GalleryGrid } from "./GalleryGrid";

export const dynamic = "force-dynamic";

import { createServerClientAndAuth } from "@/utils/db/server";

import { getTattooImagesByGroup } from "@hyperinkstudio/db";

const authedClient = await createServerClientAndAuth();

const images = await getTattooImagesByGroup(
  authedClient,
  {
    name: "groups",
    value: ["portfolio-tattoos"],
  },
  10,

  {
    cache: "no-store",
  },
);

export default function Gallery() {
  return (
    <GalleryProvider>
      <GalleryGrid images={images} />
      <Lightbox images={images} />
    </GalleryProvider>
  );
}
