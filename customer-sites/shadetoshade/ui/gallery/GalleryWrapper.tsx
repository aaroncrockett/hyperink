"use server";
import Gallery from "./Gallery";

import type { UserImage } from "@hyperinkstudio/db";

type GalleryServerProps = {
  getImages: () => Promise<UserImage[]>;
};

export default async function GalleryServer({ getImages }: GalleryServerProps) {
  const images = await getImages();

  return <Gallery images={images} />;
}
