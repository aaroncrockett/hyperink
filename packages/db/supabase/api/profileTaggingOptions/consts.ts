import type { ProfileTaggingOptions } from "@hyperinkstudio/db/supabase";

export const TABLE_PROFILE_TAGGING_OPTS = "profile_tagging_options";

export const PROFILE_TAGGING_OPTS_COLS = [
  "id",
  "user_id",
  "created_at",
  "collections",
  "styles",
  "tags",
  "updated_at",
] as const satisfies (keyof ProfileTaggingOptions)[];

export const PROFILE_TAGGING_OPTS_KEY_VAL = PROFILE_TAGGING_OPTS_COLS.reduce(
  (acc, key) => {
    acc[key] = {
      key,
      name: key
        .replaceAll("_", " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()),
    };

    return acc;
  },
  {} as Record<
    keyof ProfileTaggingOptions,
    {
      key: keyof ProfileTaggingOptions;
      name: string;
    }
  >,
);

export const PROFILE_TAGGING_OPTS_KEY_VAL_LIST = Object.values(
  PROFILE_TAGGING_OPTS_KEY_VAL,
);
