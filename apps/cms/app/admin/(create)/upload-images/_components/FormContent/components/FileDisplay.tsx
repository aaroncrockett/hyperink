import Image from "next/image";
import type { UploadImageFile } from "../../UploadImageContext";

type FilePreviewProps = {
  file: UploadImageFile;
};

export default function FilePreview({ file }: FilePreviewProps) {
  const src = URL.createObjectURL(file.file);

  return (
    <div className="relative w-[250px] h-[250px] overflow-hidden rounded">
      <Image
        src={src}
        alt={file.readableName || file.file.name}
        fill
        className="object-cover"
      />
    </div>
  );
}
