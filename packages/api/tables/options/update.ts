import { createSupabaseUpdateQueries } from "@hyperink/api";
import { type OptionsUIRow, type FlashOpts } from "@hyperink/api/options";

import type { Client } from "@hyperink/service-providers";

const baseCreateTagOpts = createSupabaseUpdateQueries("options", null);

export const updateFlashOptions = (
  client: Client,
  insert: string,
  id: OptionsUIRow["profile_id"],
  selectKeys?: null | (keyof FlashOpts)[],
) => {
  const execute = {
    method: selectKeys ? "maybe-single" : "execute",
    keys: selectKeys ?? null,
  } as const;

  type UpdateFlashOpts = {
    profile_id?: OptionsUIRow["profile_id"];
    flash_opts?: OptionsUIRow["flash_opts"];
  };

  const internalUpdates = {
    flash_opts: {
      default_collection: insert,
    },
  };

  return baseCreateTagOpts.update<UpdateFlashOpts>(
    client,
    internalUpdates,
    [{ profile_id: id }],
    execute,
  );
};
