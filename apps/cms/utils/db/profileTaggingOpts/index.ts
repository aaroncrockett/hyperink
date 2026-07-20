import type { ProfileTaggingOptions } from "../types";

import {
  upsertProfileTaggingOpts as dbupsertProfileTaggingOpts,
  getProfileTaggingOpts as getProfileTaggingOptsDb,
} from "@hyperinkstudio/db";

export const upsertProfileTaggingOpts = dbupsertProfileTaggingOpts;
export const getProfileTaggingOpts = getProfileTaggingOptsDb;

export const EDITABLE_PROFILE_TAGGING_OPTS_COLS = [
  "tags",
  "styles",
  "collections",
] as const satisfies (keyof ProfileTaggingOptions)[];

export const EDITABLE_PROFILE_TAGGING_OPTS_OPTIONS =
  EDITABLE_PROFILE_TAGGING_OPTS_COLS.map((value) => ({
    value,
    label: value.replaceAll("_", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  }));
