import { z } from "zod";

import * as Types from "./types";

export const PREFERRED_NAME = {
  label: "Preferred Name",
  id: "preferred_name",
  type: "text",
  schema: z.string().trim().min(1, "Please enter your preferred name."),
  required: true,
  inputSize: "md",
} as const satisfies Types.ClientAsClientPersonData<"type">;

export const FLASH_NAME = {
  label: "Flash Name",
  id: "flash_name",
  type: "hidden",
  schema: z.string().min(1),
} as const satisfies Types.ClientAsClientPersonData<"type">;

export const PHONE = {
  label: "Phone",
  id: "phone",
  type: "tel",
  schema: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits.")
    .transform((value) => value.replace(/\D/g, "")),
  required: true,
  inputSize: "md",
} as const satisfies Types.ClientAsClientPersonData<"type">;

export const EMAIL = {
  label: "Email",
  id: "email",
  type: "email",
  schema: z.email("Please enter a valid email address."),
  required: true,
  inputSize: "md",
} as const satisfies Types.ClientAsClientPersonData<"type">;

export const GENDER = {
  label: "Gender",
  id: "gender",
  type: "text",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "md",
} as const satisfies Types.ClientAsClientPersonData<"type">;

export const BLUESKY_ID = {
  label: "Bluesky ID",
  id: "bluesky_id",
  type: "text",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "md",
} as const satisfies Types.ClientAsClientPersonData<"type">;

export const INSTAGRAM_ID = {
  label: "Instagram ID",
  id: "instagram_id",
  type: "text",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "md",
} as const satisfies Types.ClientAsClientPersonData<"type">;
