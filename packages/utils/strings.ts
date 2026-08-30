export const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === "string");

export function normalizeToKabobCase(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}

export function denormalizeFromKabobCase(
  value: string,
  capitalize = true,
): string {
  const result = value.replace(/-/g, " ");

  return capitalize ? capitalizeWords(result) : result;
}

export function capitalizeWords(value: string): string {
  return value.replace(/(^|\s)\S/g, (char) => char.toUpperCase());
}
