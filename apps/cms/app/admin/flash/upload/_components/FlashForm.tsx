"use client";
// 3rd party
import { FileUpload } from "@skeletonlabs/skeleton-react";

// React
import { useActionState, useState } from "react";

// Hyperink
import { type ProfileTaggingOptionsDisplay } from "@/business/profileTaggingOpts";
import { UPLOAD_OPTIONS, type UploadOption } from "@/business/flash";
//
import { Form, FormMetaErrors } from "@hyperinkstudio/ui-react-next/components";

// Local @
import { Heading, Select } from "@/ui";
//
import { toLabelValue } from "@hyperinkstudio/utils";

// Local
import { uploadFlashImgAndRecord } from "../action";
import { getFileId } from "../helpers";
import type { LabelPair, FlashActionState } from "../types";
//
import { FilePicker } from "./FilePicker";
import { FileItemGroup } from "./FileItemGroup";
//
import { useFileMetadata } from "../hooks";

const initialActionState: FlashActionState = {
  errors: null,
};

type FlashFormParams = {
  taggingOpts: Partial<ProfileTaggingOptionsDisplay> | null;
};

export function FlashForm({ taggingOpts }: FlashFormParams) {
  const { fileMetadata, setFileMetadata, updateFileMetadata } =
    useFileMetadata();

  const [uploadOption, setUploadOption] = useState<UploadOption>(
    UPLOAD_OPTIONS.collection.value as UploadOption,
  );

  const [actionState, formAction] = useActionState(
    uploadFlashImgAndRecord,
    initialActionState,
  );

  let collectionOptions: LabelPair[] = [];

  if (taggingOpts?.collections) {
    collectionOptions = taggingOpts.collections.map((value) =>
      toLabelValue(value),
    );
  }

  return (
    <>
      <Form action={formAction}>
        <FileUpload
          accept="image/*"
          maxFiles={5}
          name="file"
          onFileAccept={({ files }) => {
            setFileMetadata(
              files.map((file) => ({
                id: getFileId(file),
                readable_name: "",
              })),
            );
          }}
        >
          <FileUpload.Context>
            {(fileUpload) => {
              const hasFile = fileUpload.acceptedFiles.length > 0;

              return (
                <div className="flex flex-col gap-2 p-3 pt-4 mb-4 rounded sm:gap-3 md:gap-4 bg-surface-200-800/30">
                  <div className="flex flex-col gap-1.5 bg-surface-200-800 rounded-xl p-3">
                    <Select
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
                    />
                    <span className="text-base! flex flex-col gap-1">
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

                  {uploadOption === "collection" && collectionOptions && (
                    <Select
                      id="collection"
                      label="Collection"
                      name="collection"
                      options={collectionOptions}
                      onChange={(e) =>
                        updateFileMetadata(
                          "",
                          {},
                          (e.target as HTMLSelectElement).value,
                        )
                      }
                    />
                  )}

                  <FileUpload.Label>
                    <Heading
                      as="h4"
                      fontFaceCls="font-display!"
                      uppercaseCls="uppercase"
                      text="Upload Flash"
                    />
                  </FileUpload.Label>

                  {!hasFile && <FilePicker FileUpload={FileUpload} />}

                  <FileUpload.HiddenInput />

                  <FileItemGroup
                    fileMetadata={fileMetadata}
                    FileUpload={FileUpload}
                    fileUpload={fileUpload}
                    taggingOpts={taggingOpts}
                    updateFileMetadata={updateFileMetadata}
                    uploadOption={uploadOption as string}
                  />

                  <input
                    type="hidden"
                    name="file_metadata"
                    value={JSON.stringify(fileMetadata)}
                    readOnly
                  />

                  {hasFile && (
                    <FileUpload.ClearTrigger
                      className="btn preset-filled-secondary-500 text-white! font-bold"
                      onClick={() => setFileMetadata([])}
                    >
                      Clear Files
                    </FileUpload.ClearTrigger>
                  )}
                </div>
              );
            }}
          </FileUpload.Context>
        </FileUpload>

        {actionState.errors && <FormMetaErrors errors={actionState.errors} />}
      </Form>
    </>
  );
}
