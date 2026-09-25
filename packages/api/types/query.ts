export type UiDbMapping = {
  toUi: string;
  toDb: string;
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
  keys: string[] | any;
};

export type ExecuteMethods = "single" | "select" | "maybe-single" | "execute";

export type SelectExecuteMethods = "single" | "select" | "maybe-single";
