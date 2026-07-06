import type { UploadImageFile } from "../../UploadImageContext";

type FileOrderProps = {
  file: UploadImageFile;
  files: UploadImageFile[];
  setFiles: React.Dispatch<React.SetStateAction<UploadImageFile[]>>;
};

export default function FileOrder({ file, files, setFiles }: FileOrderProps) {
  return (
    <input
      type="number"
      min={1}
      max={files.length}
      value={file.imgSetIndex + 1}
      className="input"
      onChange={(e) => {
        const newPosition = Number(e.target.value) - 1;

        if (
          Number.isNaN(newPosition) ||
          newPosition < 0 ||
          newPosition >= files.length ||
          newPosition === file.imgSetIndex
        ) {
          return;
        }

        const reordered = [...files];
        const currentIndex = file.imgSetIndex;

        const [moved] = reordered.splice(currentIndex, 1);
        reordered.splice(newPosition, 0, moved);

        setFiles(
          reordered.map((file, index) => ({
            ...file,
            imgSetIndex: index,
          })),
        );
      }}
    />
  );
}
