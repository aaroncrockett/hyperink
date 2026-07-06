"use client";

import { UploadImagesProvider } from "./UploadImageContext";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <UploadImagesProvider>{children}</UploadImagesProvider>;
}
