import { z } from "zod";
import * as Types from "./types";

export const SEEN_AT = {
  label: "Seen",
  id: "seen_at",
  type: "checkbox",
  schema: z
    .literal("on")
    .optional()
    .transform((v) => v === "on"),
  required: false,
  inputSize: "lg",
} as const satisfies Types.TattooRequestData<"type">;

// READ ONLY
export const CREATED_AT = {
  label: "Request Date",
  id: "created_at",
  required: false,
  type: "",
} as const satisfies Types.TattooRequestData<"type">;
