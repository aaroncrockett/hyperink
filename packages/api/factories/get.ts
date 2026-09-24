import { Client } from "@hyperink/service-providers";
//

import type {
  UiDbMapping,
  KeyOfTables,
  KeyOfTablesUI,
  DBKeyValue,
  ExecuteSelect,
} from "../types";

import {
  mapSelectsToDb,
  mapInsertsToDb,
  extractSelect,
  executeQuery,
} from "./helpers";

const executeDefault = {
  method: "single",
  keys: [],
};

export function createSupabaseGetQueries<T extends KeyOfTables | KeyOfTablesUI>(
  table: T,
  uiDbMapping: UiDbMapping | null,
) {
  return {
    async sbGetWhere<I>(
      client: Client,
      where: DBKeyValue<I>[],
      execute: ExecuteSelect,
      modifyQuery?: (query: any) => any,
    ) {
      const arrayKeys = mapSelectsToDb(
        execute.keys satisfies keyof I[],
        uiDbMapping,
      );
      const selectKeys = extractSelect(arrayKeys ?? []);

      let query = client.from(table).select(selectKeys);

      const inserts = mapInsertsToDb(where as any, uiDbMapping);

      for (const condition of where) {
        const [key, value] = Object.entries(condition)[0];
        query = (query as any).eq(key, value);
      }

      if (modifyQuery) {
        query = modifyQuery(query);
      }

      return await executeQuery(uiDbMapping, execute, query);
    },

    // sbGetOverlapping(
    //   client: Client,
    //   selectKeys: (keyof AppTables[T] & string)[],
    //   overlaps: Where<T>[],
    // ) {
    //   let query = this.sbGet(client, selectKeys);

    //   for (const condition of overlaps) {
    //     query = query.overlaps(
    //       condition.columnKey as any,
    //       condition.value! as any[],
    //     );
    //   }

    //   return query;
    // },
  };
}
