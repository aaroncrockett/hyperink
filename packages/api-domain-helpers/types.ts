export type HIError = {
  message: string;
  [key: string]: unknown;
};

export type HIFormData = {
  data: Record<string, unknown> | null;
  error: HIError | null;
};

export type DBKeyValue<I> = {
  [K in keyof I]?: any;
};
