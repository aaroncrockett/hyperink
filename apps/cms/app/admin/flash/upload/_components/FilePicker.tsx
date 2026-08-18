import type { FileUploadType } from "../types";
import { FileIcon } from "lucide-react";

export function FilePicker({ FileUpload }: { FileUpload: FileUploadType }) {
  return (
    <div>
      <div className="hidden md:block">
        <FileUpload.Dropzone>
          <FileIcon className="size-10" />

          <span>Select file or drag here.</span>

          <FileUpload.Trigger>Browse Files</FileUpload.Trigger>
        </FileUpload.Dropzone>
      </div>

      <div className="flex flex-col  md:hidden">
        <FileUpload.Trigger>Choose Files</FileUpload.Trigger>
      </div>
      <FileUpload.HiddenInput />
    </div>
  );
}
