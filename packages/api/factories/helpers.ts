import type { UiDbMapping, BroadWhere, Execute } from "../types";
import { HIAPIError } from "@hyperink/api";
import { Client } from "@hyperink/service-providers";

export const extractSelect = (selectKeys: string[]) =>
  selectKeys.length ? selectKeys.join(",") : "*";

export const mapInsertsToDb = (
  inserts: BroadWhere[],
  uiDbMapping?: UiDbMapping | null,
) =>
  inserts.map((insert) =>
    Object.fromEntries(
      Object.entries(insert).map(([key, value]) => [
        uiDbMapping?.toDb ?? key,
        value,
      ]),
    ),
  );

export const mapSelectsToDb = (
  selectKeys: string[],
  uiDbMapping?: UiDbMapping | null,
) => selectKeys.map(() => uiDbMapping?.toDb ?? "");

export const single = async <T>(
  fn: (...args: any[]) => any,
  ...args: any[]
) => {
  const query = fn(...args);

  const { data, error: resultError } = await (
    query?.select().single() as { overrideTypes: <U, V>() => any }
  ).overrideTypes<T, { merge: false }>();

  const error: HIAPIError | null = resultError
    ? {
        message: resultError.message,
        details: resultError.details,
      }
    : null;

  return { data, error };
};

interface DynamicSupabaseQuery {
  select(keys: string): DynamicSupabaseQuery;
  single(): DynamicSupabaseQuery;
  maybeSingle(): DynamicSupabaseQuery;
  overrideTypes<Result, Options = { merge: false }>(): Promise<any>;
}

export const executeQuery = async <T>(
  uiDbMapping: UiDbMapping | null,
  execute: Execute,
  query: any,
) => {
  if ((execute.method = "execute")) {
    const result = await (query as DynamicSupabaseQuery).overrideTypes<
      T,
      { merge: false }
    >();
    return handleResult(result);
  }

  if ((execute.method = "single")) {
    const selectKeys = extractSelect(execute.keys ?? []);

    const result = await (query as DynamicSupabaseQuery)
      .single()
      .overrideTypes<T, { merge: false }>();

    return handleResult(result);
  }
  if ((execute.method = "maybe-single")) {
    const result = await (query as DynamicSupabaseQuery)
      .maybeSingle()
      .overrideTypes<T, { merge: false }>();

    return handleResult(result);
  }

  return query;
};

export const handleResult = (result: any, type = "exectue") => {
  if (!result) {
    return {
      data: null,
      error: {
        message: "no supabase result",
      },
    };
  }

  const { error: resultError } = result;

  const error: HIAPIError | null = resultError
    ? {
        message: resultError.message,
        details: resultError.details,
      }
    : null;

  return { error, data: result.data ?? null };
};

// export const execute = async <T>(
//   fn: (...args: any[]) => any,
//   ...args: any[]
// ) => {
//   const query = fn(...args);

//   const result = await query;
//   if (!result) {
//     return {
//       type: "supbase error",
//     };
//   }

//   const { error: resultError } = result;

//   const error: HIAPIError | null = resultError
//     ? {
//         message: resultError.message,
//         details: resultError.details,
//       }
//     : null;

//   return { error };
// };
