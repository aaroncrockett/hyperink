import { Client } from "@hyperinkstudio/backend-services";
import { FlashRecord } from "@hyperinkstudio/backend-services";
//
import { normalizeToKabobCase } from "@hyperinkstudio/utils";

import { TABLE_FLASH } from "./consts";

export async function updatePinnedFlash(
  client: Client,
  item: { id: string; pinned_order: number | null },
) {
  const { data, error } = await client
    .from(TABLE_FLASH)
    .update({ pinned_order: item.pinned_order })
    .eq("id", item.id);

  if (error) {
    console.error(error);
  }

  return { data, error };
}

export async function updateFlash(
  client: Client,
  item: Partial<FlashRecord> & { id: string },
) {
  const { id, ...updates } = item;

  const normalizedCollection = normalizeToKabobCase(updates.collection ?? "");

  const alteredUpdates = {
    ...updates,
    collection: normalizedCollection,
  } as Partial<FlashRecord>;

  const { data, error } = await client
    .from(TABLE_FLASH)
    .update(updates)
    .eq("id", id);

  if (error) {
    console.error(error);
  }

  return { data, error };
}
