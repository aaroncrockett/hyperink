import type { TattooRequest } from "../types";

import { createTattooRequest as createTattooRequestDb } from "@hyperinkstudio/db";

export const createTattooRequest = createTattooRequestDb;

// USED TO LOOK UP A CLIENT
export const EDITABLE_TATTOO_REQUEST_COLS = [
  "email",
  "phone",
  "preferred_name",
] as const satisfies (keyof TattooRequest)[];

export const EDITABLE_TATTOO_REQUEST_COLS_KEY_VAL = Object.fromEntries(
  EDITABLE_TATTOO_REQUEST_COLS.map((value) => [
    value,
    {
      value,
      label: value
        .replaceAll("_", " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    },
  ]),
) as {
  [K in (typeof EDITABLE_TATTOO_REQUEST_COLS)[number]]: {
    value: K;
    label: string;
  };
};

export const EDITABLE_TATTOO_REQUEST_COLS_KEY_VAL_LIST = Object.values(
  EDITABLE_TATTOO_REQUEST_COLS_KEY_VAL,
);
