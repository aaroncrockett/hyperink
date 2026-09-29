import { createSupabaseGetQueries } from "@hyperink/api";
import type { Client } from "@hyperink/service-providers";

import { type FlashUIRow } from "@hyperink/api/flash";

import type { DBKeyValue } from "../../types";

const baseGetTagOpts = createSupabaseGetQueries("flash", null);

export const getFlash = async (
  client: Client,
  selectKeys: (keyof FlashUIRow)[],
  where: DBKeyValue<FlashUIRow>[],
) => {
  const execute = {
    method: "select",
    keys: selectKeys,
  } as const;

  return baseGetTagOpts.sbGetWhere<FlashUIRow>(client, where, execute);
};

export const getFlashLimitByRecent = async (
  client: Client,
  selectKeys: (keyof FlashUIRow)[],
  where: DBKeyValue<FlashUIRow>[],
) => {
  const execute = {
    method: "select",
    keys: selectKeys,
  } as const;

  return baseGetTagOpts.sbGetWhere<FlashUIRow>(
    client,
    where,
    execute,
    (query) => query.order("created_at", { ascending: false }).limit(30),
  );
};
