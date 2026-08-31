// Local
import type {
  SupabaseClient,
  ProfileTaggingOptions,
} from "@hyperinkstudio/services";
import { TABLE_PROFILE_TAGGING_OPTS as TABLE } from "./consts";

export async function getAllProfileTaggingOpts(authedClient: SupabaseClient) {
  const { data, error } = await authedClient.from(TABLE).select("*");

  return { data, error };
}

export async function getProfileTaggingOpts(
  authedClient: SupabaseClient,
  fields: (keyof ProfileTaggingOptions)[] = [],
): Promise<{
  data: Partial<ProfileTaggingOptions>[] | null;
  error: Error | null;
}> {
  const select = fields.length ? fields.join(",") : "*";

  const { data, error } = await authedClient.from(TABLE).select(select);

  return {
    data: data as Partial<ProfileTaggingOptions>[] | null,
    error,
  };
}
