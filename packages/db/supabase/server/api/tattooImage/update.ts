import type { Client, TattooImage } from "../../../types";
import { TABLE_TATTOO_IMAGE as TABLE } from "./consts";

export async function updateUserImage(
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
