type Data = {
  hasError: boolean;
  values: Record<string, string>;
  errors: Record<string, string>;
};

export function handleStringFormValues(
  formData: FormData,
  keys: string[],
): Data {
  const data: Data = {
    hasError: false,
    values: {},
    errors: {},
  };

  for (const key of keys) {
    const value = formData.get(key);

    if (value instanceof File) {
      data.hasError = true;
      data.errors[key] = "Expected a string value";
      continue;
    }

    if (typeof value !== "string" || !value.trim()) {
      data.hasError = true;
      data.errors[key] = "This field is required";
      continue;
    }

    data.values[key] = value.trim();
  }

  return data;
}
