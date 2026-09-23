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

export const createUsersCollectionTags = async (
  client: Client,
  inserts: Partial<TagOpts>,
  id: OptionsUIRow["profile_id"],
) => {
  const { error, data } = await getUsersTagOptions(client, id);

  if (error) {
    return { error, data };
  }
  const styles = data.styles as TagOpts["styles"];
  const tags = data.tags as TagOpts["tags"];

  const tagOpts = {
    tag_opts: {
      collections: [inserts.collections ?? []],
      styles: [...styles],
      tags: [...tags],
    },
  };
  return await single(createTagOpts, client, tagOpts, id);
};
