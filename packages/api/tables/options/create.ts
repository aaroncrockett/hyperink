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
  inserts: TagOpts,
  id: OptionsUIRow["profile_id"],
) => {
  const tagOpts = {
    tag_opts: inserts,
  };

  const profileId = {
    profile_id: id,
    value: id,
  };

  const internalInserts = [profileId, tagOpts];

  return baseCreateTagOpts.create(client, internalInserts);
};
