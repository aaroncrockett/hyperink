import type { Client, FlashOptions } from "@hyperinkstudio/backend-services";
import { TABLE_FLASH_OPTIONS as TABLE } from "./consts";

export async function upsertFlashOptions(
  authedClient: Client,
  userId: string,
  params: Partial<FlashOptions>,
) {
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
