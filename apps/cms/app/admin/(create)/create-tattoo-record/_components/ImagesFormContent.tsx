"use client";
import {
  FilesData,
  FileDisplay,
  SetOrder,
  FileReadableName,
  ImagesUpload,
} from "@/partials/UploadImages";

import { type ImageFile } from "@/partials/UploadImages/types";

import { useState } from "react";
import { Heading } from "@hyperinkstudio/ui-react/components";

export type FormContentProps = {
  styles: string[];
  categories: string[];
  groups: string[];
  tags: string[];
};

export function ImagesFormContent({
  styles,
  categories,
  groups,
  tags,
}: FormContentProps) {
  const [files, setFiles] = useState<ImageFile[]>([]);

  return (
    <div className="grid p-4 border ">
      <Heading text="Upload Files" as="h2" />
      <p>Upload an image or set of images related.</p>
      <ImagesUpload setFiles={setFiles} />
      {files.length > 1 && (
        <>
          <Heading text="File Order" as="h3" />

          <div className="flex flex-row gap-1">
            {files.map((file, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <FileDisplay file={file} />
                <SetOrder
                  key={file.file.name + index}
                  index={index}
                  files={files}
                  setFiles={setFiles}
                />
              </div>
            ))}
          </div>
        </>
      )}

      {files.length > 0 && (
        <>
          <Heading text="File Readable Name" as="h3" />
          <div className="flex flex-row gap-1">
            {files.map((file, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <span>{file.readableName || file.file.name}</span>
                <FileReadableName
                  file={file}
                  files={files}
                  setFiles={setFiles}
                />
              </div>
            ))}
          </div>
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
