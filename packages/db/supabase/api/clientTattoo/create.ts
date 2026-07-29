import type { Client, ClientTattoo } from "@hyperinkstudio/db";
import { TABLE_CLIENT_TATTOO as TABLE } from "./consts";

export async function createClientTattoo(
  authedClient: Client,
  params: Partial<ClientTattoo>,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .insert(params)
    .select()
    .single();

  return { data, error };
}
