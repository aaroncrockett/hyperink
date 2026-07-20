export const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === "string");
