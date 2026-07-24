"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import ImageClientTrigger from "./ImageClientTrigger";

export function GalleryGrid({ images }: any) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 mx-auto">
      {images.map((img: any, i: number) => (
        <div
          key={img.id}
          className="relative aspect-square overflow-hidden w-60 h-60  drop-shadow-sm"
        >
          <Image src={img.url} alt={img.id} fill className="object-cover" />

          <ImageClientTrigger index={i} />
        </div>
      ))}
    </div>
  );
}
