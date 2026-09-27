//
import { toLabelValue } from "@hyperink/api-domain-helpers";
//
import { Input, Select } from "@hyperink/ui-react/components";

import { type UploadOptions, type UploadFileMetadata } from "../data";
import type { FileUploadType, FileUploadContext } from "../../data";
import { FilePreview } from "./FilePreview";
import { getFileId } from "../helpers";
import { Fragment } from "react/jsx-runtime";

type FileUploadProps = {
  fileUpload: FileUploadContext;
  FileUpload: FileUploadType;
  uploadOption: UploadOptions;
  uploadFileMetadata: UploadFileMetadata;
  collectionOpts: string[];
};

export function FileItemGroup({
  FileUpload,
  fileUpload,
  uploadOption,
  collectionOpts,
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
                type={uploadFileMetadata.readable_name.type}
                label={uploadFileMetadata.readable_name.label}
                name={uploadFileMetadata.readable_name.id}
                id={uploadFileMetadata.readable_name.id}
                wrapperClassName="md:w-2/3 xl:w-1/2  w-full"
              />
              <Input
                type={uploadFileMetadata.total_availability.type}
                label={uploadFileMetadata.total_availability.label}
                name={uploadFileMetadata.total_availability.id}
                id={uploadFileMetadata.total_availability.id}
                min={1}
                max={5}
                desc="leave blank if this doesn't apply"
                wrapperClassName="md:w-2/3 xl:w-1/2  w-full"
              />
              {uploadOption && uploadOption === "general" && (
                <Select
                  id={uploadFileMetadata.collection.id}
                  name={uploadFileMetadata.collection.id}
                  label={uploadFileMetadata.collection.label}
                  type={uploadFileMetadata.collection.type}
                  wrapperClassName="md:w-2/3 xl:w-1/2  w-full"
                  options={collectionOpts.map((value: string) =>
                    toLabelValue(value),
                  )}
                  // onChange={(e) => {
                  //   console.log(e);
                  // }}
                />
              )}

              <FileUpload.ItemDeleteTrigger className="absolute top-0 right-0 text-2xl font-bold" />
            </FileUpload.Item>
          </Fragment>
        );
      })}
    </FileUpload.ItemGroup>
  );
}
