import type { KeyOfTables, KeyOfTablesUI } from "../types";
export type UiDbMapping = {
  toUi: KeyOfTablesUI;
  toDb: KeyOfTables;
};
export type DBKeyValue<I> = {
  [K in keyof I]?: any;
};

export type RecordStringAny = Record<string, any>;

export type Execute = {
  method: ExecuteMethods;
  keys: null | string[];
};

export type ExecuteSelect = {
  method: SelectExecuteMethods;
  keys: string[] | null;
};

export type ExecuteMethods = "single" | "select" | "maybe-single" | "execute";

export type SelectExecuteMethods = "single" | "select" | "maybe-single";
