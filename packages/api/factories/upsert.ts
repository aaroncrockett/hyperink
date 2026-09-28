import { Client } from "@hyperink/service-providers";
//
import type {
  UiDbMapping,
  KeyOfTables,
  KeyOfTablesUI,
  DBKeyValue,
} from "../types";
import { mapInsertsToDb, executeQuery } from "./helpers";
//
import type { Execute, Options } from "../types";

const executeDefault: Execute = {
  method: "execute",
  options: {},
  keys: [],
};

export function createSupabaseUpsertQueries<
  T extends KeyOfTables | KeyOfTablesUI,
>(table: T, uiDbMapping: UiDbMapping | null) {
  return {
    async upsert<I>(
      client: Client,
      inserts: DBKeyValue<I>[],
      execute: Execute = executeDefault,
      modifyQuery?: (query: any) => any,
    ) {
      const internalInserts = mapInsertsToDb(inserts as any, uiDbMapping);

      let query = client
        .from(table)
        .upsert(internalInserts as any, execute.options);

      if (modifyQuery) {
        query = modifyQuery(query);
      }

      return await executeQuery(uiDbMapping, execute, query);
    },
  };
}
