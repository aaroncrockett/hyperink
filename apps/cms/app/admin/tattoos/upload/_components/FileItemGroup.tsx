//
import { createRandom12Chars } from "@hyperink/utils";
//
import { Input } from "@hyperink/ui-react/components";

import { type UploadOptions, type UploadFileMetadata } from "../data";
import type { FileUploadType, FileUploadContext } from "../../data";
import { FilePreview } from "./FilePreview";
import { getFileId } from "../helpers";
import { Fragment } from "react/jsx-runtime";

type FileUploadProps = {
  fileUpload: FileUploadContext;
  FileUpload: FileUploadType;
  uploadFileMetadata: UploadFileMetadata;
};

export function FileItemGroup({
  FileUpload,
  fileUpload,
  uploadFileMetadata,
}: FileUploadProps) {
  return (
    <FileUpload.ItemGroup>
      {fileUpload.acceptedFiles.map((file) => {
        const id = getFileId(file);
        return (
          <Fragment key={id}>
            <FileUpload.Item
              className="relative flex flex-col items-start w-full p-4 bg-surface-50-950/80"
              file={file}
            >
              <div className="flex flex-col items-center justify-start w-full gap-2 sm:flex-row sm:items-end">
                <FilePreview file={file} />
                <span className="text-xl font-bold lg:text-2xl">
                  File: {file.name}
                </span>
              </div>
              <Input
                type={uploadFileMetadata.name.type}
                name={uploadFileMetadata.name.id}
                id={uploadFileMetadata.name.id}
                required={true}
                value={file.name + createRandom12Chars()}
                wrapperClassName="hidden"
              />
              <Input
                type={uploadFileMetadata.title.type}
                label={uploadFileMetadata.title.label}
                name={uploadFileMetadata.title.id}
                id={uploadFileMetadata.title.id}
                required={true}
                wrapperClassName="md:w-2/3 xl:w-1/2 w-full"
              />

              <Input
                type={uploadFileMetadata.description.type}
                label={uploadFileMetadata.description.label}
                name={uploadFileMetadata.description.id}
                id={uploadFileMetadata.description.id}
                required={true}
                wrapperClassName="md:w-2/3 xl:w-1/2 w-full"
              />

              <FileUpload.ItemDeleteTrigger className="absolute top-0 right-0 text-2xl font-bold" />
            </FileUpload.Item>
          </Fragment>
        );
      })}
    </FileUpload.ItemGroup>
  );
}
