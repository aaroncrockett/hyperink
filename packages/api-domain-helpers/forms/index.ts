import { z } from "zod";
import { zodIssuesToErrors } from "@hyperink/api-domain-helpers";
import { type HIFormData } from "../types";

export const validateFormData = <T extends Record<string, z.ZodType>>(
  formData: FormData,
  schema: T,
) => {
  const validationData: HIFormData = {
    data: null,
    error: null,
  };

  const formDataObject = Object.fromEntries(formData.entries());

  const itemsSchema = z.object(schema);

  const {
    data,
    success: validatedMetadataSuccess,
    error,
  } = itemsSchema.safeParse(formDataObject);

  if (!validatedMetadataSuccess) {
    const errors = zodIssuesToErrors(error?.issues ?? []);

    validationData.error = {
      message: error.message,
      rawError: errors,
    };
  }

  validationData.data = data ?? null;
  return validationData;
};

export function toLabelValue(value: string) {
  return {
    value,
    label: value
      .replace(/[_,-]|\+|-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase()),
  };
}
