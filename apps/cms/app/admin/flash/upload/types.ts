import { FileUpload } from "@skeletonlabs/skeleton-react";

export type FileUploadType = typeof FileUpload;

export type FileUploadContext = Parameters<
  NonNullable<React.ComponentProps<typeof FileUpload.Context>["children"]>
>[0];

export type FileMetadata = {
  id: string;
  readable_name: string;
  collection?: string;
  tags?: string[];
  styles?: string[];
};

export type UpdateFileMetadata = (
  id: string,
  updates: Partial<Omit<FileMetadata, "id">>,
  singleCollection?: string,
) => void;

export type LabelPair = {
  value: string;
  label: string;
};

export type FlashActionState = {
  errors: Record<string, string> | null;
};
