"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type UploadImageFile = {
  file: File;
  readableName: string;
  imgSetIndex: number;
};

export type UploadImageFiles = UploadImageFile[];

export type ContextType = {
  files: UploadImageFiles;
  setFiles: React.Dispatch<React.SetStateAction<UploadImageFiles>>;
};

const Context = createContext<ContextType | null>(null);

export function useUploadImagesContext() {
  const ctx = useContext(Context);
  if (!ctx)
    throw new Error(
      "useUploadImages Context must be used within UploadImagesProvider",
    );
  return ctx;
}

export function UploadImagesProvider({ children }: { children: ReactNode }) {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <Context.Provider value={{ files, setFiles }}>{children}</Context.Provider>
  );
}
