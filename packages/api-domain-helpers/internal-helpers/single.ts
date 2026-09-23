import { HIAPIError } from "@hyperink/api";
export const single = async <T>(
  fn: (...args: any[]) => any,
  ...args: any[]
) => {
  const query = fn(...args);

  const { data, resultError } = await (
    query?.single() as { overrideTypes: <U, V>() => any }
  ).overrideTypes<T, { merge: false }>();

  const error: HIAPIError | null = resultError
    ? {
        message: resultError.message,
        details: resultError.details,
      }
    : null;

  return { data, error };
};
