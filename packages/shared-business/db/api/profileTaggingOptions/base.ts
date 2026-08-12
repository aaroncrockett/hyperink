import { z } from "zod";
// Types
import * as Types from "./types";

export const AVAIL_SIZES = {
  label: "Available Sizes",
  id: "avail_tattoo_sizes",
  display: true,
  // type: "chip",
  // schema: z.string().trim().optional(),
  // required: false,
  // inputSize: "md",
  // defaultValues: [...SIZE_DEFAULT_VALUES],
} as const satisfies Types.ProfileTaggingOptionsBase;

export const COLLECTIONS = {
  label: "Collections",
  id: "collections",
  display: true,
  // type: "chip",
  // schema: z.string().trim().optional(),
  // required: false,
  // inputSize: "md",
} as const satisfies Types.ProfileTaggingOptionsBase;

export const CREATED_AT = {
  label: "Crdeated At",
  id: "created_at",
  display: false,
} as const satisfies Types.ProfileTaggingOptionsBase;

export const INKS = {
  label: "Inks",
  id: "inks",
  display: true,
} as const satisfies Types.ProfileTaggingOptionsBase;

export const NEEDLES = {
  label: "Needles",
  id: "needles",
  display: true,
} as const satisfies Types.ProfileTaggingOptionsBase;

export const PLACEMENT_LOCATIONS = {
  label: "Placement",
  id: "placement_locations",
  display: true,
  // type: "chip",
  // schema: z.string().trim().optional(),
  // required: false,
  // inputSize: "md",
  // defaultValues: [...PLACEMENT_DEFAULT_VALUES],
} as const satisfies Types.ProfileTaggingOptionsBase;

export const STUDIO_LOCATIONS = {
  label: "Studio Locations",
  id: "studio_locations",
  display: true,
  // type: "chip",
  // schema: z.string().trim().optional(),
  // required: false,
  // inputSize: "md",
} as const satisfies Types.ProfileTaggingOptionsBase;

export const STYLES = {
  label: "Styles",
  id: "styles",
  display: true,
  // type: "chip",
  // schema: z.string().trim().optional(),
  // required: false,
  // inputSize: "md",
  // defaultValues: [...STYLE_DEFAULT_VALUES],
} as const satisfies Types.ProfileTaggingOptionsBase;

export const TAGS = {
  label: "Tags",
  id: "tags",
  display: true,
} as const satisfies Types.ProfileTaggingOptionsBase;

export const UPDATED_AT = {
  label: "Updated At",
  id: "updated_at",
  display: false,
} as const satisfies Types.ProfileTaggingOptionsBase;

// Wait on Inks and Needles

// export const INKS = {
//   label: "Inks",
//   id: "inks",
//   type: "select",
//   schema: z.string().trim().optional(),
//   required: false,
//   inputSize: "md",
// } as const satisfies Types.ProfileTaggingOptionsBase;

// export const NEEDLES = {
//   label: "Needles",
//   id: "needles",
//   type: "select",
//   schema: z.string().trim().optional(),
//   required: false,
//   inputSize: "md",
// } as const satisfies Types.ProfileTaggingOptionsBase;
