import { TABLE_CLIENT_PERSON as TABLE } from "./consts";

import type { Client } from "../../../../index";

export async function getClientPersonByEmail(
  authedClient: Client,
  email: string,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .eq("email", email);

  return { data, error };
}

export async function getClientPersonByPhone(
  authedClient: Client,
  string: number,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .eq("phone", string);

  return { data, error };
}
