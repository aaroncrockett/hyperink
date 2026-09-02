import type { Client, ClientAsClientPerson } from "@hyperinkstudio/services";
import { TABLE_PROFILE as TABLE } from "./consts";

export async function createProfile(
  authedClient: Client,
  params: Partial<ClientAsClientPerson>,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .insert(params)
    .select()
    .single();

  return { data, error };
}
