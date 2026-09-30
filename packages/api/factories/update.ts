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

const executeDefault: Execute = {
  method: "execute",
  options: {},
  keys: [],
};

export function createSupabaseUpdateQueries<
  T extends KeyOfTables | KeyOfTablesUI,
>(table: T, uiDbMapping: UiDbMapping | null) {
  return {
    async update<I>(
      client: Client,
      updates: DBKeyValue<I>,
      execute: Execute = executeDefault,
      modifyQuery?: (query: any) => any,
    ) {
      const internalUpdates = mapInsertsToDb([updates] as any, uiDbMapping)[0];

      let query = client.from(table).update(internalUpdates as any);

      if (modifyQuery) {
        query = modifyQuery(query);
      }

      return await executeQuery(uiDbMapping, execute, query);
    },
  };
}
