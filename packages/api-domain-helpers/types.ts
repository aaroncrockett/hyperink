export type HIError = {
  message: string;
  [key: string]: unknown;
};

export type HIFormData = {
  data: Record<string, unknown> | null;
  error: HIError | null;
};
