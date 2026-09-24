export type UiDbMapping = {
  toUi: string;
  toDb: string;
};
export type DBKeyValue<I> = {
  [K in keyof I]: {
    [P in K]: any;
  };
}[keyof I];

export type RecordStringAny = Record<string, any>;
type HIAPIError = {
  message: string;
  details: string;
  [key: string]: string;
};

export type Execute = {
  method: ExecuteMethods;
  keys: null | [];
};

export type ExecuteSelect = {
  method: SelectExecuteMethods;
  keys: string[] | any;
};

export type ExecuteMethods = "single" | "select" | "maybe-single" | "execute";

export type SelectExecuteMethods = "single" | "select" | "maybe-single";
