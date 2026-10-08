import type { TattooMetadata, TattooUI } from "../data";
import { z } from "zod";

export type UploadFileUi = Pick<
  TattooUI,
  "collection" | "title" | "description"
>;

export type UploadFileMetadata = Pick<
  TattooMetadata,
  "collection" | "title" | "description" | "name"
>;

export const uploadOptions = {
  collection: {
    label: "Collection",
    value: "collection",
  },
  general: {
    label: "General",
    value: "general",
  },
};

export type UploadOptions = keyof typeof uploadOptions;

export const uploadOptionsLabelPairs = [
  uploadOptions.collection,
  uploadOptions.general,
];

const optionTypeMetadata = {
  opt_type: {
    id: "opt_type",
    label: "Option Type",
    type: "text",
    display: false,
  },
};

export type KeyOfFileMetadataProfile = keyof UploadFileMetadata &
  typeof optionTypeMetadata;

export type UploadFileSchema = {
  [K in KeyOfFileMetadataProfile]: z.ZodType;
};

export const uploadFileMetadata: UploadFileMetadata &
  typeof optionTypeMetadata = {
  opt_type: optionTypeMetadata.opt_type,
  description: {
    id: "description",
    label: "Description",
    type: "text",
    display: true,
  },
  name: {
    id: "name",
    label: "Name",
    type: "hidden",
    display: false,
  },
  collection: {
    id: "collection",
    label: "Collection",
    type: "select",
    display: false,
  },
  title: {
    id: "title",
    label: "Title",
    type: "text",
    display: true,
  },
};

export const UPLOAD_FILE_SCHEMA = z.object({
  collection: z.string(),
  title: z.string(),
  description: z.string().max(125),
  name: z.string(),
}) satisfies z.ZodObject<UploadFileSchema>;
