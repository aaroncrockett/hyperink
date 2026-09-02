import type { Client, ClientAsClientPerson } from "@hyperinkstudio/services";

import { TABLE_CLIENT_PERSON as TABLE } from "./consts";

export async function updateClientPerson(
  authedClient: Client,
  id: string,
  params: Partial<ClientAsClientPerson>,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .update(params)
    .eq("id", id)
    .select()
    .single();

  return { data, error };
}
