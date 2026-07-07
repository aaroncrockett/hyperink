import type { ImageFile } from "./types";
type FileOrderProps = {
  index: number;
  files: ImageFile[];
  setFiles: React.Dispatch<React.SetStateAction<ImageFile[]>>;
};

export default function FileOrder({ index, files, setFiles }: FileOrderProps) {
  function handleOnBlur(e: React.FocusEvent<HTMLInputElement>) {
    const newIndex = Number(e.target.value) - 1;

    if (
      Number.isNaN(newIndex) ||
      newIndex < 0 ||
      newIndex >= files.length ||
      newIndex === index
    )
      return;

    setFiles((prev) => {
      const reordered = [...prev];
      const [moved] = reordered.splice(index, 1);
      reordered.splice(newIndex, 0, moved);

      return reordered;
    });
  }
  return (
    <input
      type="number"
      min={1}
      max={files.length}
      defaultValue={index + 1}
      className="input"
      onBlur={(e) => handleOnBlur(e)}
      name="set_order"
    />
  );
}
