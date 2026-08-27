// React

// hyperink
import { SelectMulti } from "@hyperinkstudio/ui-react-next/components";
//
import { toLabelValue } from "@hyperinkstudio/utils";
// @ business
import { FLASH_UPLOAD_FORM_LIST, UPLOAD_OPTIONS } from "@/business/flash";
// import {  type UploadOption } from "@/business/flash";

import { Input, Select } from "@/ui";
import { type ProfileTaggingOptionsDisplay } from "@/business/profileTaggingOpts";

// Local
import type {
  FileUploadType,
  FileUploadContext,
  FileMetadata,
  UpdateFileMetadata,
  LabelPair,
} from "../types";
import { FilePreview } from "./FilePreview";
import { getFileId } from "../helpers";
import { Fragment } from "react/jsx-runtime";

type FileUploadProps = {
  fileMetadata: FileMetadata[];
  fileUpload: FileUploadContext;
  FileUpload: FileUploadType;
  taggingOpts: Partial<ProfileTaggingOptionsDisplay> | null;
  uploadOption: string;
  updateFileMetadata: UpdateFileMetadata;
};

export function FileItemGroup({
  fileMetadata,
  FileUpload,
  fileUpload,
  taggingOpts,
  updateFileMetadata,
  uploadOption,
}: FileUploadProps) {
  let styleOptions: LabelPair[] = [];
  let collectionOptions: LabelPair[] = [];

  if (taggingOpts?.collections) {
    collectionOptions = taggingOpts.collections.map((value) =>
      toLabelValue(value),
    );
  }

  if (taggingOpts?.styles) {
    styleOptions = taggingOpts.styles.map((value) => toLabelValue(value));
  }
  return (
    <FileUpload.ItemGroup>
      {fileUpload.acceptedFiles.map((file) => {
        const id = getFileId(file);
        const metadata = fileMetadata.find((item) => item.id === id);
        return (
          <Fragment key={id}>
            <FileUpload.Item
              className="relative flex flex-col w-full"
              file={file}
            >
              <div className="flex flex-col items-center w-full gap-2 sm:flex-row sm:items-end">
                <FilePreview file={file} />
                <span className="text-xl font-bold lg:text-2xl">
                  File: {file.name}
                </span>
              </div>
              {FLASH_UPLOAD_FORM_LIST.map((input, i) => {
                if (!input) return null;
                return (
                  <div className="w-full" key={input.id + i}>
                    {styleOptions && input.id === "styles" && (
                      <SelectMulti
                        label="Styles"
                        cls="w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
                        options={styleOptions}
                        value={metadata?.styles ?? []}
                        onChange={(values) =>
                          updateFileMetadata(id, {
                            styles: values,
                          })
                        }
                      />
                    )}

                    {input.type === "text" && (
                      <Input
                        type={input.type}
                        id={`${input.id}`}
                        label={input.label}
                        inputCls="w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
                        value={
                          metadata?.[
                            input.id as keyof FileMetadata
                          ]?.toString() ?? ""
                        }
                        onChange={(e) => {
                          const value = (e.target as HTMLInputElement).value;
                          updateFileMetadata(id, {
                            [input.id as keyof FileMetadata]: value,
                          });
                        }}
                      />
                    )}
                  </div>
                );
              })}
              {uploadOption === UPLOAD_OPTIONS.general.value &&
                collectionOptions && (
                  <Select
                    id={`collection-${id}`}
                    label="Collection"
                    options={collectionOptions}
                    value={metadata?.collection ?? ""}
                    inputCls="w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
                    onChange={(e) =>
                      updateFileMetadata(id, {
                        collection: (e.target as HTMLSelectElement).value,
                      })
                    }
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
