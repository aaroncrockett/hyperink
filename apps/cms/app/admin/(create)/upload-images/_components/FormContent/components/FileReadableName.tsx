import type { UploadImageFile } from "../../UploadImageContext";

type FileReadableNameProps = {
  file: UploadImageFile;
  files: UploadImageFile[];
  setFiles: React.Dispatch<React.SetStateAction<UploadImageFile[]>>;
};

export default function FileReadableName({
  file,
  files,
  setFiles,
}: FileReadableNameProps) {
  return (
    <input
      type="text"
      className="input"
      placeholder={file.file.name}
      value={file.readableName}
      onChange={(e) => {
        setFiles(
          files.map((f) =>
            f.imgSetIndex === file.imgSetIndex
              ? {
                  ...f,
                  readableName: e.target.value,
                }
              : f,
          ),
        );
      }}
    />
  );
}
