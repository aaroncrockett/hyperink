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
      where: DBKeyValue<I>[],
      execute: Execute = executeDefault,
      modifyQuery?: (query: any) => any,
    ) {
      const internalUpdates = mapInsertsToDb([updates] as any, uiDbMapping)[0];

      let query = client.from(table).update(internalUpdates as any);

      for (const condition of where) {
        const [key, value] = Object.entries(condition)[0];
        query = (query as any).eq(key, value);
      }

      if (modifyQuery) {
        query = modifyQuery(query);
      }

      return await executeQuery(uiDbMapping, execute, query);
    },
    async updateWithin<I>(
      client: Client,
      updates: DBKeyValue<I>,
      within: Partial<Record<keyof I, string[]>>,
      execute: Execute = executeDefault,
      modifyQuery?: (query: any) => any,
    ) {
      const internalUpdates = mapInsertsToDb([updates] as any, uiDbMapping)[0];

      let query = client.from(table).update(internalUpdates as any);

      for (const [key, value] of Object.entries(within)) {
        query = (query as any).in(key, value);
      }

      if (modifyQuery) {
        query = modifyQuery(query);
      }

      return await executeQuery(uiDbMapping, execute, query);
    },
  };
}
