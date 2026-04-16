import { removeFile, uploadFile } from "@inktree/db";

import type { Client, UserImage } from "@inktree/db";

const table = "user_images";
const bucket = "user-images";

export async function storeUserImageData(
  authedClient: Client,
  path: string,
  params: Partial<UserImage>,
) {
  const { error } = await authedClient.from(table).insert({
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
    bucket,
    file,
    path: path,
  });

  if (error) throw error;

  const dbError = await storeUserImageData(authedClient, path, params);

  if (dbError) {
    await removeFile(authedClient, { bucket, path });
    throw dbError;
  }
}
