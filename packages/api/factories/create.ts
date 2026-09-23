import { Client } from "@hyperink/service-providers";
//
import type { UiDbMapping, KeyOfTables, KeyOfTablesUI } from "../types";
import { extractSelect } from "./helpers";

export function createSupabaseCreateQueries<
  T extends KeyOfTables | KeyOfTablesUI,
>(table: T, uiDbMapping: UiDbMapping | null) {
  return {
    create(
      client: Client,
      inserts: Record<string, any>[] | Record<string, any>,
      selectKeys?: string[] | undefined,
    ) {
      const insertArray = Array.isArray(inserts) ? inserts : [inserts];

      const internalInserts = insertArray.map((insert) =>
        Object.fromEntries(
          Object.entries(insert).map(([key, value]) => [
            uiDbMapping?.[key as keyof UiDbMapping] ?? key,
            value,
          ]),
        ),
      ) as any;

      let internalSelectKeys: string[] = [];
      let select: string = "";

      if (selectKeys !== undefined) {
        internalSelectKeys = uiDbMapping
          ? selectKeys.map((key) => {
              return uiDbMapping.toDb;
            })
          : selectKeys;
        select = extractSelect(internalSelectKeys.map(String));
      }

      console.log(internalInserts);
      console.log(table);

      return select
        ? client.from(table).insert(internalInserts).select(select)
        : client.from(table).insert(internalInserts);
    },
  };
}
