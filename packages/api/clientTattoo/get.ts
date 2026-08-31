import { TABLE_CLIENT_TATTOO as TABLE } from "./consts";
import { getYearDateRange } from "@hyperinkstudio/utils";

import type { Client } from "@hyperinkstudio/services";

export async function getClientTattoosByClientId(
  authedClient: Client,
  clientId: string,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .eq("client_id", clientId);

  return { data, error };
}

export async function getClientTattoosByClientIdAndYear(
  authedClient: Client,
  clientId: string,
  year: number,
) {
  const { startDate, endDate } = getYearDateRange(year);

  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .eq("client_id", clientId)
    .gte("created_at", startDate)
    .lt("created_at", endDate);

  return { data, error };
}

export async function getClientTattoosByTitle(
  authedClient: Client,
  title: string,
) {
  const { data, error } = await authedClient
    .from(TABLE)
    .select("*")
    .ilike("title", `%${title}%`);

  return { data, error };
}
