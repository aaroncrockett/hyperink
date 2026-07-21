// Local
import type { Client } from "@hyperinkstudio/db";
import { TABLE_CLIENT_PERSON as TABLE } from "./consts";
// Utils
import { getYearDateRange } from "@hyperinkstudio/utils";

export async function getClientsPersonByEmail(
  authedClient: Client,
  email: string,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .eq("email", email);

  return { data, error };
}

export async function getClientsPersonByPhone(
  authedClient: Client,
  phone: string,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .eq("phone", phone);

  return { data, error };
}

export async function getClientsPersonByPreferredName(
  authedClient: Client,
  preferredName: string,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .eq("preferred_name", preferredName);

  return { data, error };
}

export async function getClientsPersonByLastdName(
  authedClient: Client,
  lastName: string,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .eq("last_name", lastName);

  return { data, error };
}

export async function getClientsPeopleByTattooYear(
  authedClient: Client,
  year: number,
) {
  const { startDate, endDate } = getYearDateRange(year);

  const { data, error } = await authedClient
    .from(TABLE)
    .select(
      `
      *,
      client_tattoo!inner (
        id,
        created_at
      )
    `,
    )
    .gte("client_tattoo.created_at", startDate)
    .lt("client_tattoo.created_at", endDate);

  return { data, error };
}
