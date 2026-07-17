import type { ClientTable } from "";

export const TABLE_CLIENT_PERSON = "client";

export const CLIENT_COLS = [
  "id",
  "preferred_name",
  "email",
  "phone",
] as const satisfies (keyof ClientTable)[];

export const CLIENT_COLS_KEY_VAL = CLIENT_COLS.reduce(
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
    keyof ClientTable,
    {
      key: keyof ClientTable;
      name: string;
    }
  >,
);

export const CLIENT_COLS_KEY_VAL_LIST = Object.values(CLIENT_COLS_KEY_VAL);
