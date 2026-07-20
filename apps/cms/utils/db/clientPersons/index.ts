import type { ClientTable } from "../types";

import { createClientPerson as dbCreateClientPerson } from "@hyperinkstudio/db";

export const createClientPerson = dbCreateClientPerson;

export const LOOKUP_CLIENT_COLS = [
  "email",
  "phone",
  "preferred_name",
] as const satisfies (keyof ClientTable)[];

export const CREATE_CLIENT_COLS = [
  ...LOOKUP_CLIENT_COLS,
  "last_name",
  "first_name",
];

export const LOOKUP_COLS_OPTIONS = LOOKUP_CLIENT_COLS.map((value) => ({
  value,
  label: value.replaceAll("_", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
}));

export const CREATE_CLIENT_COLS_OPTIONS = CREATE_CLIENT_COLS.map((value) => ({
  value,
  label: value.replaceAll("_", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
}));
