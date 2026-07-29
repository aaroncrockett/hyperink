import { z } from "zod";

import { isStringArray } from "@hyperinkstudio/utils";
import {
  upsertProfileTaggingOpts as upsertProfileTaggingOptsDb,
  getProfileTaggingOpts as getProfileTaggingOptsDb,
} from "@hyperinkstudio/db";

import type { ProfileTaggingOptions as ProfileTaggingOptionsDb } from "../types";

export const upsertProfileTaggingOpts = upsertProfileTaggingOptsDb;
export const getProfileTaggingOpts = getProfileTaggingOptsDb;

export type ProfileTaggingOptions = ProfileTaggingOptionsDb;

export type ProfileTaggingOptsKey = keyof ProfileTaggingOptions;

export type EditableTaggingOpts = {
  label: string;
  id: ProfileTaggingOptsKey;
  type: React.HTMLInputTypeAttribute;
  schema: z.ZodType;
  required?: boolean;
  value?: string;
};

// Object keyed by column name
export const EDITABLE_TAGGING_COLS = {
  tags: {
    label: "Tags",
    id: "tags",
    type: "",
    schema: z
      .string()
      .transform((value) => JSON.parse(value))
      .pipe(z.array(z.string())),
    required: false,
  },
} as const satisfies Partial<
  Record<ProfileTaggingOptsKey, EditableTaggingOpts>
>;

// Array of option objects
export const EDITABLE_TAGGING_COL_LIST = Object.values(EDITABLE_TAGGING_COLS);
