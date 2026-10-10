import { createSupabaseUpdateQueries } from "@hyperink/api";
import { type TattooUIRow } from "@hyperink/api/tattoo";

import type { Client } from "@hyperink/service-providers";

const baseCreateTagOpts = createSupabaseUpdateQueries("tattoo_image", null);

export const updateTattoos = (
  client: Client,
  inserts: Partial<TattooUIRow>,
  where: Partial<TattooUIRow>[],
  selectKeys?: null | (keyof TattooUIRow)[],
) => {
  const execute = {
    method: selectKeys ? "maybe-single" : "execute",
    keys: selectKeys ?? null,
  } as const;

  return baseCreateTagOpts.update<Partial<TattooUIRow>>(
    client,
    inserts,
    where,
    execute,
  );
};

export const updateTattoosWithin = (
  client: Client,
  inserts: Partial<TattooUIRow>,
  within: Partial<Record<keyof TattooUIRow, string[]>>,
  selectKeys?: null | (keyof TattooUIRow)[],
) => {
  const execute = {
    method: selectKeys ? "maybe-single" : "execute",
    keys: selectKeys ?? null,
  } as const;

  return baseCreateTagOpts.updateWithin<Partial<TattooUIRow>>(
    client,
    inserts,
    within,
    execute,
  );
};
