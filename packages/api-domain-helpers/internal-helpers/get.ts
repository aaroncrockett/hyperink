import { HIAPIError } from "@hyperink/api";
export const get = async <T>(fn: (...args: any[]) => any, ...args: any[]) => {
  const query = fn(...args);

  const result = await query;
  if (!result) {
    return {
      error: new Error("Profile query was not created"),
    };
  }

  const { error: resultError } = result;

  const error: HIAPIError | null = resultError
    ? {
        message: resultError.message,
        details: resultError.details,
      }
    : null;

  return { error };
};
