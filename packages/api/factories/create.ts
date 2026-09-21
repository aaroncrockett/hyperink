import { Client } from "@hyperink/service-providers";

import type {
  UiDbMapping,
  KeyOfTables,
  KeyOfColumns,
  KeyOfColumnsUI,
  KeyOfTablesUI,
  Where,
} from "../types";

export function createSupabaseCreateQueries<
  T extends KeyOfTables | KeyOfTablesUI,
>(table: T, uiDbMapping: UiDbMapping | null) {
  return {
    create(
      client: Client,
      inserts: Record<string, string>[] | Record<string, string>,
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

      return client.from(table).insert(internalInserts);
    },
  };
}
