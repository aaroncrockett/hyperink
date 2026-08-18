// Hyperink api
import { getProfileTaggingOpts as getProfileTaggingOptsSrc } from "@hyperinkstudio/api";
import { SelectStringArrays } from "@hyperinkstudio/business";
// Hyperink backend-services
import type {
  Client,
  ProfileTaggingOptions,
} from "@hyperinkstudio/backend-services";
// Hyperink utils
import {
  createDataCollection,
  getKeysFromCollection,
  //   getValuesFromCollection,
} from "@hyperinkstudio/utils";
// Hyperink business
import * as BASE_TAGGING from "@hyperinkstudio/business/profileTaggingOptions/base";
import {
  type ProfileTaggingOptionsKeys as ProfileTaggingOptionsKeys_Src,
  type ProfileTaggingOptionsBase as ProfileTaggingOptionsBase_Src,
} from "@hyperinkstudio/business/profileTaggingOptions";

// Supabase/database representation
export type ProfileTaggingOptionsKeys = ProfileTaggingOptionsKeys_Src;
export type ProfileTaggingOptionsBase = ProfileTaggingOptionsBase_Src;

export const TAGGING_OPTS_DISPLAY_BASE = {
  collections: BASE_TAGGING.COLLECTIONS,
  styles: BASE_TAGGING.STYLES,
  tags: BASE_TAGGING.TAGS,
};

export const TAGGING_OPTS_DISPLAY = createDataCollection<
  ProfileTaggingOptionsKeys,
  ProfileTaggingOptionsBase
>({
  ...TAGGING_OPTS_DISPLAY_BASE,
});

export const TAGGING_OPTS_DISPLAY_KEYS =
  getKeysFromCollection(TAGGING_OPTS_DISPLAY);

export type ProfileTaggingOptionsDisplay =
  SelectStringArrays<ProfileTaggingOptions>;

export const getDisplayProfileTaggingOpts = async (client: Client) => {
  const { error, data } = await getProfileTaggingOptsSrc(client, [
    ...TAGGING_OPTS_DISPLAY_KEYS,
  ]);
  return { error, data };
};
