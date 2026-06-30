"use client";

import { createContext, useContext, useState } from "react";

type GalleryContextType = {
  index: number | null;
  setIndex: (i: number | null) => void;
};

const GalleryContext = createContext<GalleryContextType | null>(null);

export function GalleryProvider({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <GalleryContext.Provider value={{ index, setIndex }}>
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  const ctx = useContext(GalleryContext);
  if (!ctx) throw new Error("useGallery must be used inside provider");
  return ctx;
}
