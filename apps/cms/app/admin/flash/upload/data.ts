import type { FlashMetadata, FlashUI } from "../data";
import { z } from "zod";

export type UploadFileUi = Pick<
  FlashUI,
  "collection" | "readable_name" | "total_availability" | "description"
>;

export type UploadFileMetadata = Pick<
  FlashMetadata,
  "collection" | "readable_name" | "total_availability" | "description" | "name"
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

type KeyOfFileMetadataProfile = keyof UploadFileMetadata &
  typeof optionTypeMetadata;

type UploadFileSchema = {
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
  readable_name: {
    id: "readable_name",
    label: "Title",
    type: "text",
    display: false,
  },
  total_availability: {
    id: "total_availability",
    label: "Total Availability",
    type: "number",
    display: false,
  },
};

export const UPLOAD_FILE_SCHEMA = z.object({
  collection: z.string(),
  readable_name: z.string(),
  total_availability: z.coerce.number().int().min(1).max(10).optional(),
  description: z.string().max(125),
  name: z.string(),
}) satisfies z.ZodObject<UploadFileSchema>;
