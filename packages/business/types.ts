import { z } from "zod";
import { INPUT_TYPES_MAP } from "./options";

export type SelectOption = {
  label: string;
  value: string;
};

// ** ************************ ** //

export type Data<T> = {
  label: string;
  id: string;
  defaultValue?: string;
  display?: boolean;
  disabled?: string;
  inputSize?: "sm" | "md" | "lg";
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  schema?: z.ZodType;
  type?: keyof typeof INPUT_TYPES_MAP;
  value?: string;
  options?: T[];
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

// ** ************************ ** //

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

// Transform JSON fields into string[].
// IMPORTANT: Ensure the value has the correct shape before transforming it.
// TODO: Research adding type checks.
export type JsonToStringArray<T> = {
  [K in keyof T]: Json extends T[K] ? string[] : T[K];
};

// Selects only properties whose values are arrays of strings.
export type SelectStringArrays<T> = {
  [K in keyof T as T[K] extends string[] ? K : never]: T[K];
};
