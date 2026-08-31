import type { Client, ProfileTaggingOptions } from "@hyperinkstudio/services";
import { TABLE_PROFILE_TAGGING_OPTS as TABLE } from "./consts";

export async function upsertProfileTaggingOpts(
  authedClient: Client,
  userId: string,
  params: Partial<ProfileTaggingOptions>,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .upsert(
      {
        ...params,
        user_id: userId,
      } as ProfileTaggingOptions,
      {
        onConflict: "user_id",
      },
    )
    .select()
    .single();

  return { data, error };
}
