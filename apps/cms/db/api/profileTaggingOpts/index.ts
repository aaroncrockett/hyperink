import {
  // upsertProfileTaggingOpts as upsertProfileTaggingOptsSrc,
  getProfileTaggingOpts as getProfileTaggingOptsSrc,
  Client,
} from "@hyperinkstudio/db";

import {
  createDataCollection,
  getKeysFromCollection,
  getValuesFromCollection,
} from "@hyperinkstudio/utils";

import {
  PLACEMENT_DEFAULT_VALUES as PLACEMENT_DEFAULT_VALUES_SRC,
  STYLE_DEFAULT_VALUES as STYLE_DEFAULT_VALUES_SRC,
  SIZE_DEFAULT_VALUES as SIZE_DEFAULT_VALUES_SRC,
  type ProfileTaggingOptions as ProfileTaggingOptions_Src,
  type ProfileTaggingOptionsKeys as ProfileTaggingOptionsKeys_Src,
  type ProfileTaggingOptionsData as ProfileTaggingOptionsData_Src,
} from "@hyperinkstudio/shared-business/profileTaggingOptions";

import type {
  JsonToStringArray,
  SelectStringArrays,
} from "@hyperinkstudio/shared-business/types";

// Supabase/database representation
export type ProfileTaggingOptions_Db = ProfileTaggingOptions_Src;
export type ProfileTaggingOptionsKeys = ProfileTaggingOptionsKeys_Src;
export type ProfileTaggingOptionsData = ProfileTaggingOptionsData_Src;

// Front-end representation ALL -- easier to work with as string[]
export type ProfileTaggingOptions = JsonToStringArray<ProfileTaggingOptions_Db>;
// Front-end representation  DISPLAYS -- easier to work with as string[]
export type ProfileTaggingOptionsDisplay =
  SelectStringArrays<ProfileTaggingOptions>;

export const PLACEMENT_DEFAULT_VALUES = PLACEMENT_DEFAULT_VALUES_SRC;
export const STYLE_DEFAULT_VALUES = STYLE_DEFAULT_VALUES_SRC;
export const SIZE_DEFAULT_VALUES = SIZE_DEFAULT_VALUES_SRC;

import * as BASE from "@hyperinkstudio/shared-business/profileTaggingOptions/base";

export const TAGGING_OPTS_DISPLAY_COLLECTION = createDataCollection<
  ProfileTaggingOptionsKeys,
  ProfileTaggingOptionsData
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

export const USE_DEFAULTS = BASE.USE_DEFAULTS;

export const TAGGING_OPTS_DISPLAY_KEYS = getKeysFromCollection(
  TAGGING_OPTS_DISPLAY_COLLECTION,
);

export const TAGGING_OPTS_DISPLAY_VALUES = getValuesFromCollection(
  TAGGING_OPTS_DISPLAY_COLLECTION,
);

export const getDisplayProfileTaggingOpts = async (client: Client) => {
  const { error, data } = await getProfileTaggingOptsSrc(client, [
    ...TAGGING_OPTS_DISPLAY_KEYS,
  ]);
  return { error, data };
};
