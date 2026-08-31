import type { Client, ClientTable } from "@hyperinkstudio/services";
import { TABLE_PROFILE as TABLE } from "./consts";

export async function createProfile(
  authedClient: Client,
  params: Partial<ClientTable>,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .insert(params)
    .select()
    .single();

  return { data, error };
}
