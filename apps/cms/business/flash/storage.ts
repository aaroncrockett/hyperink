// services

import type { Client, FlashRecord } from "@hyperinkstudio/backend-services";
// api
import { TABLE_FLASH } from "@hyperinkstudio/api";
// business
import { uploadImageAndCreateMetadata as handleUpload } from "@hyperinkstudio/business";
import { getFlashPublicUrl as getFlashPublicUrl_src } from "@hyperinkstudio/business";
import { normalizeToKabobCase } from "@hyperinkstudio/utils";

export const getFlashPublicUrl = getFlashPublicUrl_src;

export const uploadFlashImage = (
  client: Client,
  file: File,
  userId: string,
  params: Partial<FlashRecord>,
) => {
  const normalizedCollection = normalizeToKabobCase(params.collection ?? "");
  const alteredParams = {
    ...params,
    collection: normalizedCollection,
  } as Partial<FlashRecord>;

  return handleUpload(client, file, TABLE_FLASH, userId, alteredParams);
};
