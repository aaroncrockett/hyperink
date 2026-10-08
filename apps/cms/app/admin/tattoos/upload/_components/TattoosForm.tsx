"use client";
//
import { FileUpload } from "@skeletonlabs/skeleton-react";
//
import { useActionState } from "react";

//
import {
  FormClient as Form,
  ErrorDisplay,
} from "@hyperink/ui-react/components";
//
import { uploadFileMetadata } from "../data";

import { fileUploadDataAction } from "../action";
//
import { FilePicker } from "./FilePicker";
import { FileItemGroup } from "./FileItemGroup";

export function TattoosForm() {
  const initState = {
    data: null,
    error: null,
  };

  const [actionState, setActionState] = useActionState(
    fileUploadDataAction,
    initState,
  );

  return (
    <>
      {!actionState?.error && (
        <Form action={setActionState}>
          <FileUpload accept="image/*" maxFiles={5} name="file">
            <FileUpload.Context>
              {(fileUpload) => {
                const hasFile = fileUpload.acceptedFiles.length > 0;

                return (
                  <div className="flex flex-col gap-2 p-3 pt-4 mb-4 rounded sm:gap-3 md:gap-4 bg-surface-200-800/30">
                    <FileUpload.Label>
                      <h2 className="hI-h3">Upload Tattoos</h2>
                    </FileUpload.Label>

                    {!hasFile && <FilePicker FileUpload={FileUpload} />}

                    <FileUpload.HiddenInput />

                    <FileItemGroup
                      FileUpload={FileUpload}
                      fileUpload={fileUpload}
                      uploadFileMetadata={uploadFileMetadata}
                    />

                    <FileUpload.ClearTrigger className="rounded font-bold text-white! btn preset-filled-secondary-500">
                      Clear Files
                    </FileUpload.ClearTrigger>
                  </div>
                );
              }}
            </FileUpload.Context>
          </FileUpload>
        </Form>
      )}

      {actionState.error && <ErrorDisplay error={actionState.error.message} />}
    </>
  );
}
