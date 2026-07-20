import type { ProfileTaggingOptions as ProfileTaggingOptionsDb } from "../types";

import {
  upsertProfileTaggingOpts as upsertProfileTaggingOptsDb,
  getProfileTaggingOpts as getProfileTaggingOptsDb,
} from "@hyperinkstudio/db";

export const upsertProfileTaggingOpts = upsertProfileTaggingOptsDb;
export const getProfileTaggingOpts = getProfileTaggingOptsDb;

export type ProfileTaggingOptions = ProfileTaggingOptionsDb;

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
) as Record<
  (typeof EDITABLE_TAGGING_COLS)[number],
  {
    value: (typeof EDITABLE_TAGGING_COLS)[number];
    label: string;
  }
>;

// Array of option objects
export const EDITABLE_TAGGING_COLS_LIST_OF_OPTS = Object.values(
  EDITABLE_TAGGING_COLS_OPTS,
);
