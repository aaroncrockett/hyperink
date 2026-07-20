// Local
import type { SupabaseClient } from "@hyperinkstudio/db";
import { TABLE_PROFILE_TAGGING_OPTS as TABLE } from "./consts";

export async function getProfileTaggingOpts(authedClient: SupabaseClient) {
  const { data, error } = await authedClient.from(TABLE).select("*");

  console.log("wtf");
  console.log(data);

  return { data, error };
}
