import { createSupabaseCreateQueries } from "@hyperink/api";
import {
  type OptionsUIRow,
  type TagOpts,
  getOptions,
} from "@hyperink/api/options";

//
import type { Client } from "@hyperink/service-providers";
//
import { normalizeToKabobCase } from "@hyperink/utils";

const baseCreateTagOpts = createSupabaseCreateQueries("options", null);

export const createTagOpts = (
  client: Client,
  inserts: Partial<TagOpts>,
  id: OptionsUIRow["profile_id"],
) => {
  const internalInserts = {
    profile_id: id,
    tag_opts: inserts.tag_opts,
  };

  return baseCreateTagOpts.create(client, internalInserts);
};
