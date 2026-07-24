import type { ClientTable } from "../types";

import {
  createClientPerson as dbCreateClientPerson,
  getRecentlyUpdatedClients,
  getClientPersonByEmailOrPhone as getClientPersonByEmailOrPhoneDb,
} from "@hyperinkstudio/db";

export const createClientPerson = dbCreateClientPerson;

export const getClientPersonByEmailOrPhone = getClientPersonByEmailOrPhoneDb;

export const getLastTenClients = getRecentlyUpdatedClients;

// USED TO LOOK UP A CLIENT
export const LOOKUP_CLIENT_COLS = [
  "email",
  "phone",
  "preferred_name",
] as const satisfies (keyof ClientTable)[];

// used when createing a client
export const CREATE_CLIENT_COLS = [
  ...LOOKUP_CLIENT_COLS,
  "bluesky_id",
  "gender",
  "instagram_id",
] as const satisfies (keyof ClientTable)[];

// used when updating a client
export const EDITABLE_CLIENT_COLS = [
  ...CREATE_CLIENT_COLS,
  "last_name",
  "first_name",
] as const satisfies (keyof ClientTable)[];

// USED TO HELP LINK OTHER COLS
export const CLIENT_COLS_ADDITIONAL = [
  "user_id",
  "created_at",
  "updated_at",
] as const satisfies (keyof ClientTable)[];

export const ALL_CLIENT_COLS = [
  ...CLIENT_COLS_ADDITIONAL,
  ...EDITABLE_CLIENT_COLS,
];

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

export const CREATE_CLIENT_COLS_KEY_VAL = Object.fromEntries(
  CREATE_CLIENT_COLS.map((value) => [
    value,
    {
      value,
      label: value
        .replaceAll("_", " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    },
  ]),
) as {
  [K in (typeof CREATE_CLIENT_COLS)[number]]: {
    value: K;
    label: string;
  };
};

export const EDITABLE_CLIENT_COLS_KEY_VAL = Object.fromEntries(
  EDITABLE_CLIENT_COLS.map((value) => [
    value,
    {
      value,
      label: value
        .replaceAll("_", " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    },
  ]),
) as {
  [K in (typeof EDITABLE_CLIENT_COLS)[number]]: {
    value: K;
    label: string;
  };
};

export const ALL_CLIENT_COLS_KEY_VAL = Object.fromEntries(
  ALL_CLIENT_COLS.map((value) => [
    value,
    {
      value,
      label: value
        .replaceAll("_", " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    },
  ]),
) as {
  [K in (typeof ALL_CLIENT_COLS)[number]]: {
    value: K;
    label: string;
  };
};

export const LOOKUP_COLS_KEY_VAL_LIST = Object.values(LOOKUP_COLS_KEY_VAL);

export const CREATE_CLIENT_COLS_KEY_VAL_LIST = Object.values(
  CREATE_CLIENT_COLS_KEY_VAL,
);

export const EDITABLE_CLIENT_COLS_KEY_VAL_LIST = Object.values(
  EDITABLE_CLIENT_COLS_KEY_VAL,
);

export const ALL_CLIENT_COLS_KEY_VAL_LIST = Object.values(
  ALL_CLIENT_COLS_KEY_VAL,
);
