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

export const normalizeObjectValues = (
  items: Record<string, string>,
  key: string,
) =>
  items?.[key] ? { ...items, [key]: normalizeToKabobCase(items[key]) } : items;

export const normalizeObjectArrayValues = (
  items: Record<string, string>[],
  key: string,
) => items.map((item) => normalizeObjectValues(item, key));

export function capitalizeWords(value: string): string {
  return value.replace(/(^|\s)\S/g, (char) => char.toUpperCase());
}

export const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);

  if (digits.length <= 3) {
    return digits;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

export const stringToArray = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value : value ? [value] : [];

export const createRandom12Chars = () => {
  const bytes = new Uint8Array(9);
  crypto.getRandomValues(bytes);

  return Array.from(bytes, (byte) => byte.toString(36).padStart(2, "0"))
    .join("")
    .slice(0, 12);
};
