import { z } from "zod";

import * as Types from "./types";
// import { TattooTypeOptions, PlacementOptions, SizeOptions } from "./options";

export const AVAIL_SIZES = {
  label: "Available Sizes",
  id: "avail_tattoo_sizes",
  type: "select",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "md",
} as const satisfies Types.ProfileTaggingOptionsData;

export const COLLECTIONS = {
  label: "Collections",
  id: "collections",
  type: "select",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "md",
} as const satisfies Types.ProfileTaggingOptionsData;

// Wat on Inks and Needles

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
} as const satisfies Types.ProfileTaggingOptionsData;
