import { createSupabaseCreateQueries } from "@hyperink/api";
import { type OptionsUIRow, type TagOpts } from "@hyperink/api/options";

//
import type { Client } from "@hyperink/service-providers";
//

const baseCreateTagOpts = createSupabaseCreateQueries("options", null);

export const createTagOpts = (
  client: Client,
  tagInserts: TagOpts,
  id: OptionsUIRow["profile_id"],
  selectKeys?: null | (keyof OptionsUIRow)[],
) => {
  const profileId = {
    profile_id: id,
  };

  const execute = {
    method: selectKeys ? "maybe-single" : "execute",
    keys: selectKeys ?? null,
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

  return baseCreateTagOpts.create<CreateTagInsert>(
    client,
    internalInserts,
    execute,
  );
};
