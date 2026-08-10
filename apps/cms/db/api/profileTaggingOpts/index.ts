import { z } from "zod";

import {
  upsertProfileTaggingOpts as upsertProfileTaggingOptsSrc,
  getProfileTaggingOpts as getProfileTaggingOptsSrc,
  Client,
} from "@hyperinkstudio/db";

import type { ProfileTaggingOptions as ProfileTaggingOptionsSrc } from "../../types";

import {
  TAGGING_OPTS_BASE_FORM_KEYS as TAGGING_OPTS_BASE_FORM_KEYS_SRC,
  // PLACEMENT_DEFAULT_VALUES as PLACEMENT_DEFAULT_VALUES_SRC,
  // STYLE_DEFAULT_VALUES as STYLE_DEFAULT_VALUES_SRC,
  // SIZE_DEFAULT_VALUES as SIZE_DEFAULT_VALUES_SRC,
  TAGGING_OPTS_BASE_FORM as TAGGING_OPTS_BASE_FORM_SRC,
} from "@hyperinkstudio/shared-business/profileTaggingOptions";

// export const PLACEMENT_DEFAULT_VALUES = PLACEMENT_DEFAULT_VALUES_SRC;
// export const STYLE_DEFAULT_VALUES = STYLE_DEFAULT_VALUES_SRC;
// export const SIZE_DEFAULT_VALUES = SIZE_DEFAULT_VALUES_SRC;
export const TAGGING_OPTS_BASE_FORM = TAGGING_OPTS_BASE_FORM_SRC;

export type TaggingOptionsValues = {
  [K in (typeof TAGGING_OPTS_BASE_FORM_KEYS)[number]]: string[];
};

export const upsertProfileTaggingOpts = upsertProfileTaggingOptsSrc;

export const getDisplayProfileTaggingOpts = async (client: Client) => {
  const { error, data } = await getProfileTaggingOptsSrc(client, [
    ...TAGGING_OPTS_BASE_FORM_KEYS_SRC,
  ]);
  return { error, data };
};

export const TAGGING_OPTS_BASE_FORM_KEYS = TAGGING_OPTS_BASE_FORM_KEYS_SRC;

export type ProfileTaggingOptions = ProfileTaggingOptionsSrc;

export type ProfileTaggingOptsKey = keyof ProfileTaggingOptions;
