import { createSupabaseGetQueries } from "@hyperink/api";
import type { Client } from "@hyperink/service-providers";

import { type ProfileUIRow } from "@hyperink/api/profile";

import type { DBKeyValue } from "../../types";

const profileQueries = createSupabaseGetQueries("profile", null);

export const getProfile = async (
  client: Client,
  selectKeys: (keyof ProfileUIRow)[],
  where: DBKeyValue<ProfileUIRow>[],
) => {
  const execute = {
    method: "maybe-single",
    keys: selectKeys,
  } as const;

  return await profileQueries.sbGetWhere<ProfileUIRow>(client, where, execute);
};
