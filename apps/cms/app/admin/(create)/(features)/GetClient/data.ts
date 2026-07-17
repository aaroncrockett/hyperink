import type { ClientTable } from "@inktree/db";

export const LookupCols = [
  "email",
  "phone",
  "preferred_name",
] as const satisfies readonly (keyof ClientTable)[];

export const LookupColOptions = LookupCols.map((value) => ({
  value,
  label: value.replaceAll("_", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
}));
