"use client";

// React
import { useActionState, useState } from "react";

// Hyperink UI
import { Form } from "@hyperinkstudio/ui-react-next/components";
import { FileUpload } from "@skeletonlabs/skeleton-react";
import { FileIcon } from "lucide-react";
// @
import { FLASH_UPLOAD_FORM_LIST } from "@/db/api/flash";

// Local
import { uploadFlashImgAndRecord } from "../action";
import { Heading, Input } from "@/ui";

type UploadOption = "collection" | "single";

type FileMetadata = {
  id: string;
  readable_name: string;
  total_availability: number | "";
};

type FlashActionState = {
  errors: Record<string, string> | null;
};

const initialActionState: FlashActionState = {
  errors: null,
};

export function FlashForm() {
  const [uploadOption, setUploadOption] = useState<UploadOption>("single");

  const [fileMetadata, setFileMetadata] = useState<FileMetadata[]>([]);

  const [actionState, formAction] = useActionState(
    uploadFlashImgAndRecord,
    initialActionState,
  );
  function getFileId(file: File) {
    return `${file.name}-${file.lastModified}`;
  }

  function updateFileMetadata(
    id: string,
    updates: Partial<Omit<FileMetadata, "id">>,
  ) {
    setFileMetadata((prev) =>
      prev.map((file) =>
        file.id === id
          ? {
              ...file,
              ...updates,
            }
          : file,
      ),
    );
  }

  return (
    <>
      <span>Current upload option: {uploadOption}</span>

      <Form action={formAction}>
        <FileUpload
          accept="image/*"
          maxFiles={1}
          name="file"
          onFileAccept={({ files }) => {
            setFileMetadata(
              files.map((file) => ({
                id: getFileId(file),
                readable_name: "",
                total_availability: "",
              })),
            );
          }}
        >
          <FileUpload.Context>
            {(fileUpload) => {
              const hasFile = fileUpload.acceptedFiles.length > 0;

              return (
                <div className="flex flex-col gap-4 p-2 pt-2 mb-4 bg-surface-100-900/60">
                  <FileUpload.Label>
                    <Heading as="h4" text="Upload Flash" />
                  </FileUpload.Label>

                  {!hasFile && (
                    <FileUpload.Dropzone>
                      <FileIcon className="size-10" />

                      <span>Select file or drag here.</span>

                      <FileUpload.Trigger>Browse Files</FileUpload.Trigger>

                      <FileUpload.HiddenInput />
                    </FileUpload.Dropzone>
                  )}

                  <FileUpload.HiddenInput />

                  <FileUpload.ItemGroup>
                    {fileUpload.acceptedFiles.map((file) => {
                      const id = getFileId(file);

                      const metadata = fileMetadata.find(
                        (item) => item.id === id,
                      );

                      return (
                        <li className="flex flex-col gap-4" key={id}>
                          <span className="text-xl font-bold">
                            File: {file.name}
                          </span>

                          {/* <FilePreview file={file} /> */}

                          {FLASH_UPLOAD_FORM_LIST.map((input, i) => {
                            if (!input) return null;

                            return (
                              <Input
                                key={input.id + i}
                                type={input.type}
                                id={`${input.id}`}
                                label={input.label}
                                value={metadata?.[input.id]?.toString() ?? ""}
                                onChange={(e) => {
                                  updateFileMetadata(id, {
                                    [input.id]:
                                      input.type === "number"
                                        ? e.target.value === ""
                                          ? ""
                                          : Number(e.target.value)
                                        : e.target.value,
                                  });
                                }}
                              />
                            );
                          })}
                        </li>
                      );
                    })}
                  </FileUpload.ItemGroup>
                  <input
                    type="hidden"
                    name="file_metadata"
                    value={JSON.stringify(fileMetadata)}
                    readOnly
                  />

                  {hasFile && (
                    <FileUpload.ClearTrigger
                      className="btn preset-tonal-tertiary"
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

        {/* {actionState.error && <p>{actionState.message}</p>} */}
      </Form>
    </>
  );
}
