export * from "./base";
export * from "./types";
// hyperink
import { Client } from "@hyperinkstudio/backend-services";
import type { FlashRecord as FlashRecord_Db } from "@hyperinkstudio/backend-services";
import { getPublicUrl as getPublicUrl_Service } from "@hyperinkstudio/backend-services";
//
import { normalizeToKabobCase } from "@hyperinkstudio/utils";
//
import {
  getFlashOptions as getFlashOptions_Db,
  getFlash as getFlash_Db,
  getFlashByCollection as getFlashByCollection_Db,
  BUCKET_FLASH,
} from "@hyperinkstudio/api";

// limited displays for MVP
export const displayFlashKeys = [
  "id",
  "path",
  "pinned_order",
  "readable_name",
  "collection",
] as const satisfies (keyof FlashRecord)[];

export type FlashRecord = FlashRecord_Db;

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

export const getFlashPublicUrl = async (client: Client, path: string) => {
  const { data } = await getPublicUrl_Service(client, {
    bucket: BUCKET_FLASH,
    path,
  });

  return { data };
};
