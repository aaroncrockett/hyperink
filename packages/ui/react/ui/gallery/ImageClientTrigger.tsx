"use client";

import { useGallery } from "./GalleryProvider";

export default function ImageClientTrigger({ index }: { index: number }) {
  const { setIndex } = useGallery();

  return (
    <button onClick={() => setIndex(index)} className="absolute inset-0 z-10" />
  );
}
