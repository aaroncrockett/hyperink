"use client";
//
import { FileUpload } from "@skeletonlabs/skeleton-react";
//
import { useState, useActionState } from "react";
//
import { toLabelValue } from "@hyperink/api-domain-helpers";

//
import { FormClient as Form, Select } from "@hyperink/ui-react/components";
//
import {
  uploadOptionsLabelPairs,
  uploadFileMetadata,
  type UploadOptions,
} from "../data";

import { fileUploadDataAction } from "../action";
//
import { FilePicker } from "./FilePicker";
import { FileItemGroup } from "./FileItemGroup";

type FlashFormProps = {
  collectionOpts: string[];
};
export function FlashForm({ collectionOpts }: FlashFormProps) {
  // if (tagOpts?.collections) {
  //   collectionOptions = tagOpts.collections.map((value) => toLabelValue(value));
  // }
  const initState = {
    data: null,
    error: null,
  };

  const defaultUploadOption =
    "general" satisfies UploadOptions as UploadOptions;

  const [uploadOption, setUploadOption] =
    useState<UploadOptions>(defaultUploadOption);

  const [actionState, setActionState] = useActionState(
    fileUploadDataAction,
    initState,
  );

  return (
    <>
      <Form action={setActionState}>
        <FileUpload
          accept="image/*"
          maxFiles={5}
          name="file"
          // onFileAccept={({ files }) => {}}
        >
          <FileUpload.Context>
            {(fileUpload) => {
              const hasFile = fileUpload.acceptedFiles.length > 0;

              return (
                <div className="flex flex-col gap-2 p-3 pt-4 mb-4 rounded sm:gap-3 md:gap-4 bg-surface-200-800/30">
                  <div className="flex flex-col gap-1.5 bg-surface-100-900/80 p-3 border-3 border-surface-200-800 rounded-xl">
                    <Select
                      label="Upload Type"
                      options={uploadOptionsLabelPairs}
                      defaultValue={uploadOptionsLabelPairs[1].value}
                      name={uploadFileMetadata.opt_type.id}
                      id={uploadFileMetadata.opt_type.id}
                      onChange={(e) =>
                        setUploadOption(
                          (e.target as HTMLSelectElement)
                            .value as UploadOptions,
                        )
                      }
                    />
                    <span className="flex flex-col gap-1 text-base!">
                      <span className="inline-block">
                        Collection:{" "}
                        <span className="italic">
                          images in a single collection.
                        </span>
                      </span>
                      <span className="inline-block">
                        General:{" "}
                        <span className="italic">
                          images in any or no collection.
                        </span>
                      </span>
                    </span>
                  </div>

                  {uploadOption && uploadOption === "collection" && (
                    <Select
                      id={uploadFileMetadata.collection.id}
                      name={uploadFileMetadata.collection.id}
                      label={uploadFileMetadata.collection.label}
                      type={uploadFileMetadata.collection.type}
                      options={collectionOpts.map((value) =>
                        toLabelValue(value),
                      )}
                      // onChange={(e) => {
                      //   console.log(e);
                      // }}
                    />
                  )}

                  <FileUpload.Label>
                    <h2 className="hI-h3">Upload Flash</h2>
                  </FileUpload.Label>

                  {!hasFile && <FilePicker FileUpload={FileUpload} />}

                  <FileUpload.HiddenInput />

                  <FileItemGroup
                    FileUpload={FileUpload}
                    fileUpload={fileUpload}
                    uploadOption={uploadOption}
                    uploadFileMetadata={uploadFileMetadata}
                    collectionOpts={collectionOpts}
                  />

                  <FileUpload.ClearTrigger className="rounded font-bold text-white! btn preset-filled-secondary-500">
                    Clear Files
                  </FileUpload.ClearTrigger>
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
