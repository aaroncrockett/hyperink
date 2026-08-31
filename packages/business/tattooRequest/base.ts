import { z } from "zod";

import * as Types from "./types";

export const TYPE = {
  label: "Tattoo Type",
  id: "type",
  type: "select",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "sm",
  options: [],
  display: true,
} as const satisfies Types.TattooRequestData<"type">;

export const PREFERRED_NAME = {
  label: "Preferred Name",
  id: "preferred_name",
  type: "text",
  schema: z.string().trim().min(1, "Please enter your preferred name."),
  required: true,
  inputSize: "md",
  display: true,
} as const satisfies Types.TattooRequestData<"type">;

export const PHONE = {
  label: "Phone",
  id: "phone",
  type: "tel",
  schema: z.string().trim().min(10, "Phone number must be at least 10 digits."),
  required: true,
  inputSize: "md",
  display: true,
} as const satisfies Types.TattooRequestData<"type">;

export const EMAIL = {
  label: "Email",
  id: "email",
  type: "email",
  schema: z.email("Please enter a valid email address."),
  required: true,
  inputSize: "md",
  display: true,
} as const satisfies Types.TattooRequestData<"type">;

//
export const FIRST_NAME = {
  label: "First Name",
  id: "first_name",
  type: "text",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "md",
  display: true,
} as const satisfies Types.TattooRequestData<"type">;

export const LAST_NAME = {
  label: "Last Name",
  id: "last_name",
  type: "text",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "md",
  display: true,
} as const satisfies Types.TattooRequestData<"type">;

export const GENDER = {
  label: "Gender",
  id: "gender",
  type: "text",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "md",
  display: true,
} as const satisfies Types.TattooRequestData<"type">;

export const BLUESKY_ID = {
  label: "Bluesky ID",
  id: "bluesky_id",
  type: "text",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "md",
  display: true,
} as const satisfies Types.TattooRequestData<"type">;

export const INSTAGRAM_ID = {
  label: "Instagram ID",
  id: "instagram_id",
  type: "text",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "md",
  display: true,
} as const satisfies Types.TattooRequestData<"type">;

export const NOTES = {
  label: "Notes",
  id: "notes",
  type: "textarea",
  schema: z.string().trim().optional(),
  required: false,
  inputSize: "lg",
  display: true,
} as const satisfies Types.TattooRequestData<"type">;

// READ ONLY
export const CREATED_AT = {
  label: "Request Date",
  id: "created_at",
  display: false,
} as const satisfies Types.TattooRequestData<"type">;
