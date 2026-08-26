import type { Client, FlashRecord } from "@hyperinkstudio/backend-services";
import { TABLE_FLASH as TABLE } from "./consts";

export async function getFlash(
  authedClient: Client,
  fields: (keyof FlashRecord)[] = [],
  limit?: number,
): Promise<{
  data: Partial<FlashRecord>[] | null;
  error: Error | null;
}> {
  const select = fields.length ? fields.join(",") : "*";

  let query = authedClient.from(TABLE).select(select);

  if (limit !== undefined) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  return {
    data: data as Partial<FlashRecord>[] | null,
    error,
  };
}
