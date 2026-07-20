import type { Client, ProfileTaggingOptions } from "@hyperinkstudio/db";
import { TABLE_PROFILE_TAGGING_OPTS as TABLE } from "./consts";

export async function upsertProfileTaggingOpts(
  authedClient: Client,
  params: Partial<ProfileTaggingOptions>,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .upsert(params as ProfileTaggingOptions, {
      onConflict: "user_id",
    })
    .select()
    .single();

  return { data, error };
}
