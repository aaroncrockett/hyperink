import * as Types from "./types";
import * as Base from "./base";

import { createTattooRequest as createTattooRequest_src } from "@hyperinkstudio/api";

export const createTattooRequest = createTattooRequest_src;

export * from "./types";

export const DISPLAY_TATT_REQ_KEYS = new Set([
  "type",
  "preferred_name",
  "email",
  "phone",
  "gender",
  "bluesky_id",
  "instagram_id",
  "notes",
] as const);

export const DISPLAY_TATT_REQ = [...DISPLAY_TATT_REQ_KEYS]
  .map((key) => Object.values(Base).find((field) => field.id === key))
  .filter(Boolean);
