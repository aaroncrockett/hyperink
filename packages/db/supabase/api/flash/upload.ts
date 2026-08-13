import { removeFile, uploadFile, getPublicUrl } from "@hyperinkstudio/db";
import type { Client, FlashRecord } from "@hyperinkstudio/db";
import { TABLE_FLASH as TABLE, BUCKET_FLASH as BUCKET } from "./consts";

async function storeFlashImageData(
  authedClient: Client,
  path: string,
  userId: string,
  params: Partial<FlashRecord>,
) {
  const { error } = await authedClient.from(TABLE).insert({
    ...params,
    user_id: userId,
    path,
  });

  return error;
}

export async function uploadFlash(
  authedClient: Client,
  file: File,
  userId: string,
  params: Partial<FlashRecord>,
) {
  console.log("uploadFlash");
  const path = `${userId}/${crypto.randomUUID()}`;

  const { error } = await uploadFile(authedClient, {
    bucket: BUCKET,
    file,
    path,
  });

  if (error) return { error };

  const dbError = await storeFlashImageData(authedClient, path, userId, params);

  if (dbError) {
    await removeFile(authedClient, { bucket: BUCKET, path });

    return { error: dbError };
  }

  return { error: null };
}
