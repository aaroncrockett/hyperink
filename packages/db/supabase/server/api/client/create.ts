import { removeFile, uploadFile, getPublicUrl } from "../../../../index";
import type { Client, ClientTable } from "../../../../index";
import { TABLE_CLIENT_PERSON as TABLE } from "./consts";

export async function createClientPerson(
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
