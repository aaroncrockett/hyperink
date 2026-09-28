import { createSupabaseUpsertQueries } from "@hyperink/api";
import { type OptionsUIRow, type TagOpts } from "@hyperink/api/options";

import type { Client } from "@hyperink/service-providers";

const baseCreateTagOpts = createSupabaseUpsertQueries("options", null);

export const upsertTagOpts = (
  client: Client,
  tagInserts: TagOpts,
  id: OptionsUIRow["profile_id"],
  selectKeys?: null | (keyof OptionsUIRow)[],
) => {
  const profileId = {
    profile_id: id,
  };

  const options = {
    onConflict: "profile_id",
  };

  const execute = {
    method: selectKeys ? "maybe-single" : "execute",
    keys: selectKeys ?? null,
    options: options,
  } as const;

  type CreateTagInsert = {
    profile_id?: OptionsUIRow["profile_id"];
    tag_opts?: OptionsUIRow["tag_opts"];
  };

  const internalInserts = [
    {
      ...profileId,
      tag_opts: tagInserts,
    },
  ];

  return baseCreateTagOpts.upsert<CreateTagInsert>(
    client,
    internalInserts,
    execute,
  );
};
