import type { ZodIssue } from "zod";

export function zodIssuesToErrors(issues: ZodIssue[]): Record<string, string> {
  return Object.fromEntries(
    issues.map((issue: ZodIssue): [string, string] => [
      issue.path.join("."),
      issue.message,
    ]),
  );
}
