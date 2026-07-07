// FileUpload.tsx
"use client";

import type { ImageFile } from "./types";

type Props = {
  setFiles: React.Dispatch<React.SetStateAction<ImageFile[]>>;
};

export default function ImagesUpload({ setFiles }: Props) {
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? []);

    setFiles(
      selected.map((file, index) => ({
        file,
        readableName: "",
        imgSetIndex: index.toString(),
      })),
    );
  }

  return (
    <input
      type="file"
      name="files"
      multiple
      accept="image/*"
      className="input"
      onChange={handleFileChange}
    />
  );
}
