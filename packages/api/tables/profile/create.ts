import { createSupabaseCreateQueries } from "@hyperink/api";

import { type ProfileUIRow } from "@hyperink/api/profile";

import type { Client } from "@hyperink/service-providers";

const profileQueries = createSupabaseCreateQueries("profile", null);

export const createProfile = async (
  client: Client,
  inserts: Partial<ProfileUIRow>[],
  selectKeys?: null | (keyof ProfileUIRow)[],
) => {
  const execute = {
    method: selectKeys ? "single" : "execute",
    keys: selectKeys ?? null,
  } as const;

  return await profileQueries.create(client, inserts, execute);
};
