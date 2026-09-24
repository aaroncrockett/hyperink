import { createSupabaseGetQueries } from "@hyperink/api";
import type { Client } from "@hyperink/service-providers";

import { type ProfileUIRow } from "@hyperink/api/profile";

import type { DBKeyValue } from "../../types";

const profileQueries = createSupabaseGetQueries("profile", null);

export const getProfile = (
  client: Client,
  selectKeys: (keyof ProfileUIRow)[],
  where: DBKeyValue<ProfileUIRow>[],
) => {
  const execute = {
    method: "single",
    keys: selectKeys,
  } as const;

  profileQueries.sbGetWhere<ProfileUIRow>(client, where, execute);
};
