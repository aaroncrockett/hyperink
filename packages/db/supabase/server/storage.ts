import type { RemoveFile, UploadFile } from "./types";
import { createOrGetClient } from "./index";

export const uploadFile: UploadFile = async ({ bucket, path, file }) => {
  const client = await createOrGetClient();
  const { data, error } = await client.storage.from(bucket).upload(path, file);

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
};

export const removeFile: RemoveFile = async ({ bucket, path }) => {
  const client = await createOrGetClient();
  const { data, error } = await client.storage.from(bucket).remove([path]);

  if (error) {
    return { data: null, error };
  }

  return { data: data ?? [], error: null };
};
