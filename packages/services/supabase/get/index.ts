import type {
  AllowedTable,
  AppInserts,
  AppTables,
  Client,
  SBOptions,
} from "../types";

import { handleLimit, handleOrder } from "../helpers";

export async function get<T extends AllowedTable>(
  client: Client,
  table: T,
  values: Partial<AppInserts[T]>[],
  opts?: SBOptions,
) {
  const selectFields = values.length ? values.join(", ") : "*";

  let query = client.from(table as any).select(selectFields);

  if (opts) {
    query = handleOrder(query, opts);
    query = handleLimit(query, opts);
  }

  const { data, error } = await query;

  return {
    data: data as AppTables[T][] | null,
    error,
  };
}

type By<T extends AllowedTable> = {
  field: keyof AppTables[T];
  value: AppTables[T][keyof AppTables[T]];
};

export async function getBy<T extends AllowedTable>(
  client: Client,
  table: T,
  values: Partial<AppInserts[T]>[],
  by: By<T>[],
  opts?: SBOptions,
) {
  const selectFields = values.length ? values.join(", ") : "*";

  let query = client.from(table as any).select(selectFields);

  for (const condition of by) {
    query = query.eq(condition.field as string, condition.value);
  }

  if (opts) {
    query = handleOrder(query, opts);
    query = handleLimit(query, opts);
  }

  const { data, error } = await query;

  return {
    data: data as AppTables[T][] | null,
    error,
  };
}
