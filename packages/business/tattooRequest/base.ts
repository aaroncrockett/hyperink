import { z } from "zod";
import * as Types from "./types";

// READ ONLY
export const CREATED_AT = {
  label: "Request Date",
  id: "created_at",
  required: false,
  type: "",
} as const satisfies Types.TattooRequestData<"type">;
