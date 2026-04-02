"use server";

import { type Client } from "@inktree/db";
import type {
  TattooCollection,
  TattooGroup,
  TattooStyle,
  TattooTag,
} from "@inktree/db";

type UploadParams = {
  bucket: string;
  client: Client;
  collections: TattooCollection[];
  file: File | Blob;
  groups: TattooGroup[];
  name: string;
  styles: TattooStyle[];
  table: string;
  tags: TattooTag[];
  userId: string;
};

export async function uploadImage({
  bucket,
  client,
  collections,
  file,
  groups,
  name,
  styles,
  table,
  tags,
  userId,
}: UploadParams) {
  const { path, error } = await client.uploadFile({
    bucket,
    file,
    path: `${userId}/${crypto.randomUUID()}`,
  });
  if (error) throw error;

  const { error: dbError } = await client.insertRow({
    table,
    values: {
      collections,
      groups,
      name,
      path,
      styles,
      tags,
      user_id: userId,
    },
  });
  if (dbError) {
    await client.removeFile({ bucket, path });
    throw dbError;
  }
}
