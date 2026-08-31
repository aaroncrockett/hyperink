import type { Client, FlashRecord } from "@hyperinkstudio/services";
import { TABLE_FLASH as TABLE } from "./consts";

export async function createFlashRecord(
  authedClient: Client,
  params: Partial<FlashRecord>,
) {
  const { data, error } = await authedClient.from(TABLE).insert(params);

  return { data, error };
}
