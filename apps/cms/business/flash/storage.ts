// services
import { getPublicUrl as getPublicUrl_Service } from "@hyperinkstudio/backend-services";
import type { Client, FlashRecord } from "@hyperinkstudio/backend-services";
// api
import { TABLE_FLASH, BUCKET_FLASH } from "@hyperinkstudio/api";
// business
import { uploadImageAndCreateMetadata as handleUpload } from "@hyperinkstudio/business";
import { normalizeToKabobCase } from "@hyperinkstudio/utils";

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

export const getFlashPublicUrl = async (client: Client, path: string) => {
  const { data } = await getPublicUrl_Service(client, {
    bucket: BUCKET_FLASH,
    path,
  });

  return { data };
};
