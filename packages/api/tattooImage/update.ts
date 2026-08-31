import type { Client, TattooImage } from "@hyperinkstudio/services";
import { TABLE_TATTOO_IMAGE as TABLE } from "./consts";

export async function updateTattooImage(
  authedClient: Client,
  id: string,
  updates: Partial<TattooImage>,
) {
  return authedClient
    .from(TABLE)
    .update(updates)
    .eq("id", id)
    .select()
    .single();
}
