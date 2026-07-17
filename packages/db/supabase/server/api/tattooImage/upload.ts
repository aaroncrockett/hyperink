import { removeFile, uploadFile, getPublicUrl } from "../../../../index";
import type { Client, TattooImage } from "../../../../index";
import { TABLE_TATTOO_IMAGE as TABLE, BUCKET } from "./consts";

export async function storeTattooImageData(
  authedClient: Client,
  path: string,
  params: Partial<TattooImage>,
) {
  const { error } = await authedClient.from(TABLE).insert({
    ...params,
    path,
  });

  return error;
}

export async function uploadTattooImage(
  authedClient: Client,
  file: File,
  params: Partial<TattooImage>,
) {
  const path = `${params.user_id}/${crypto.randomUUID()}`;
  const { error } = await uploadFile(authedClient, {
    bucket: BUCKET,
    file,
    path: path,
  });

  if (error) throw error;

  const dbError = await storeTattooImageData(authedClient, path, params);

  if (dbError) {
    await removeFile(authedClient, { bucket: BUCKET, path });
    throw dbError;
  }
}
