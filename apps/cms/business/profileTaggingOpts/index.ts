import z from "zod";
// hyperink api & backend
import {
  upsertProfileTaggingOpts as upsertProfileTaggingOptsSrc,
  getProfileTaggingOpts as getProfileTaggingOptsSrc,
} from "@hyperinkstudio/api";
import type { Client } from "@hyperinkstudio/backend-services";
// hyperink utils
import {
  createDataCollection,
  getKeysFromCollection,
  getValuesFromCollection,
} from "@hyperinkstudio/utils";
// hyperink shared business
import {
  type ProfileTaggingOptions as ProfileTaggingOptions_Src,
  type ProfileTaggingOptionsKeys as ProfileTaggingOptionsKeys_Src,
  type ProfileTaggingOptionsBase as ProfileTaggingOptionsBase_Src,
} from "@hyperinkstudio/business/profileTaggingOptions";
import type {
  JsonToStringArray,
  SelectStringArrays,
} from "@hyperinkstudio/business/types";

// Supabase/database representation
export type ProfileTaggingOptions_Db = ProfileTaggingOptions_Src;
export type ProfileTaggingOptionsKeys = ProfileTaggingOptionsKeys_Src;
export type ProfileTaggingOptionsBase = ProfileTaggingOptionsBase_Src;

// Front-end representation ALL -- easier to work with as string[]
export type ProfileTaggingOptions = JsonToStringArray<ProfileTaggingOptions_Db>;
// Front-end representation  DISPLAYS -- easier to work with as string[]
export type ProfileTaggingOptionsDisplay =
  SelectStringArrays<ProfileTaggingOptions>;

import * as BASE from "@hyperinkstudio/business/profileTaggingOptions/base";

export const TAGGING_OPTS_DISPLAY_COLLECTION = createDataCollection<
  ProfileTaggingOptionsKeys,
  ProfileTaggingOptionsBase
>({
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

export const upsertProfileTaggingOpts = upsertProfileTaggingOptsSrc;

export const getDisplayProfileTaggingOpts = async (client: Client) => {
  const { error, data } = await getProfileTaggingOptsSrc(client, [
    ...TAGGING_OPTS_DISPLAY_KEYS,
  ]);
  return { error, data };
};
