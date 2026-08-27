import { z } from "zod";
export * from "./upload";

//  hyperink utils
import {
  createDataCollection,
  getValuesFromCollection,
} from "@hyperinkstudio/utils";
//
import { Client } from "@hyperinkstudio/backend-services";
//
import { getFlash as getFlash_Db } from "@hyperinkstudio/api";
//
import * as BASE from "@hyperinkstudio/business/flash/base";
//
import {
  type ProfileTaggingOptions as ProfileTaggingOptions_Src,
  type ProfileTaggingOptionsKeys as ProfileTaggingOptionsKeys_Src,
} from "@hyperinkstudio/business/";

import type { FlashRecord as FlashRecord_Db } from "@hyperinkstudio/backend-services";

export type FlashRecord = FlashRecord_Db;

export * from "./taggingOpts";

const BASE_FORM_DATA = {
  readable_name: {
    ...BASE.READABLE_NAME,
  },
  styles: {
    ...BASE.FLASH_STYLES,
  },
};

export const FLASH_UPLOAD_FORM_DATA = createDataCollection(BASE_FORM_DATA);

export const FLASH_UPLOAD_FORM_BY_COLLECTION_DATA = createDataCollection({
  ...BASE_FORM_DATA,
  collection: {
    ...BASE.FLASH_COLLECTION,
  },
});

export const FLASH_UPLOAD_FORM_LIST = getValuesFromCollection(
  FLASH_UPLOAD_FORM_DATA,
);

export const FLASH_UPLOAD_FORM_BY_COLLECTION_LIST = getValuesFromCollection(
  FLASH_UPLOAD_FORM_BY_COLLECTION_DATA,
);

export const FLASH_UPLOAD_FORM_SCHEMA = z.array(
  z.object({
    readable_name: z.string().min(1),
    total_availability: z.coerce.number().int().min(1).max(10),
    collection: z.string().min(1).optional(),
    styles: z.array(z.string()).optional(),
  }),
);

export const FLASH_FILE_SCHEMA = z
  .instanceof(File)
  .refine((file: File) => file.size > 0, "File is empty.")
  .refine(
    (file) => file.size <= 10 * 1024 * 1024,
    "File must be 10 MB or smaller.",
  )
  .refine(
    (file) =>
      ["image/jpeg", "image/png", "image/webp", "image/avif"].includes(
        file.type,
      ),
    "Unsupported image type.",
  );

export const UPLOAD_OPTIONS = {
  collection: {
    label: "Collection",
    value: "collection",
  },
  general: {
    label: "General",
    value: "general",
  },
};

export type UploadOption = keyof typeof UPLOAD_OPTIONS;

export type ProfileTaggingOptions = ProfileTaggingOptions_Src;
export type ProfileTaggingOptionsKeys = ProfileTaggingOptionsKeys_Src;

export const getFlashDisplays = async (client: Client) => {
  return await getFlash_Db(
    client,
    [
      "collection",
      "meta_data",
      "name",
      "notes",
      "path",
      "pinned_order",
      "readable_name",
      "remaining_availability",
      "sold_at",
      "styles",
      "tags",
      "total_availability",
    ],
    30,
  );
};
