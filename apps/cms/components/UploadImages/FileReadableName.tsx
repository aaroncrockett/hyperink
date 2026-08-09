import type { ImageFile } from "./types";

type FileReadableNameProps = {
  file: ImageFile;
  files: ImageFile[];
  setFiles: React.Dispatch<React.SetStateAction<ImageFile[]>>;
};

export default function FileReadableName({
  file,
  files,
  setFiles,
}: FileReadableNameProps) {
  function handleOnChange() {
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
  }
  return (
    <input
      type="text"
      className="input"
      placeholder={file.file.name}
      value={file.readableName}
      onChange={handleOnChange}
      name="readable_name"
    />
  );
}
