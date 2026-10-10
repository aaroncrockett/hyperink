import { createSupabaseCreateQueries } from "@hyperink/api";
import { type TattooUIRow } from "@hyperink/api/tattoo";

import type { Client } from "@hyperink/service-providers";

const baseCreateTattooData = createSupabaseCreateQueries("tattoo_image", null);

export const createTattoos = (
  client: Client,
  tattooInserts: Partial<TattooUIRow>,
  profileId: TattooUIRow["profile_tattoo_id"],
  selectKeys?: null | (keyof TattooUIRow)[],
) => {
  const execute = {
    method: selectKeys ? "maybe-single" : "execute",
    keys: selectKeys ?? null,
  } as const;

  const internalInserts = [
    {
      ...tattooInserts,
      profile_tattoo_id: profileId,
    },
  ];

  type InternalInserts = (typeof internalInserts)[number];

  return baseCreateTattooData.create<InternalInserts>(
    client,
    internalInserts,
    execute,
  );
};
