export function zUTILS_odIssuesToErrors_REPLACEMENT(
  issues: z.ZodIssue[],
): Record<string, string> {
  return Object.fromEntries(
    issues.map((issue) => [issue.path.join("."), issue.message]),
  );
}
