import { z } from "zod";

import type { TattooRequest, ServerClient } from "../types";

export type TattooRequestFormKey = keyof TattooRequest;

export type TattooRequestFormField = {
  label: string;
  id: TattooRequestFormKey;
  type: React.HTMLInputTypeAttribute;
  schema: z.ZodType;
  required?: boolean;
  value?: string;
};

import {
  getRecentlyCreatedRequests as getRecentlyCreatedRequestsDb,
  getTattooRequestById as getTattooRequestByIdDb,
} from "@hyperinkstudio/db";

export const getTattooRequestById = getTattooRequestByIdDb;

export const getLastTenTattooRequests = getRecentlyCreatedRequestsDb;

export const getLastThreeTattooRequests = (client: ServerClient) => {
  return getRecentlyCreatedRequestsDb(client, 3);
};

export const TATTOO_REQUEST_FORM = {
  email: {
    label: "Email",
    id: "email",
    type: "email",
    schema: z.email("Please enter a valid email address."),
    required: true,
  },
  preferred_name: {
    label: "Preferred Name",
    id: "preferred_name",
    type: "text",
    schema: z.string().trim().min(1, "Please enter your preferred name."),
    required: true,
  },
  phone: {
    label: "Phone",
    id: "phone",
    type: "tel",
    schema: z
      .string()
      .trim()
      .min(10, "Phone number must be at least 10 digits."),
    required: true,
  },
  gender: {
    label: "Gender",
    id: "gender",
    type: "text",
    schema: z.string().trim().optional(),
    required: false,
  },
  bluesky_id: {
    label: "Bluesky ID",
    id: "bluesky_id",
    type: "text",
    schema: z.string().trim().optional(),
    required: false,
  },
  instagram_id: {
    label: "Instamgram ID",
    id: "instagram_id",
    type: "text",
    schema: z.string().trim().optional(),
    required: false,
  },
} as const satisfies Partial<
  Record<TattooRequestFormKey, TattooRequestFormField>
>;

export const TATTOO_REQUEST_FORM_LIST = Object.values(TATTOO_REQUEST_FORM);

export const TATTOO_REQUEST_FORM_KEYS = Object.keys(
  TATTOO_REQUEST_FORM,
) as (keyof typeof TATTOO_REQUEST_FORM)[];

export const TATTOO_REQUEST_FORM_SCHEMA = z.object(
  Object.fromEntries(
    TATTOO_REQUEST_FORM_LIST.map((field) => [field.id, field.schema]),
  ),
);

export const TATTOO_REQUEST_SHORT_DISPLAY = {
  email: TATTOO_REQUEST_FORM.email,
  preferred_name: TATTOO_REQUEST_FORM.preferred_name,
  phone: TATTOO_REQUEST_FORM.phone,
};

export const TATTOO_REQUEST_SHORT_DISPLAY_LIST = Object.values(
  TATTOO_REQUEST_SHORT_DISPLAY,
);

export const TATTOO_REQUEST_SHORT_DISPLAY_KEYS = Object.keys(
  TATTOO_REQUEST_SHORT_DISPLAY,
) as (keyof typeof TATTOO_REQUEST_SHORT_DISPLAY)[];

export const getTattoRequestColLabel = (
  key: keyof typeof TATTOO_REQUEST_FORM,
) => {
  return TATTOO_REQUEST_FORM[key].label;
};
