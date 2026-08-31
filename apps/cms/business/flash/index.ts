import { z } from "zod";
export * from "./storage";

//  hyperink utils
import {
  createDataCollection,
  getValuesFromCollection,
} from "@hyperinkstudio/utils";

//
import { updatePinnedFlash as updatePinnedFlash_Db } from "@hyperinkstudio/api";

//
import * as BASE from "@hyperinkstudio/business/flash/base";
//
import {
  type ProfileTaggingOptions as ProfileTaggingOptions_Src,
  displayFlashKeys as displayFlashKeys_src,
  getFlashByDefaultCollection as getFlashByDefaultCollection_src,
  getFlashByCollection as getFlashByCollection_src,
  getFlashDisplays as getFlashDisplays_src,
} from "@hyperinkstudio/business";

import type { FlashRecord as FlashRecord_Db } from "@hyperinkstudio/services";

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

// limited displays for MVP

export const displayFlashKeys = displayFlashKeys_src;

export const getFlashByDefaultCollection = getFlashByDefaultCollection_src;

export const getFlashByCollection = getFlashByCollection_src;

export const getFlashDisplays = getFlashDisplays_src;

export const updatePinnedFlash = updatePinnedFlash_Db;
