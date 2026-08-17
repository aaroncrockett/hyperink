import type { FlashRecord } from "@hyperinkstudio/backend-services";
import { TABLE_FLASH } from "@hyperinkstudio/api";
import { uploadImageAndCreateMetadata as handleUpload } from "@hyperinkstudio/business";
import type { Client } from "@hyperinkstudio/backend-services";

export const uploadFlashImage = (
  client: Client,
  file: File,
  userId: string,
  params: Partial<FlashRecord>,
) => {
  return handleUpload(client, file, TABLE_FLASH, userId, params);
};
