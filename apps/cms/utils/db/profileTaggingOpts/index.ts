import type { ProfileTaggingOptions as ProfileTaggingOptionsDb } from "../types";

import { isStringArray } from "@hyperinkstudio/utils";

import {
  upsertProfileTaggingOpts as upsertProfileTaggingOptsDb,
  getProfileTaggingOpts as getProfileTaggingOptsDb,
} from "@hyperinkstudio/db";

export const upsertProfileTaggingOpts = upsertProfileTaggingOptsDb;
export const getProfileTaggingOpts = getProfileTaggingOptsDb;

export type ProfileTaggingOptions = ProfileTaggingOptionsDb;

export function createTaggingKeys() {
  return {
    [EDITABLE_TAGGING_COLS_OPTS.tags.value]: [],
    [EDITABLE_TAGGING_COLS_OPTS.styles.value]: [],
    [EDITABLE_TAGGING_COLS_OPTS.collections.value]: [],
  };
}
export function createTaggingValues(
  data: Partial<ProfileTaggingOptions> | null | undefined,
) {
  return {
    tags: isStringArray(data?.[EDITABLE_TAGGING_COLS_OPTS.tags.value])
      ? (data[EDITABLE_TAGGING_COLS_OPTS.tags.value] as string[])
      : [],

    styles: isStringArray(data?.[EDITABLE_TAGGING_COLS_OPTS.styles.value])
      ? (data[EDITABLE_TAGGING_COLS_OPTS.styles.value] as string[])
      : [],

    collections: isStringArray(
      data?.[EDITABLE_TAGGING_COLS_OPTS.collections.value],
    )
      ? (data[EDITABLE_TAGGING_COLS_OPTS.collections.value] as string[])
      : [],
  };
}

// Array of editable column names
export const EDITABLE_TAGGING_COLS = [
  "tags",
  "styles",
  "collections",
] as const satisfies (keyof ProfileTaggingOptions)[];

// Object keyed by column name
export const EDITABLE_TAGGING_COLS_OPTS = Object.fromEntries(
  EDITABLE_TAGGING_COLS.map((value) => [
    value,
    {
      value,
      label: value
        .replaceAll("_", " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    },
  ]),
) as {
  [K in (typeof EDITABLE_TAGGING_COLS)[number]]: {
    value: K;
    label: string;
  };
};

// Array of option objects
export const EDITABLE_TAGGING_COLS_LIST_OF_OPTS = Object.values(
  EDITABLE_TAGGING_COLS_OPTS,
);
