import type { Client, AppTables } from "../types";
import type { PostgrestFilterBuilder } from "@supabase/supabase-js";

type AllowedTable = keyof AppTables;

type AppInserts = {
  [K in AllowedTable]: Partial<AppTables[K]>;
};

type Order = {
  name: string;
  opts?: {
    ascending?: boolean;
    nullsFirst?: boolean;
    foreignTable?: string;
    [key: string]: unknown;
  };
};

type Options = {
  limit?: number;
  order?: Order;
  [key: string]: unknown;
};

const handleOrder = <T extends { order: Function }>(
  query: T,
  opts: Options,
) => {
  if (opts?.order) {
    query = query.order(opts.order.name, opts.order.opts as any);
  } else {
    query = query.order("updated_at", { ascending: false });
  }

  return query;
};

const handleLimit = <T extends { limit: Function }>(
  query: T,
  opts: Options,
) => {
  if (opts?.limit) {
    query = query.limit(opts.limit);
  }

  return query;
};

export async function get<T extends AllowedTable>(
  client: Client,
  table: T,
  values: Partial<AppInserts[T]>[],
  opts?: Options,
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
  opts?: Options,
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
