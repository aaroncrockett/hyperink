import type { TattooRequest } from "@hyperinkstudio/db";

export const TABLE_TATTOO_REQUEST = "client";

export const TABLE_TATTOO_REQUEST_COLS = [
  "id",
  "user_id",
  "created_at",
  "bluesky_id",
  "email",
  "first_name",
  "gender",
  "instagram_id",
  "last_name",
  "notes",
  "paid_amount",
  "phone",
  "preferred_name",
  "returning_client",
  "type",
  "client_tattoo_id",
  "seen_at",
  "updated_at",
] as const satisfies (keyof TattooRequest)[];
