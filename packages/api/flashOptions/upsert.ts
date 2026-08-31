import type { Client, FlashOptions } from "@hyperinkstudio/services";
//
import { normalizeToKabobCase } from "@hyperinkstudio/utils";
// Local
import { TABLE_FLASH_OPTIONS as TABLE } from "./consts";

export async function upsertFlashOptions(
  authedClient: Client,
  userId: string,
  params: Partial<FlashOptions>,
) {
  const normalizedCollection = normalizeToKabobCase(
    params.default_collection ?? "",
  );
  const alteredParams = {
    ...params,
    default_collection: normalizedCollection,
  } as Partial<FlashOptions>;

  const { data, error } = await authedClient
    .from(TABLE)
    .upsert(
      {
        ...params,
        user_id: userId,
      } as FlashOptions,
      {
        onConflict: "user_id",
      },
    )
    .select()
    .single();

  return { data, error };
}
