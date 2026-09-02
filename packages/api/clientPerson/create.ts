import type { Client, ClientTable } from "@hyperinkstudio/services";

import { TABLE_CLIENT_PERSON as TABLE } from "./consts";

// export async function createClientPerson(
//   authedClient: Client,
//   params: Partial<ClientTable>,
// ) {
//   const { data, error } = await authedClient
//     .from(TABLE)
//     // cast because Supabase insert expects required fields (e.g. user_id)
//     .insert(params as unknown as ClientTable)
//     .select()
//     .single();

//   return { data, error };
// }

export async function createClientPerson(
  authedClient: Client,
  params: Partial<ClientTable>,
) {
  const {
    data: { user },
  } = await authedClient.auth.getUser();

  if (!user) {
    return {
      data: null,
      error: new Error("Not authenticated"),
    };
  }

  const { data, error } = await authedClient
    .from(TABLE)
    .insert({
      ...params,
      user_id: user.id,
    })
    .select()
    .single();

  return { data, error };
}
