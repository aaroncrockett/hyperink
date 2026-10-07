import { createSupabaseUpsertQueries } from "@hyperink/api";
import type { OptionsUIRow, TagOpts, FlashOpts } from "@hyperink/api/options";

import type { Client } from "@hyperink/service-providers";

const baseCreateTagOpts = createSupabaseUpsertQueries("options", null);

export const upsertUserOptions = (
  client: Client,
  tagInserts: TagOpts | FlashOpts,
  id: OptionsUIRow["profile_id"],
  selectKey: keyof OptionsUIRow,
) => {
  const profileId = {
    profile_id: id,
  };

  const options = {
    onConflict: "profile_id",
  };

  const execute = {
    method: "maybe-single" as const,
    keys: [...selectKey],
    options,
  };

  type CreateTagInsert = {
    profile_id?: OptionsUIRow["profile_id"];
    opts?: OptionsUIRow;
  };

  let internalInserts = [] as any;

  if (selectKey === "tag_opts") {
    internalInserts = [
      {
        ...profileId,
        tag_opts: tagInserts,
      },
    ];
  }

  if (selectKey === "flash_opts") {
    internalInserts = [
      {
        ...profileId,
        flash_opts: tagInserts,
      },
    ];
  }

  return baseCreateTagOpts.upsert<CreateTagInsert>(
    client,
    internalInserts,
    execute,
  );
};
