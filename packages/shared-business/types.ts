import { z } from "zod";
import { INPUT_TYPES_MAP } from "@hyperinkstudio/shared-business/options";

export type SelectOption = {
  label: string;
  value: string;
};

export type Data<T> = {
  label: string;
  id: T;
  defaultValue?: string;
  disabled?: string;
  inputSize?: "sm" | "md" | "lg";
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  schema?: z.ZodType;
  type?: keyof typeof INPUT_TYPES_MAP;
  value?: string;
};

// ** possible other options ** //

// placeholder?: string;
// description?: string;
// helpText?: string;

// autoComplete?: string;
// autoFocus?: boolean;

// min?: number;
// max?: number;
// step?: number;
// minLength?: number;
// maxLength?: number;

// ************************ //
