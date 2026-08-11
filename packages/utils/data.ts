export const createDataCollection = <TKey extends PropertyKey, TData>(
  obj: Partial<Record<TKey, TData>>,
) => obj;

export const getKeysFromCollection = <T extends Record<PropertyKey, unknown>>(
  collection: T,
): (keyof T)[] => Object.keys(collection) as (keyof T)[];

export const getValuesFromCollection = <T extends Record<PropertyKey, unknown>>(
  collection: T,
): T[keyof T][] => Object.values(collection) as T[keyof T][];
