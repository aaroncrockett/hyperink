import { createSupabaseUpdateQueries } from "@hyperink/api";
import { type FlashUIRow } from "@hyperink/api/flash";

import type { Client } from "@hyperink/service-providers";

const baseCreateTagOpts = createSupabaseUpdateQueries("flash", null);

export const updateFlash = (
  client: Client,
  inserts: Partial<FlashUIRow>,
  where: Partial<FlashUIRow>[],
  selectKeys?: null | (keyof FlashUIRow)[],
) => {
  const execute = {
    method: selectKeys ? "maybe-single" : "execute",
    keys: selectKeys ?? null,
  } as const;

  return baseCreateTagOpts.update<Partial<FlashUIRow>>(
    client,
    inserts,
    where,
    execute,
  );
};

export const updateFlashWithin = (
  client: Client,
  inserts: Partial<FlashUIRow>,
  within: Partial<Record<keyof FlashUIRow, string[]>>,
  selectKeys?: null | (keyof FlashUIRow)[],
) => {
  const execute = {
    method: selectKeys ? "maybe-single" : "execute",
    keys: selectKeys ?? null,
  } as const;

  return baseCreateTagOpts.updateWithin<Partial<FlashUIRow>>(
    client,
    inserts,
    within,
    execute,
  );
};
