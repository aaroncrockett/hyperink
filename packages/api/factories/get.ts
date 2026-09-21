import {
  Client,
  Database,
  // Where,
  // AllowedTable,
  // AppTables,
} from "@hyperink/service-providers";

import type {
  UiDbMapping,
  KeyOfTables,
  KeyOfColumns,
  KeyOfColumnsUI,
  KeyOfTablesUI,
  Where,
} from "../types";

const extractSelect = (selectKeys: string[]) =>
  selectKeys.length ? selectKeys.join(",") : "*";

export function createSupabaseGetQueries<T extends KeyOfTables | KeyOfTablesUI>(
  table: T,
  uiDbMapping: UiDbMapping | null,
) {
  return {
    sbGetWhere(client: Client, selectKeys: string[], where: Where[]) {
      let internalSelectKeys = [];

      internalSelectKeys = uiDbMapping
        ? selectKeys.map((key) => {
            return uiDbMapping.toDb;
          })
        : selectKeys;

      const select = extractSelect(internalSelectKeys.map(String));

      let query = client.from(table).select(select);

      for (const condition of where) {
        query = query.eq(condition.columnKey as any, condition.value!);
      }

      return query;
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
