// React
import { Fragment } from "react";
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
    <ul>
      <FileUpload.ItemGroup>
        {fileUpload.acceptedFiles.map((file) => {
          const id = getFileId(file);
          const metadata = fileMetadata.find((item) => item.id === id);
          return (
            <Fragment key={id}>
              <li className="flex flex-col gap-4">
                <div className="flex flex-row items-end gap-2">
                  <FilePreview file={file} />
                  <span className="text-xl font-bold lg:text-2xl">
                    File: {file.name}
                  </span>
                </div>
                {FLASH_UPLOAD_FORM_LIST.map((input, i) => {
                  if (!input) return null;
                  return (
                    <div key={input.id + i}>
                      {styleOptions && input.id === "styles" && (
                        <SelectMulti
                          label="Styles"
                          key={input.id + i + "select-multi"}
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
                          key={input.id + i}
                          type={input.type}
                          id={`${input.id}`}
                          label={input.label}
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
                      onChange={(e) =>
                        updateFileMetadata(id, {
                          collection: (e.target as HTMLSelectElement).value,
                        })
                      }
                    />
                  )}
              </li>
            </Fragment>
          );
        })}
      </FileUpload.ItemGroup>
    </ul>
  );
}
