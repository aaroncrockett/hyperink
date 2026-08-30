import { z } from "zod";
export * from "./storage";

//  hyperink utils
import {
  createDataCollection,
  getValuesFromCollection,
  normalizeToKabobCase,
} from "@hyperinkstudio/utils";
//
import { Client } from "@hyperinkstudio/backend-services";
//
import {
  getFlashOptions as getFlashOptions_Db,
  getFlash as getFlash_Db,
  getFlashByCollection as getFlashByCollection_Db,
  updatePinnedFlash as updatePinnedFlash_Db,
} from "@hyperinkstudio/api";

//
import * as BASE from "@hyperinkstudio/business/flash/base";
//
import { type ProfileTaggingOptions as ProfileTaggingOptions_Src } from "@hyperinkstudio/business/";

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
const displayFlashKeys = [
  "id",
  "path",
  "pinned_order",
  "readable_name",
  "collection",
] as const satisfies (keyof FlashRecord)[];

export type DisplayFlash = Pick<FlashRecord, (typeof displayFlashKeys)[number]>;

export const getFlashByDefaultCollection = async (client: Client) => {
  const { data: defaultCollectionArr, error } = await getFlashOptions_Db(
    client,
    ["default_collection"],
  );

  const defaultCollection = defaultCollectionArr?.[0]
    ?.default_collection as string;

  if (error || !defaultCollection) {
    console.error("there is a problem with the default collection");
  }

  const { data, error: dbError } = await getFlashByCollection_Db(
    client,
    defaultCollection,
    displayFlashKeys,
    30,
  );

  const flashData = data as DisplayFlash[];

  if (dbError) {
    console.error("error with getFlashByCollection_Db");
    console.error(dbError);
  }

  return {
    collection: defaultCollection,
    data: flashData,
    error: dbError,
  };
};

export const getFlashByCollection = async (
  client: Client,
  collection: string,
) => {
  const normalizedCollection = normalizeToKabobCase(collection);
  const { data, error } = await getFlashByCollection_Db(
    client,
    normalizedCollection,
    displayFlashKeys,
    30,
  );

  if (error) {
    console.error(error);
  }

  const flashData = data as DisplayFlash[];

  return { data: flashData, error };
};

export const getFlashDisplays = async (client: Client) => {
  const { data, error } = await getFlash_Db(client, displayFlashKeys, 30);
  const flashData = data as DisplayFlash[];
  return { data: flashData, error };
};

export const updatePinnedFlash = updatePinnedFlash_Db;
