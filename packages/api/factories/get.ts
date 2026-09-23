import { Client } from "@hyperink/service-providers";
//
import { extractSelect, mapSelectsToDb } from "./helpers";
import type { UiDbMapping, KeyOfTables, KeyOfTablesUI, Where } from "../types";

export function createSupabaseGetQueries<T extends KeyOfTables | KeyOfTablesUI>(
  table: T,
  uiDbMapping: UiDbMapping | null,
) {
  return {
    sbGetWhere(client: Client, selectKeys: string[], where: Where[]) {
      const internalSelectKeys = uiDbMapping
        ? mapSelectsToDb(selectKeys, uiDbMapping)
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
