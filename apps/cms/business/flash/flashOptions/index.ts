import { z } from "zod";

// hyperink
import {
  createDataCollection,
  getValuesFromCollection,
} from "@hyperinkstudio/utils";
//
import {
  getFlashOptions as getFlashOptions_Db,
  upsertFlashOptions as upsertFlashOptions_Db,
} from "@hyperinkstudio/api";
import {
  Client,
  type FlashOptions as FlashOptions_Src,
} from "@hyperinkstudio/services";

export type FlashOptions = FlashOptions_Src;

// Local
import * as Types from "./types";

export const DEFAULT_COLLECTION = {
  label: "Default Collection",
  id: "default_collection",
  display: true,
  type: "select",
} as const satisfies Types.FlashOptionsBase;

export const FILTER_BY_TAGS = {
  label: "Filter By Tags",
  id: "filter_by_tags",
  display: true,
  type: "checkbox",
} as const satisfies Types.FlashOptionsBase;

export const FILTER_BY_STYLES = {
  label: "Filter By. Styles",
  id: "filter_by_styles",
  display: true,
  type: "checkbox",
} as const satisfies Types.FlashOptionsBase;

export const SHOW_UPON_UPLOAD = {
  label: "Show Upon Uploads",
  id: "show_upon_upload",
  display: true,
  type: "checkbox",
} as const satisfies Types.FlashOptionsBase;

const BASE_FORM_DATA = {
  default_collection: {
    ...DEFAULT_COLLECTION,
  },
  filter_by_tags: {
    ...FILTER_BY_TAGS,
  },
  filter_by_styles: {
    ...FILTER_BY_STYLES,
  },
  show_upon_upload: {
    ...SHOW_UPON_UPLOAD,
  },
};

export const FLASH_OPTIONS_FORM_DATA = createDataCollection({
  ...BASE_FORM_DATA,
});

export const FLASH_OPTIONS_FORM_LIST = getValuesFromCollection(
  FLASH_OPTIONS_FORM_DATA,
);

export const FLASH_OPTIONS_FORM_SCHEMA = z.object({
  filter_by_tags: z
    .literal("on")
    .optional()
    .transform((v) => v === "on"),
  filter_by_styles: z
    .literal("on")
    .optional()
    .transform((v) => v === "on"),
  show_upon_upload: z
    .literal("on")
    .optional()
    .transform((v) => v === "on"),
  default_collection: z.string().optional(),
});

export * from "./types";

export const getFlashDisplayOptions = async (client: Client) => {
  return await getFlashOptions_Db(client, [
    "default_collection",
    "filter_by_styles",
    "filter_by_tags",
    "show_upon_upload",
  ]);
};
export const upsertFlashOptions = upsertFlashOptions_Db;
