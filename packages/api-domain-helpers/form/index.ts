import { z } from "zod";
export function validateUploadFiles(formData: FormData, min = 1, max = 5) {
  const files = formData
    .getAll("file")
    .filter((value): value is File => value instanceof File);

  const fileSchema = z
    .instanceof(File)
    .refine((file: File) => file.size > 0, "File is empty")
    .refine(
      (file: File) => file.size < 1 * 1024 * 1024,
      "File must be less than 1MB",
    )
    .refine(
      (file: File) =>
        ["image/jpeg", "image/png", "image/webp", "image/tiff"].includes(
          file.type,
        ),
      "Invalid image type",
    );

  const result = z.array(fileSchema).min(min).max(max).safeParse(files);

  if (!result.success) {
    const errors = zodIssuesToErrors(result.error?.issues ?? []);
    return {
      error: { message: errors.message },
      data: null,
    };
  }

  return {
    error: null,
    data: result.data,
  };
}

export function zodIssuesToErrors(
  issues: z.ZodIssue[],
): Record<string, string> {
  return Object.fromEntries(
    issues.map((issue) => [issue.path.join("."), issue.message]),
  );
}

export function toLabelValue(value: string) {
  return {
    value,
    label: value
      .replace(/[_,-]|\+|-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase()),
  };
}
