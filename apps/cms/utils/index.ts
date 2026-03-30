"use server";

import { type Client } from "@inktree/db";

type UploadParams = {
  bucket: string;
  table: string;
  file: File | Blob;
  userId: string;
  client: Client;
};

export async function uploadImage({
  client,
  bucket,
  table,
  file,
  userId,
}: UploadParams) {
  const { path, error } = await client.uploadFile({
    bucket,
    path: `${userId}/${crypto.randomUUID()}`,
    file,
  });
  if (error) throw error;

  const { error: dbError } = await client.insertRow({
    table,
    values: { user_id: userId, path },
  });
  if (dbError) {
    await client.removeFile({ bucket, path });
    throw dbError;
  }

  return { path };
}
