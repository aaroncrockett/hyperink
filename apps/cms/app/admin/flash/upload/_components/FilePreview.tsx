// Next
import Image from "next/image";

type FileProps = {
  file: globalThis.File;
};

export function FilePreview({ file }: FileProps) {
  return (
    <div className="relative rounded-xl h-20 w-20 md:h-22 md:w-22 lg:w-25 md:2-25 xl:w-28 xl:h-28">
      <Image
        src={URL.createObjectURL(file)}
        alt="Preview"
        fill
        className="object-cover rounded-xl"
      />
    </div>
  );
}
