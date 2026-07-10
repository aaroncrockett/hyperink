import { TABLE_CLIENT_PERSON_TATTOO as TABLE } from "./consts";

import type { Client, TattooImage } from "../../../../index";

export async function getClientTattooByEmail(
  authedClient: Client,
  email: string,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .eq("email", email);

  return { data, error };
}

export async function getClientTattooByPhone(
  authedClient: Client,
  email: string,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .eq("email", email);

  return { data, error };
}
