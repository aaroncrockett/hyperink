import type { Client, FlashOptions } from "@hyperinkstudio/backend-services";
import { TABLE_FLASH_OPTIONS as TABLE } from "./consts";

export async function getFlashOptions(
  authedClient: Client,
  fields: (keyof FlashOptions)[] = [],
): Promise<{
  data: Partial<FlashOptions>[] | null;
  error: Error | null;
}> {
  const select = fields.length ? fields.join(",") : "*";

  const { data, error } = await authedClient.from(TABLE).select(select);

  return {
    data: data as Partial<FlashOptions>[] | null,
    error,
  };
}
