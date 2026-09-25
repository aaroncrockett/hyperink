import { createSupabaseGetQueries } from "@hyperink/api";
import type { Client } from "@hyperink/service-providers";

import { type OptionsUIRow } from "@hyperink/api/options";

import type { DBKeyValue } from "../../types";

const baseGetTagOpts = createSupabaseGetQueries("options", null);

// export const getOptions = baseGetTagOpts.sbGetWhere;

export const getOptions = (
  client: Client,
  selectKeys: (keyof OptionsUIRow)[],
  where: DBKeyValue<OptionsUIRow>[],
) => {
  const execute = {
    method: "maybe-single",
    keys: selectKeys,
  } as const;
  return baseGetTagOpts.sbGetWhere<OptionsUIRow>(client, where, execute);
};
