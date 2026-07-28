// Local
import type { Client } from "@hyperinkstudio/db";
import { TABLE_CLIENT_PERSON as TABLE } from "./consts";
// Utils
import { getYearDateRange } from "@hyperinkstudio/utils";

export async function getClientsPersonsByEmail(
  authedClient: Client,
  email: string,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .eq("email", email);

  return { data, error };
}

export async function getClientPersonsByEmailOrPhone(
  client: Client,
  email: string,
  phone: string,
) {
  return client
    .from(TABLE)
    .select("*")
    .or(`email.eq.${email},phone.eq.${phone}`);
}

export async function getClientsPersonsByPhone(
  authedClient: Client,
  phone: string,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .eq("phone", phone);

  return { data, error };
}

export async function getClientsPersonsByPreferredName(
  authedClient: Client,
  preferredName: string,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .eq("preferred_name", preferredName);

  return { data, error };
}

export async function getClientsPersonsByLastdName(
  authedClient: Client,
  lastName: string,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .eq("last_name", lastName);

  return { data, error };
}

export async function getClientPersonsRecentlyUpdated(
  authedClient: Client,
  limit = 10,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .order("updated_at", { ascending: false })
    .limit(limit);

  return { data, error };
}

export async function getClientsPersonsByTattooYear(
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
