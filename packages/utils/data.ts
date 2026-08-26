export const createDataCollection = <T extends Record<PropertyKey, unknown>>(
  obj: T,
) => obj;

export const getKeysFromCollection = <T extends Record<PropertyKey, unknown>>(
  collection: T,
): (keyof T)[] => Object.keys(collection) as (keyof T)[];

export const getValuesFromCollection = <T extends Record<PropertyKey, unknown>>(
  collection: T,
): T[keyof T][] => Object.values(collection) as T[keyof T][];

export function toLabelValue(value: string) {
  return {
    value,
    label: value
      .replace(/[_,-]|\+|-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase()),
  };
}
