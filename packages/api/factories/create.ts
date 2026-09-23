import { Client } from "@hyperink/service-providers";
//
import type { UiDbMapping, KeyOfTables, KeyOfTablesUI, Where } from "../types";
import { extractSelect, mapInsertsToDb, mapSelectsToDb } from "./helpers";

export function createSupabaseCreateQueries<
  T extends KeyOfTables | KeyOfTablesUI,
>(table: T, uiDbMapping: UiDbMapping | null) {
  return {
    create(client: Client, inserts: any[], selectKeys?: string[] | undefined) {
      const internalInserts = uiDbMapping
        ? mapInsertsToDb(inserts, uiDbMapping)
        : inserts;

      let select: string = "";

      if (selectKeys !== undefined) {
        const internalSelectKeys = uiDbMapping
          ? mapSelectsToDb(selectKeys, uiDbMapping)
          : selectKeys;
        select = extractSelect(internalSelectKeys.map(String));
      }
      console.log("pre");
      console.log(selectKeys);
      console.log(internalInserts);

      return select
        ? client
            .from(table)
            .insert(internalInserts as any)
            .select(select)
        : client.from(table).insert(internalInserts as any);
    },
  };
}
