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
  id: OptionsUIRow["profile_id"],
) => {
  return await single(
    getOptions,
    client,
    ["tag_opts"],
    [{ columnKey: "profile_id", value: id }],
  );
};

export const initCollectionTagsAndResetRemaining = async (
  client: Client,
  inserts: Pick<TagOpts, "collections">,
  id: OptionsUIRow["profile_id"],
): Promise<
  | { data: Partial<TagOpts>; error: null }
  | { data: null; error: Record<string, any> }
> => {
  const tagOpts = {
    collections: inserts.collections,
    styles: [],
    tags: [],
  };
  return await single(createTagOpts, client, tagOpts, id);
};
