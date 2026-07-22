import type { ClientTable } from "../types";

import {
  createClientPerson as dbCreateClientPerson,
  getRecentlyUpdatedClients,
} from "@hyperinkstudio/db";

export const createClientPerson = dbCreateClientPerson;

export const getLastTenClients = getRecentlyUpdatedClients;

// USED TO LOOK UP A CLIENT
export const LOOKUP_CLIENT_COLS = [
  "email",
  "phone",
  "preferred_name",
] as const satisfies (keyof ClientTable)[];

export const LOOKUP_COLS_KEY_VAL = Object.fromEntries(
  LOOKUP_CLIENT_COLS.map((value) => [
    value,
    {
      value,
      label: value
        .replaceAll("_", " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    },
  ]),
) as {
  [K in (typeof LOOKUP_CLIENT_COLS)[number]]: {
    value: K;
    label: string;
  };
};

export const LOOKUP_COLS_KEY_VAL_LIST = Object.values(LOOKUP_COLS_KEY_VAL);
