// Hyperink api
import { getProfileTaggingOpts as getProfileTaggingOptsSrc } from "@hyperinkstudio/api";
import { SelectStringArrays } from "@hyperinkstudio/business";
// Hyperink backend-services
import type {
  Client,
  ProfileTaggingOptions as ProfileTaggingOptions_Src,
} from "@hyperinkstudio/backend-services";
// Hyperink utils
import {
  createDataCollection,
  getKeysFromCollection,
  //   getValuesFromCollection,
} from "@hyperinkstudio/utils";
// Hyperink business
import * as BASE_TAGGING from "@hyperinkstudio/business/profileTaggingOptions/base";
import { COLLECTIONS } from "@hyperinkstudio/business/profileTaggingOptions/base";

// Supabase/database representation

export const TAGGING_OPTS_DISPLAY_BASE = {
  collections: BASE_TAGGING.COLLECTIONS,
  styles: BASE_TAGGING.STYLES,
  tags: BASE_TAGGING.TAGS,
};

export const TAGGING_OPTS_DISPLAY = createDataCollection({
  ...TAGGING_OPTS_DISPLAY_BASE,
});

export const TAGGING_OPTS_DISPLAY_KEYS =
  getKeysFromCollection(TAGGING_OPTS_DISPLAY);

export type ProfileTaggingOptionsDisplay =
  SelectStringArrays<ProfileTaggingOptions_Src>;

export const getDisplayProfileTaggingOpts = async (client: Client) => {
  const { error, data } = await getProfileTaggingOptsSrc(client, [
    ...TAGGING_OPTS_DISPLAY_KEYS,
  ]);
  return { error, data };
};

export const getCollProfileTaggingOpts = async (client: Client) => {
  const { error, data } = await getProfileTaggingOptsSrc(client, [
    COLLECTIONS.id,
  ]);

  type Collection = string[];

  const collectionsData = data && (data[0].collections as Collection);

  return { error, data: collectionsData };
};

export type ProfileTaggingOptions = ProfileTaggingOptions_Src;
