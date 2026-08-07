//local
import type {
  TattooRequest as TattooRequestDb,
  Client as ServerClient,
} from "@hyperinkstudio/db/supabase/types";

export type TattooRequest = TattooRequestDb;
export type Client = ServerClient;

import { TYPES_MAP } from "./options";

export type TattooRequestFormKey = keyof TattooRequest;

export type SelectOption = {
  label: string;
  value: string;
};
export type TattooRequestFormField = {
  label: string;
  id: TattooRequestFormKey;
  type: keyof typeof TYPES_MAP;
  schema: z.ZodType;
  required?: boolean;
  value?: string;
  inputSize?: "sm" | "md" | "lg";
  options?: SelectOption[];
};
