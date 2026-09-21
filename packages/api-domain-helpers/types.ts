export type GenericValidationData = {
  data: Record<string, string> | null;
  errors: Record<string, string> | null;
};

export type ErrorPageData = {
  errors: Record<string, string> | null;
};
