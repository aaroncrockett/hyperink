import type { Client, ClientTable } from "@hyperinkstudio/db";

import { TABLE_CLIENT_PERSON as TABLE } from "./consts";

export async function createClientPerson(
  authedClient: Client,
  params: Partial<ClientTable>,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    // cast because Supabase insert expects required fields (e.g. user_id)
    .insert(params as unknown as ClientTable)
    .select()
    .single();

  return { data, error };
}
