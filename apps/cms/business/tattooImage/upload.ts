import type { TattooImage } from "@hyperinkstudio/services";
import { TABLE_TATTOO_IMAGE } from "@hyperinkstudio/api";
import { uploadImageAndCreateMetadata as handleUpload } from "@hyperinkstudio/business";
import type { Client } from "@hyperinkstudio/services";

export const uploadFlashImage = (
  client: Client,
  file: File,
  params: Partial<TattooImage>,
  userId: string,
) => {
  return handleUpload(client, file, TABLE_TATTOO_IMAGE, userId, params);
};
