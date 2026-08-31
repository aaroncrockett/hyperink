import { SupabaseClient } from "@supabase/supabase-js";
import type { RemoveFile, UploadFile, GetPublicURL } from "./server/types";

export const uploadFile: UploadFile = async (
  authedClient: SupabaseClient,
  { bucket, path, file },
) => {
  const { data, error } = await authedClient.storage
    .from(bucket)
    .upload(path, file);

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
};

export const removeFile: RemoveFile = async (
  authedClient: SupabaseClient,
  { bucket, path },
) => {
  const { data, error } = await authedClient.storage
    .from(bucket)
    .remove([path]);

  if (error) {
    return { data: null, error };
  }

  return { data: data ?? [], error: null };
};

export const getPublicUrl: GetPublicURL = async (
  authedClient: SupabaseClient,
  { bucket, path },
) => {
  const { data } = await authedClient.storage.from(bucket).getPublicUrl(path);

  return { data: data ?? [], error: null };
};
