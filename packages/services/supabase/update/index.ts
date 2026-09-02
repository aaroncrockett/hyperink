import type { AllowedTable, AppTables, Client, SBOptions } from "../types";
import { handleLimit, handleOrder } from "../helpers";

type By<T extends AllowedTable> = {
  field: keyof AppTables[T];
  value: AppTables[T][keyof AppTables[T]];
};

export async function update<T extends AllowedTable>(
  client: Client,
  table: T,
  values: Partial<AppTables[T]>,
  by: By<T>[],
  opts?: SBOptions,
) {
  let query = client.from(table as any).update(values as any);

  for (const condition of by) {
    query = query.eq(condition.field as string, condition.value);
  }

  if (opts) {
    query = handleOrder(query, opts);
    query = handleLimit(query, opts);
  }

  if (opts?.returnType === "single") {
    const { data, error } = await query.select().single();

    return {
      data: data as AppTables[T] | null,
      error,
    };
  }

  if (opts?.returnType === "select") {
    const { data, error } = await query.select();

    return {
      data: data as AppTables[T][] | null,
      error,
    };
  }

  const { error } = await query;

  return {
    error,
  };
}
