import { removeFile, uploadFile, getPublicUrl } from "../../../../index";
import type { Client, UserImage } from "../../../../index";
import { TABLE, BUCKET } from "./consts";

export async function storeUserImageData(
  authedClient: Client,
  path: string,
  params: Partial<UserImage>,
) {
  const { error } = await authedClient.from(TABLE).insert({
    ...params,
    path,
  });

  return error;
}

export async function uploadUserImage(
  authedClient: Client,
  file: File,
  params: Partial<UserImage>,
) {
  const path = `${params.user_id}/${crypto.randomUUID()}`;
  const { error } = await uploadFile(authedClient, {
    bucket: BUCKET,
    file,
    path: path,
  });

  if (error) throw error;

  const dbError = await storeUserImageData(authedClient, path, params);

  if (dbError) {
    await removeFile(authedClient, { bucket: BUCKET, path });
    throw dbError;
  }
}
