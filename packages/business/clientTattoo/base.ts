import { z } from "zod";

import * as Types from "./types";

export const TYPE = {
  label: "Tattoo Type",
  id: "type",
  type: "select",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "sm",
  options: ["flash", "custom"],
} as const satisfies Types.ClientTattooData<"type">;

export const TITLE = {
  label: "Tattoo Title",
  id: "title",
  type: "text",
  schema: z.string().trim().optional(),
  required: true,
  inputSize: "md",
} as const satisfies Types.ClientTattooData<"type">;

export const FLASH_ID = {
  label: "Flash ID",
  id: "flash_id",
  type: "hidden",
  schema: z.string().min(1),
} as const satisfies Types.ClientTattooData<"type">;

export const NOTES = {
  label: "Notes",
  id: "notes",
  type: "textarea",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "lg",
} as const satisfies Types.ClientTattooData<"type">;

export const BUDGET = {
  label: "Budget",
  id: "budget",
  type: "number",
  schema: z.coerce.number().min(0).default(0),
  required: false,
  inputSize: "md",
} as const satisfies Types.ClientTattooData<"budget">;
