// Next
import Image from "next/image";

type FileProps = {
  file: globalThis.File;
};

export function FilePreview({ file }: FileProps) {
  return (
    <div className="relative w-28 h-28 rounded-xl md:h-32 md:w-32 lg:h-36 lg:w-36">
      <Image
        src={URL.createObjectURL(file)}
        alt="Preview"
        fill
        className="object-cover rounded-xl border-3 border-surface-700-300"
      />
    </div>
  );
}
