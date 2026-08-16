import type { Client, TattooRequest } from "@hyperinkstudio/backend-services";
import { TABLE_TATTOO_REQUEST as TABLE } from "./consts";

export async function createTattooRequest(
  client: Client,
  values: Partial<TattooRequest>,
) {
  const { data, error } = await client
    .from(TABLE)
    .insert(values)
    .select()
    .single();

  return { data, error };
}
