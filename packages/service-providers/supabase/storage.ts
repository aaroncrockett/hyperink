import { SupabaseClient } from "@supabase/supabase-js";
import type { RemoveFile, UploadFile, GetPublicURL } from "./types";

export const uploadFile: UploadFile = async (
  client: SupabaseClient,
  { bucket, path, file },
) => {
  const { data, error } = await client.storage.from(bucket).upload(path, file);

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
};

export const removeFile: RemoveFile = async (
  client: SupabaseClient,
  { bucket, path },
) => {
  const { data, error } = await client.storage.from(bucket).remove([path]);

  if (error) {
    return { data: null, error };
  }

  return { data: data ?? [], error: null };
};

export const getPublicUrl: GetPublicURL = async (
  client: SupabaseClient,
  { bucket, path },
) => {
  const { data } = await client.storage.from(bucket).getPublicUrl(path);

  return { data: data ?? [], error: null };
};
