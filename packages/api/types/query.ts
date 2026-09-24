export type UiDbMapping = {
  toUi: string;
  toDb: string;
};
export type Where<I> = {
  [K in keyof I]: {
    columnKey: K;
    value: I[K];
  };
}[keyof I];

export type BroadWhere = {
  columnKey: string;
  value: any;
};
export type HIAPIError = {
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
