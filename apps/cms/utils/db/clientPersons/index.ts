import type { ClientTable } from "../types";

import { createClientPerson as dbCreateClientPerson } from "@inktree/db";

export const createClientPerson = dbCreateClientPerson;

export const LookupClientCols = [
  "email",
  "phone",
  "preferred_name",
] as const satisfies (keyof ClientTable)[];

export const CreateClientCols = [
  ...LookupClientCols,
  "last_name",
  "first_name",
];

export const LookupColOptions = LookupClientCols.map((value) => ({
  value,
  label: value.replaceAll("_", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
}));

export const CreateClientColsOptions = CreateClientCols.map((value) => ({
  value,
  label: value.replaceAll("_", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
}));
