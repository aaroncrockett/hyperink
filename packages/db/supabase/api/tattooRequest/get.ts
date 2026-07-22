import type { Client } from "@hyperinkstudio/db";
import { TABLE_TATTOO_REQUEST as TABLE } from "./consts";

export async function getRecentlyCreatedRequests(
  authedClient: Client,
  limit = 10,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .order("updated_at", { ascending: false })
    .limit(limit);

  return { data, error };
}
