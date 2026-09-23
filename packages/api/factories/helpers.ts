import type { UiDbMapping, KeyOfTables, KeyOfTablesUI, Where } from "../types";

export const extractSelect = (selectKeys: string[]) =>
  selectKeys.length ? selectKeys.join(",") : "*";

export const mapInsertsToDb = (inserts: Where[], uiDbMapping?: UiDbMapping) =>
  inserts.map((insert) =>
    Object.fromEntries(
      Object.entries(insert).map(([key, value]) => [
        uiDbMapping?.toDb ?? key,
        value,
      ]),
    ),
  );

export const mapSelectsToDb = (
  selectKeys: string[],
  uiDbMapping?: UiDbMapping,
) => selectKeys.map(() => uiDbMapping?.toDb ?? "");
