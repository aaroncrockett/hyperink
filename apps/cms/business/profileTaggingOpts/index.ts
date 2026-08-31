import z from "zod";
// hyperink api & backend
import {
  upsertProfileTaggingOpts as upsertProfileTaggingOptsSrc,
  getProfileTaggingOpts as getProfileTaggingOptsSrc,
} from "@hyperinkstudio/api";
import type { Client } from "@hyperinkstudio/services";
// hyperink utils

import {
  createDataCollection,
  getKeysFromCollection,
  getValuesFromCollection,
  normalizeToKabobCase,
  denormalizeFromKabobCase,
} from "@hyperinkstudio/utils";
// hyperink shared business
import { type ProfileTaggingOptions as ProfileTaggingOptions_Src } from "@hyperinkstudio/business/profileTaggingOptions";
import type {
  JsonToStringArray,
  SelectStringArrays,
} from "@hyperinkstudio/business/types";

// Supabase/database representation
export type ProfileTaggingOptions_Db = ProfileTaggingOptions_Src;

// Front-end representation ALL -- easier to work with as string[]
export type ProfileTaggingOptions = JsonToStringArray<ProfileTaggingOptions_Db>;
// Front-end representation  DISPLAYS -- easier to work with as string[]
export type ProfileTaggingOptionsDisplay =
  SelectStringArrays<ProfileTaggingOptions>;

import * as BASE from "@hyperinkstudio/business/profileTaggingOptions/base";

export const TAGGING_OPTS_DISPLAY_COLLECTION = createDataCollection({
  avail_tattoo_sizes: BASE.AVAIL_SIZES,
  collections: BASE.COLLECTIONS,
  inks: BASE.INKS,
  needles: BASE.NEEDLES,
  placement_locations: BASE.PLACEMENT_LOCATIONS,
  studio_locations: BASE.STUDIO_LOCATIONS,
  styles: BASE.STYLES,
  tags: BASE.TAGS,
});

export const taggingOptsSchema = z.string().optional();

export const TAGGING_OPTS_DISPLAY_KEYS = getKeysFromCollection(
  TAGGING_OPTS_DISPLAY_COLLECTION,
);

export const TAGGING_OPTS_DISPLAY_VALUES = getValuesFromCollection(
  TAGGING_OPTS_DISPLAY_COLLECTION,
);

export const upsertProfileTaggingOpts = async (
  client: Client,
  userId: string,
  params: Partial<ProfileTaggingOptions>,
) => {
  const normalizedParams: Partial<ProfileTaggingOptionsDisplay> = {
    ...params,
    collections: params.collections
      ? params.collections.map((tag) => normalizeToKabobCase(tag))
      : [],
    tags: params.tags
      ? params.tags.map((tag) => normalizeToKabobCase(tag))
      : [],
    styles: params.styles
      ? params.styles.map((tag) => normalizeToKabobCase(tag))
      : [],
  };

  return await upsertProfileTaggingOptsSrc(client, userId, normalizedParams);
};

// export const upsertProfileTaggingOpts = upsertProfileTaggingOptsSrc;

export const getDisplayProfileTaggingOpts = async (client: Client) => {
  const { error, data } = await getProfileTaggingOptsSrc(client, [
    ...TAGGING_OPTS_DISPLAY_KEYS,
  ]);
  return { error, data };
};

export const denormalizeTagging = (opts: ProfileTaggingOptionsDisplay) => {
  return {
    ...opts,
    collections: opts.collections.map((tag: string) =>
      denormalizeFromKabobCase(tag),
    ),
    tags: opts.tags.map((tag: string) => denormalizeFromKabobCase(tag)),
    styles: opts.styles.map((tag: string) => denormalizeFromKabobCase(tag)),
  };
};
