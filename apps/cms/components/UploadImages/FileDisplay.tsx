import Image from "next/image";
import type { ImageFile } from "./types";

type FilePreviewProps = {
  file: ImageFile;
};

export default function FilePreview({ file }: FilePreviewProps) {
  const src = URL.createObjectURL(file.file);

  return (
    <div className="relative w-62.5 h-62.5 overflow-hidden rounded">
      <Image
        src={src}
        alt={file.readableName || file.file.name}
        fill
        className="object-cover"
      />
    </div>
  );
}
