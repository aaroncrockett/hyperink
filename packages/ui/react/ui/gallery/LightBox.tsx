"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createPortal } from "react-dom";
import { useGallery } from "./GalleryProvider";
import { useEffect } from "react";
import Image from "next/image";

export function Lightbox({ images }: { images: any[] }) {
  const { index, setIndex } = useGallery();

  const close = () => setIndex(null);

  const next = () =>
    setIndex(index === null ? null : (index + 1) % images.length);

  const prev = () =>
    setIndex(
      index === null ? null : (index - 1 + images.length) % images.length,
    );

  useEffect(() => {
    if (index === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  if (index === null) return null;

  return createPortal(
    <div
      onClick={close}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-4 text-white"
      >
        ←
      </button>

      <div className="relative w-full h-full max-h-[85vh] max-w-[90vw]  drop-shadow-sm">
        <Image
          src={images[index].url}
          alt="gallery"
          fill
          className="object-contain"
        />
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-4 text-white"
      >
        →
      </button>
    </div>,
    document.body,
  );
}
