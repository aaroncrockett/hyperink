import { z } from "zod";

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
  defaultValues?: string[];
};

const defaultStyles = ["traditional", "realism", "neo-traditional"];
const defaultTags = ["color", "black and gray", "stippling"];

// Object keyed by column name
export const EDITABLE_TAGGING_COLS = {
  tags: {
    label: "Tags",
    id: "tags",
    type: "list",
    schema: z
      .string()
      .transform((value) => JSON.parse(value))
      .pipe(z.array(z.string())),
    required: false,
    defaultValues: defaultStyles,
  },
  styles: {
    label: "Styles",
    id: "styles",
    type: "list",
    schema: z
      .string()
      .transform((value) => JSON.parse(value))
      .pipe(z.array(z.string())),
    required: false,
    defaultValues: defaultTags,
  },
  collections: {
    label: "Collections",
    id: "collections",
    type: "list",
    schema: z
      .string()
      .transform((value) => JSON.parse(value))
      .pipe(z.array(z.string())),
    required: false,
    defaultValues: defaultTags,
  },
} as const satisfies Partial<
  Record<ProfileTaggingOptsKey, EditableTaggingOpts>
>;

// Array of cols
export const EDITABLE_TAGGING_COL_LIST = Object.values(EDITABLE_TAGGING_COLS);

export const EDITABLE_TAGGING_KEYS = Object.keys(EDITABLE_TAGGING_COLS);
