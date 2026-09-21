import { HIAPIError } from "@hyperink/api";
export const execute = async <T>(
  fn: (...args: any[]) => any,
  ...args: any[]
) => {
  const query = fn(...args);

  const result = await query;
  if (!result) {
    return {
      type: "supbase error",
    };
  }

  const { error: resultError } = result;

  const error: HIAPIError | null = resultError
    ? {
        type: "supbase error",
        message: resultError.message,
        details: resultError.details,
      }
    : null;

  return { error };
};
