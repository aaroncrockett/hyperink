import { z } from "zod";
import { INPUT_TYPES_MAP } from "@hyperinkstudio/shared-business/options";

export type SelectOption = {
  label: string;
  value: string;
};

export type Data<T> = {
  label: string;
  id: T;
  type?: keyof typeof INPUT_TYPES_MAP;
  schema?: z.ZodType;
  required?: boolean;
  value?: string;
  inputSize?: "sm" | "md" | "lg";
};
