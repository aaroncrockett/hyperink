import { z } from "zod";
// Types
import * as Types from "./types";

import {
  SIZE_DEFAULT_VALUES,
  STYLE_DEFAULT_VALUES,
  PLACEMENT_DEFAULT_VALUES,
} from "./options";

export const AVAIL_SIZES = {
  label: "Available Sizes",
  id: "avail_tattoo_sizes",
  type: "chip",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "md",
  defaultValues: [...SIZE_DEFAULT_VALUES],
} as const satisfies Types.ProfileTaggingOptionsData;

export const COLLECTIONS = {
  label: "Collections",
  id: "collections",
  type: "chip",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "md",
} as const satisfies Types.ProfileTaggingOptionsData;

export const STUDIO_LOCATIONS = {
  label: "Studio Locations",
  id: "studio_locations",
  type: "chip",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "md",
} as const satisfies Types.ProfileTaggingOptionsData;

export const STYLES = {
  label: "Styles",
  id: "styles",
  type: "chip",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "md",
  defaultValues: [...STYLE_DEFAULT_VALUES],
} as const satisfies Types.ProfileTaggingOptionsData;

export const TAGS = {
  label: "Tags",
  id: "tags",
  type: "chip",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "md",
} as const satisfies Types.ProfileTaggingOptionsData;

export const PLACEMENT_LOCATIONS = {
  label: "Placement",
  id: "placement_locations",
  type: "chip",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "md",
  defaultValues: [...PLACEMENT_DEFAULT_VALUES],
} as const satisfies Types.ProfileTaggingOptionsData;

// Wait on Inks and Needles

// export const INKS = {
//   label: "Inks",
//   id: "inks",
//   type: "select",
//   schema: z.string().trim().optional(),
//   required: false,
//   inputSize: "md",
// } as const satisfies Types.ProfileTaggingOptionsData;

// export const NEEDLES = {
//   label: "Needles",
//   id: "needles",
//   type: "select",
//   schema: z.string().trim().optional(),
//   required: false,
//   inputSize: "md",
// } as const satisfies Types.ProfileTaggingOptionsData;
