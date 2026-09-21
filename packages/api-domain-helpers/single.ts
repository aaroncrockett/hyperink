import { HIAPIError } from "@hyperink/api";
export const single = async <T>(
  fn: (...args: any[]) => any,
  ...args: any[]
) => {
  const query = fn(...args);

  const result = await (
    query?.single() as { overrideTypes: <U, V>() => any }
  ).overrideTypes<T, { merge: false }>();

  if (!result) {
    return {
      data: null,
      error: new Error("Profile query was not created"),
    };
  }

  const { data, error: resultError } = result;

  const error: HIAPIError | null = resultError
    ? {
        message: resultError.message,
        details: resultError.details,
      }
    : null;

  return { data, error };
};
