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
import type { Execute } from "../types";

const executeDefault = {
  method: "execute",
  keys: [],
};

export function createSupabaseCreateQueries<
  T extends KeyOfTables | KeyOfTablesUI,
>(table: T, uiDbMapping: UiDbMapping | null) {
  return {
    async create<I>(
      client: Client,
      inserts: DBKeyValue<I>[],
      execute: Execute,
      modifyQuery?: (query: any) => any,
    ) {
      const internalInserts = mapInsertsToDb(inserts as any, uiDbMapping);

      let query = client.from(table).insert(internalInserts as any);

      if (modifyQuery) {
        query = modifyQuery(query);
      }

      return await executeQuery(uiDbMapping, execute, query);
    },
  };
}
