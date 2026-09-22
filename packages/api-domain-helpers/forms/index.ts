import { z } from "zod";
import { zodIssuesToErrors } from "@hyperink/api-domain-helpers";
import { type GenericValidationData } from "../types";

export const validateFormData = (
  formData: FormData,
  schema: Record<string, z.ZodType>,
) => {
  const validationData: GenericValidationData = {
    data: null,
    errors: null,
  };

  const formDataObject = Object.fromEntries(formData.entries());

  const itemsSchema = z.object(schema);

  const {
    data: validatedMetadata,
    success: validatedMetadataSuccess,
    error: validatedMetadataError,
  } = itemsSchema.safeParse(formDataObject);

  if (!validatedMetadataSuccess) {
    const errors = zodIssuesToErrors(validatedMetadataError?.issues ?? []);

    validationData.errors = { ...errors };
    return validationData;
  }

  validationData.data = validatedMetadata as Record<string, string> | null;
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
