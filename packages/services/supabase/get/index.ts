import type { Client, AppTables } from "../types";

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

export async function get<T extends AllowedTable>(
  client: Client,
  table: T,
  values: (keyof AppInserts[T])[],
  opts: Options,
) {
  const selectFields = values.length ? values.join(", ") : "*";

  let query = client.from(table as any).select(selectFields);

  if (opts?.order) {
    query = query.order(opts.order.name, opts.order.opts as any);
  } else {
    query = query.order("updated_at", { ascending: false });
  }

  if (opts?.limit) {
    query = query.limit(opts.limit);
  }

  const { data, error } = await query;

  return {
    data: data as AppTables[T][] | null,
    error,
  };
}
