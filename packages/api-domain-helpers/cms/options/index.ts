import type { Client } from "@hyperink/service-providers";
//
import {
  getOptions as getOptsSrc,
  createTagOpts,
  upsertUserOptions,
  type OptionsUIRow,
  type TagOpts,
  type FlashOpts,
} from "@hyperink/api/options";
//

import {
  normalizeTagOpts as normalizeTagOptsSrc,
  capitalizeTagOpts as capitalizeTagOptsSrc,
  capitalizeFlashOpts as capitalizeFlashOptsSrc,
} from "./helpers";
//
import {
  normalizeToKabobCase,
  denormalizeFromKabobCase,
} from "@hyperink/utils";

export const normalizeTagOpts = normalizeTagOptsSrc;
export const capitalizeTagOpts = capitalizeTagOptsSrc;
export const capitalizeFlashOpts = capitalizeFlashOptsSrc;

// GETS

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

    case "flash": {
      return getUsersFlashOptions(client, id);
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

  const tagOpts = capitalizeTagOptsSrc(data.tag_opts);

  return { data: tagOpts, error };
};

export const getUsersFlashOptions = async (
  client: Client,
  id: OptionsUIRow["profile_id"],
) => {
  const { data, error } = await getOptsSrc(
    client,
    ["flash_opts"],
    [{ profile_id: id }],
  );

  if (!data) return { data, error };

  const tagOpts = capitalizeTagOptsSrc(data.tag_opts);

  return { data: tagOpts, error };
};

// UPSERT

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

  const normalizedTagOpts = normalizeTagOptsSrc(mergedTagOpts);

  const { data, error } = await upsertUserOptions(
    client,
    normalizedTagOpts,
    id,
    "tag_opts",
  );

  if (!data) return { data, error };

  const tagOpts = capitalizeTagOptsSrc(data.tag_opts);

  return { data: options, error };
};

export const mergeUsersDefaultCollection = async (
  client: Client,
  id: OptionsUIRow["profile_id"],
  collection: string,
) => {
  const { data: initOptsData, error: initOptsError } = await getOptsSrc(
    client,
    ["flash_opts"],
    [{ profile_id: id }],
  );

  if (!initOptsData) return { data: initOptsData, error: initOptsError };

  const initTagOpts = initOptsData.flash_opts satisfies FlashOpts as FlashOpts;

  const mergedTagOpts = {
    ...initTagOpts,
    default_collection: normalizeToKabobCase(collection),
  };

  const { data, error } = await upsertUserOptions(
    client,
    mergedTagOpts,
    id,
    "flash_opts",
  );

  if (!data || !data.default_collection) return { data, error };

  const defaultCollection = denormalizeFromKabobCase(
    data.flash_opts?.default_collection,
  );

  return { data: defaultCollection, error };
};

// CREATE

export const initCollectionTagsAndResetRemaining = async (
  client: Client,
  inserts: Pick<TagOpts, "collections">,
  id: OptionsUIRow["profile_id"],
): Promise<
  | { data: Partial<TagOpts>; error: null }
  | { data: null; error: Record<string, any> }
> => {
  const collections = inserts.collections.map((col) =>
    normalizeToKabobCase(col),
  );
  const tagOpts = {
    collections: collections,
    styles: [],
    tags: [],
  };
  type CreateTagInsert = {
    profile_id?: OptionsUIRow["profile_id"];
    tag_opts?: OptionsUIRow["tag_opts"];
  };
  return await createTagOpts(client, tagOpts, id);
};
