"use client";
import {
  FilesData,
  FileDisplay,
  FileOrder,
  FileReadableName,
} from "./components/";
import { useUploadImagesContext } from "../UploadImageContext";

import { Heading } from "@inktree/ui-react/components";

type FormContentProps = {
  styles: string[];
  categories: string[];
  groups: string[];
  tags: string[];
};

export default function FormContent({
  styles,
  categories,
  groups,
  tags,
}: FormContentProps) {
  const { setFiles, files } = useUploadImagesContext();

  console.log("FormContent files:", files);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? []);

    setFiles(
      selected.map((file, index) => ({
        file,
        readableName: "",
        imgSetIndex: index,
      })),
    );
  }

  return (
    <div className="grid p-4 border ">
      <Heading text="Upload Files" as="h2" />
      <input
        type="file"
        name="files"
        multiple
        accept="image/*"
        className="input"
        onChange={handleFileChange}
      />
      {/* {files.length && (
        <>
          {files.map((file, index) => (
            <div key={index} className="flex items-center gap-2">
              <FileDisplay file={file} />
            </div>
          ))}
        </>
      )} */}
      {files.length > 1 && (
        <>
          <Heading text="File Order" as="h3" />

          <div className="flex flex-row gap-1">
            {files.map((file, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <FileDisplay file={file} />
                <FileOrder file={file} files={files} setFiles={setFiles} />
              </div>
            ))}
          </div>
        </>
      )}
      {files.length && (
        <>
          <Heading text="File Readable Name" as="h3" />

          {files.map((file, index) => (
            <div key={index} className="flex items-center gap-2">
              <span>{file.readableName || file.file.name}</span>
              <FileReadableName file={file} files={files} setFiles={setFiles} />
            </div>
          ))}
        </>
      )}
      <FilesData
        styles={styles}
        categories={categories}
        groups={groups}
        tags={tags}
      />
    </div>
  );
}
