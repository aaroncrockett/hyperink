type Data = {
  hasError: boolean;
  values: Record<string, string>;
  errors: Record<string, string>;
};

type DataList = {
  hasError: boolean;
  values: Record<string, string[]>;
  errors: Record<string, string>;
};

export function handleStringListFormValues(
  formData: FormData,
  keys: string[],
): DataList {
  const data: DataList = {
    hasError: false,
    values: {},
    errors: {},
  };

  for (const key of keys) {
    const values = formData.getAll(key);

    if (values.some((value) => value instanceof File)) {
      data.hasError = true;
      data.errors[key] = "Expected string values";
      continue;
    }

    const strings = values
      .filter((value): value is string => typeof value === "string")
      .map((value) => value.trim())
      .filter(Boolean);

    if (strings.length === 0) {
      data.hasError = true;
      data.errors[key] = "At least one value is required";
      continue;
    }

    data.values[key] = strings;
  }

  return data;
}

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

    if (value !== null) {
      data.values[key] = value.trim();
    }
  }

  return data;
}
