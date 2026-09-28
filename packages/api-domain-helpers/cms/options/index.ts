import type { Client } from "@hyperink/service-providers";
//
import { capitalizeWords, normalizeToKabobCase } from "@hyperink/utils";
//
import {
  getOptions as getOptsSrc,
  createTagOpts,
  upsertTagOpts,
  type OptionsUIRow,
  type TagOpts,
} from "@hyperink/api/options";
//
import { normalizeTagOpts, capitalizeTagOpts } from "./helpers";

export const getOptions = async (
  client: Client,
  id: OptionsUIRow["profile_id"],
  type:
    "tags" | "profile" | "flash" | "tattoo-image" | "request" | "client-tattoo",
) => {
  switch (type) {
    case "tags": {
      return getUsersTagOptions(client, id);
      break;
    }

    default: {
      return {
        error: { message: "option type does not exist" },
        data: null,
      };
    }
  }
};

export const getUsersTagOptions = async (
  client: Client,
  id: OptionsUIRow["profile_id"],
) => {
  const { data, error } = await getOptsSrc(
    client,
    ["tag_opts"],
    [{ profile_id: id }],
  );

  if (!data) return { data, error };

  const tagOpts = capitalizeTagOpts(data.tag_opts);

  return { data: tagOpts, error };
};

export const mergeUsersTagOptions = async (
  client: Client,
  id: OptionsUIRow["profile_id"],
  tag: string,
  options: string[],
) => {
  const { data: initOptsData, error: initOptsError } = await getOptsSrc(
    client,
    ["tag_opts"],
    [{ profile_id: id }],
  );

  if (!initOptsData) return { data: initOptsData, error: initOptsError };

  const initTagOpts = initOptsData.tag_opts satisfies TagOpts as TagOpts;

  const mergedTagOpts = {
    ...initTagOpts,
    [tag]: options,
  };

  const normalizedTagOpts = normalizeTagOpts(mergedTagOpts);

  const { data, error } = await upsertTagOpts(client, normalizedTagOpts, id, [
    "tag_opts",
  ]);

  if (!data) return { data, error };

  const tagOpts = capitalizeTagOpts(data.tag_opts);

  return { data: tagOpts, error };
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
  type CreateTagInsert = {
    profile_id?: OptionsUIRow["profile_id"];
    tag_opts?: OptionsUIRow["tag_opts"];
  };
  return await createTagOpts(client, tagOpts, id);
};
