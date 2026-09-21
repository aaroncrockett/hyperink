import { z } from "zod";

export function zodIssuesToErrors(
  issues: z.ZodIssue[],
): Record<string, string> {
  return Object.fromEntries(
    issues.map((issue) => [issue.path.join("."), issue.message]),
  );
}
