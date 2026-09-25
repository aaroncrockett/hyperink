import { createSupabaseCreateQueries } from "@hyperink/api";
import { type OptionsUIRow, type TagOpts } from "@hyperink/api/options";

//
import type { Client } from "@hyperink/service-providers";
//

const baseCreateTagOpts = createSupabaseCreateQueries("options", null);

export const createTagOpts = (
  client: Client,
  inserts: TagOpts,
  id: OptionsUIRow["profile_id"],
  selectKeys?: null | (keyof OptionsUIRow)[],
) => {
  const tagOpts = {
    tag_opts: inserts,
  };

  const profileId = {
    profile_id: id,
  };

  const execute = {
    method: selectKeys ? "single" : "execute",
    keys: selectKeys ?? null,
  } as const;

  const internalInserts = [profileId, tagOpts];

  return baseCreateTagOpts.create<OptionsUIRow>(
    client,
    internalInserts,
    execute,
  );
};
