import { UploadFile, RemoveFile } from "@hyperink/service-providers";
import { Client } from "@hyperink/service-providers";
export const uploadFile: UploadFile = async (
  client: Client,
  { bucket, path, file },
) => {
  const { data, error } = await client.storage.from(bucket).upload(path, file);

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
};

export const removeFile: RemoveFile = async (
  client: Client,
  { bucket, path },
) => {
  const { data, error } = await client.storage.from(bucket).remove([path]);

  if (error) {
    return { data: null, error };
  }

  return { data: data ?? [], error: null };
};
