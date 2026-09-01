import type { Client, AppTables } from "../types";

type AllowedTable = keyof AppTables;

type AppInserts = {
  [K in AllowedTable]: Partial<AppTables[K]>;
};

export async function insert<T extends AllowedTable>(
  client: Client,
  table: T,
  values: (keyof AppInserts[T])[],
  returnType?: "select" | "single",
) {
  const query = client.from(table as any);

  let executionQuery = query.insert(values as any);

  if (returnType === "single") {
    const { data, error } = await executionQuery.select().single();

    return { data: data as AppTables[T], error };
  }

  if (returnType === "select") {
    const { data, error } = await executionQuery.select();
    return { data: data as AppTables[T][], error };
  }

  const { error } = await executionQuery;
  return { error };
}
