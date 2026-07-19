import { TABLE_CLIENT_PERSON as TABLE } from "./consts";
import { getYearDateRange } from "@hyperinkstudio/utils";

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
  phone: string,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .eq("phone", phone);

  return { data, error };
}

export async function getClientPersonByPreferredName(
  authedClient: Client,
  preferredName: string,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .eq("preferred_name", preferredName);

  return { data, error };
}

export async function getClientPersonByLastdName(
  authedClient: Client,
  lastName: string,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .eq("last_name", lastName);

  return { data, error };
}

export async function getClientPeopleByTattooYear(
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
