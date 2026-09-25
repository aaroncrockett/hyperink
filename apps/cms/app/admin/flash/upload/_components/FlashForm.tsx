"use client";
// 3rd party
import { FileUpload } from "@skeletonlabs/skeleton-react";

// React

// import { type ProfileTaggingOptionsDisplay } from "@/business/profileTaggingOpts";
// import { UPLOAD_OPTIONS, type UploadOption } from "@/business/flash";
//
import { FormClient as Form } from "@hyperink/ui-react/components";

import { toLabelValue } from "@hyperink/api-domain-helpers";
import type { TagOpts } from "@hyperink/api/options";
import type { LabelPair } from "../../types";
import { FilePicker } from "./FilePicker";

type FlashFormParams = {
  tagOpts: Partial<TagOpts> | null;
};

export function FlashForm({ tagOpts }: FlashFormParams) {
  let collectionOptions: LabelPair[] = [];

  if (tagOpts?.collections) {
    collectionOptions = tagOpts.collections.map((value) => toLabelValue(value));
  }

  return (
    <>
      <Form>
        <FileUpload
          accept="image/*"
          maxFiles={5}
          name="file"
          onFileAccept={({ files }) => {
            // setFileMetadata(
            //   files.map((file) => ({
            //     id: getFileId(file),
            //     readable_name: "",
            //     description: "",
            //   })),
            // );
          }}
        >
          <FileUpload.Context>
            {(fileUpload) => {
              const hasFile = fileUpload.acceptedFiles.length > 0;

              return (
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 bg-surface-200-800/30 mb-4 p-3 pt-4 rounded">
                  <div className="flex flex-col gap-1.5 bg-surface-200-800 p-3 rounded-xl">
                    {/* <Select
                      label="Upload Type"
                      options={[
                        UPLOAD_OPTIONS.collection,
                        UPLOAD_OPTIONS.general,
                      ]}
                      defaultValue={uploadOption as string}
                      borderCls="border-3 border-surface-100"
                      labelColorCls="text-surface-800"
                      labelSizeCls="text-2xl md:text-3xl"
                      labelCls="uppercase font-display"
                      labelWeightCls="font-normal!"
                      onChange={(e) =>
                        setUploadOption(
                          (e.target as HTMLSelectElement).value as UploadOption,
                        )
                      }
                    /> */}
                    <span className="flex flex-col gap-1 text-base!">
                      <span className="inline-block">
                        Collection:{" "}
                        <span className="italic">
                          {" "}
                          images in a single collection.
                        </span>
                      </span>
                      <span className="inline-block">
                        General:{" "}
                        <span className="italic">
                          {" "}
                          images in any or no collection.
                        </span>
                      </span>
                    </span>
                  </div>

                  {/* {uploadOption === "collection" && collectionOptions && (
                    // <Select
                    //   id="collection"
                    //   label="Collection"
                    //   name="collection"
                    //   options={collectionOptions}
                    //   onChange={(e) =>
                    //     updateFileMetadata(
                    //       "",
                    //       {},
                    //       (e.target as HTMLSelectElement).value,
                    //     )
                    //   }
                    // />
                  )} */}

                  <FileUpload.Label>
                    <h1 className="hI-h1">Upload Flash</h1>
                  </FileUpload.Label>

                  {!hasFile && <FilePicker FileUpload={FileUpload} />}

                  <FileUpload.HiddenInput />

                  {/* <FileItemGroup
                    fileMetadata={fileMetadata}
                    FileUpload={FileUpload}
                    fileUpload={fileUpload}
                    taggingOpts={taggingOpts}
                    updateFileMetadata={updateFileMetadata}
                    uploadOption={uploadOption as string}
                  /> */}
                  {/* 
                  <input
                    type="hidden"
                    name="file_metadata"
                    value={JSON.stringify(fileMetadata)}
                    readOnly
                  /> */}

                  <input
                    type="hidden"
                    name="file_metadata"
                    value="example"
                    readOnly
                  />

                  {/* {hasFile && (
                    <FileUpload.ClearTrigger
                      className="font-bold text-white! btn preset-filled-secondary-500"
                      onClick={() => setFileMetadata([])}
                    >
                      Clear Files
                    </FileUpload.ClearTrigger>
                  )} */}
                </div>
              );
            }}
          </FileUpload.Context>
        </FileUpload>

        {/* {actionState.errors && <ErrorsDisplay errors={actionState.errors} />} */}
      </Form>
    </>
  );
}
