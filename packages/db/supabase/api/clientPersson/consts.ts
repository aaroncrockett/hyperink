import type { ClientTable } from "@hyperinkstudio/db";

export const TABLE_CLIENT_PERSON = "client";

export const CLIENT_COLS = [
  "id",
  "user_id",
  "created_at",
  "updated_at",
  "bluesky_id",
  "email",
  "first_name",
  "gender",
  "instagram_id",
  "last_name",
  "phone",
  "preferred_name",
] as const satisfies (keyof ClientTable)[];
