import type { RemoveFile, UploadFile } from "./types";

export const uploadFile: UploadFile = async (
  client,
  { bucket, path, file },
) => {
  const { data, error } = await client.storage.from(bucket).upload(path, file);

  return { data, error };
};

export const removeFile: RemoveFile = async (client, { bucket, path }) => {
  const { data, error } = await client.storage.from(bucket).remove([path]);

  return { data, error };
};
