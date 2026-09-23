import type { Client } from "@hyperink/service-providers";

import {
  getOptions,
  createTagOpts,
  type OptionsUIRow,
  type TagOpts,
} from "@hyperink/api/options";
import { single } from "../../internal-helpers/";

export const getUsersTagOptions = async (
  client: Client,
  selectKeys: (keyof OptionsUIRow)[],
  id: OptionsUIRow["profile_id"],
) => {
  return await single(getOptions, client, selectKeys, [
    { columnKey: "profile_id", value: id },
  ]);
};

export const createUsersCollectionTags = async (
  client: Client,
  inserts: Partial<TagOpts>,
  id: OptionsUIRow["profile_id"],
) => {
  return await single(createTagOpts, client, inserts, id);
};
