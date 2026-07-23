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
  items: string[],
): Data {
  const data: Data = {
    hasError: false,
    values: {},
    errors: {},
  };

  for (const item of items) {
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

type FormField = {
  type: string;
  value: string;
  [key: string]: unknown;
};

export function handleStringFormValuesTESTING(
  formData: FormData,
  fields: FormField[],
): Data {
  const data: Data = {
    hasError: false,
    values: {},
    errors: {},
  };

  for (const field of fields) {
    const value = formData.get(field.value);

    if (value instanceof File) {
      data.hasError = true;
      data.errors[field.value] = "Expected a string value";
      continue;
    }

    if (field.type === "email") {
      // handle email
    }

    if (value !== null) {
      data.values[field.value] = value?.trim();
    }
  }

  return data;
}
