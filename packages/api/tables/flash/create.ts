import { createSupabaseCreateQueries } from "@hyperink/api";
import { type FlashUIRow } from "@hyperink/api/flash";

import type { Client } from "@hyperink/service-providers";

const baseCreateFlashData = createSupabaseCreateQueries("flash", null);

export const createFlash = (
  client: Client,
  flashInserts: Partial<FlashUIRow>,
  userId: FlashUIRow["user_id"],
  selectKeys?: null | (keyof FlashUIRow)[],
) => {
  const execute = {
    method: selectKeys ? "maybe-single" : "execute",
    keys: selectKeys ?? null,
  } as const;

  const internalInserts = [
    {
      ...flashInserts,
      user_id: userId,
    },
  ];

  type InternalInserts = (typeof internalInserts)[number];

  return baseCreateFlashData.create<InternalInserts>(
    client,
    internalInserts,
    execute,
  );
};
