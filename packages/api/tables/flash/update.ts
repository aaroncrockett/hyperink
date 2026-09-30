import { createSupabaseUpdateQueries } from "@hyperink/api";
import { type FlashUIRow } from "@hyperink/api/flash";

import type { Client } from "@hyperink/service-providers";

const baseCreateTagOpts = createSupabaseUpdateQueries("options", null);

export const updateFlash = (
  client: Client,
  inserts: Partial<FlashUIRow>,
  selectKeys?: null | (keyof FlashUIRow)[],
) => {
  const execute = {
    method: selectKeys ? "maybe-single" : "execute",
    keys: selectKeys ?? null,
  } as const;

  return baseCreateTagOpts.update<Partial<FlashUIRow>>(
    client,
    inserts,
    execute,
  );
};
