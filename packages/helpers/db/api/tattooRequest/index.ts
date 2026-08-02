//external
import { z } from "zod";
//hyperink
import { createTattooRequest as createTattooRequestDb } from "@hyperinkstudio/db";
//local
import type {
  TattooRequest,
  Client as ServerClient,
} from "@hyperinkstudio/db/supabase/types";

export const createTattooRequest = createTattooRequestDb;

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

const PlacementOptions: SelectOption[] = [
  {
    label: "Thigh",
    value: "thigh",
  },
  {
    label: "Upper Arm",
    value: "upper-arm",
  },
  {
    label: "Lower Arm",
    value: "lower-arm",
  },
  {
    label: "Wrist",
    value: "wrist",
  },
];

const SizeOptions: SelectOption[] = [
  {
    label: '0-2"',
    value: "0-2in",
  },
  {
    label: '2-4"',
    value: "2-4in",
  },
  {
    label: '4-7"',
    value: "4-7in",
  },
  {
    label: '7-9"',
    value: "7-9in",
  },
  {
    label: '9-12"',
    value: "9-12in",
  },
  {
    label: '13+"',
    value: "13+in",
  },
]; 

export const TattooTypeOptions: SelectOption[] = [
  {
    label: "Flash",
    value: "flash",
  },
  {
    label: "Custom",
    value: "custom",
  },
];

import {
  getRecentlyCreatedRequests as getRecentlyCreatedRequestsDb,
  getTattooRequestById as getTattooRequestByIdDb,
} from "@hyperinkstudio/db";

export const getTattooRequestById = getTattooRequestByIdDb;

export const getLastTenTattooRequests = getRecentlyCreatedRequestsDb;

export const getLastThreeTattooRequests = (client: ServerClient) => {
  return getRecentlyCreatedRequestsDb(client, 3);
};

export const TYPES_MAP = {
  textarea: "textarea",
  checkbox: "checkbox",
  select: "select",
  text: "input",
  number: "input",
  email: "input",
  tel: "input",
  hidden: "input"
} as const;

export const TATT_REQ_TYPE_OF_FORM = {
  type: {
    label: "Tattoo Type",
    id: "type",
    type: "select",
    schema: z.string().trim().optional(),
    required: false,
    inputSize: "md",
    options: TattooTypeOptions,
  },
} as const satisfies Partial<
  Record<TattooRequestFormKey, TattooRequestFormField>
>;
// Base of the form. Used to look up Clients. Also used to concat with Follow-up form for Template 1
export const TATT_REQ_BASE_FORM = {
    preferred_name: {
    label: "Preferred Name",
    id: "preferred_name",
    type: "text",
    schema: z.string().trim().min(1, "Please enter your preferred name."),
    required: true,
    inputSize: "md",
  },
  email: { 
    label: "Email",
    id: "email",
    type: "email",
    schema: z.email("Please enter a valid email address."),
    required: true,
    inputSize: "md",
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
    inputSize: "md",
  },
} as const satisfies Partial<
  Record<TattooRequestFormKey, TattooRequestFormField>
>;
// Base plus Type of Form contacted for Template 2
export const TATT_REQ_ENTRY_FORM = {
 ...TATT_REQ_BASE_FORM,
  ...TATT_REQ_TYPE_OF_FORM,
} as const satisfies Partial<
  Record<TattooRequestFormKey, TattooRequestFormField>
>;
// Remainder of form. Used by Template 1, Template 2
export const TATT_REQ_FOLLOW_UP_FORM = {
  first_name: {
    label: "First Name",
    id: "first_name",
    type: "text",
    schema: z.string().trim().optional(),
    required: false,
    inputSize: "md",
  },
  last_name: {
    label: "Last Name",
    id: "last_name",
    type: "text",
    schema: z.string().trim().optional(),
    required: false,
    inputSize: "md",
  },

  gender: {
    label: "Gender",
    id: "gender",
    type: "text",
    schema: z.string().trim().optional(),
    required: false,
    inputSize: "md",
  },
  bluesky_id: {
    label: "Bluesky ID",
    id: "bluesky_id",
    type: "text",
    schema: z.string().trim().optional(),
    required: false,
    inputSize: "md",
  },
  instagram_id: {
    label: "Instagram ID",
    id: "instagram_id",
    type: "text",
    schema: z.string().trim().optional(),
    required: false,
    inputSize: "md",
  },

  description: {
    label: "Description",
    id: "description",
    type: "text",
    schema: z.string().trim().optional(),
    required: false,
    inputSize: "lg",
  },
  year_born: {
    label: "Birth Year",
    id: "year_born",
    type: "number",
    schema: z.coerce.number().int().optional(),
    required: false,
    inputSize: "sm",
  },


  placement: {
    label: "Placement",
    id: "placement",
    type: "select",
    schema: z.string().trim().optional(),
    required: false,
    inputSize: "md",
    options: PlacementOptions,
  },

  size: {
    label: "Size",
    id: "size",
    type: "select",
    schema: z.string().trim().optional(),
    required: false,
    inputSize: "md",
    options: SizeOptions,
  },

  notes: {
    label: "Notes",
    id: "notes",
    type: "textarea",
    schema: z.string().trim().optional(),
    required: false,
    inputSize: "lg",
  },
} as const satisfies Partial<
  Record<TattooRequestFormKey, TattooRequestFormField>
>;
// Used in the follow-up if the custom tattoo is choosen
export const TATT_REQ_CUSTOM_FOLLOW_UP_FORM  = {
  // ref_images: {
  //   label: "Reference Images",
  //   id: "ref_images",
  //   type: "hidden",
  //   schema: z
  //     .string()
  //     .transform((value) => JSON.parse(value))
  //     .pipe(z.array(z.string()))
  //     .optional(),
  //   required: false,
  // },
}as const satisfies Partial<
  Record<TattooRequestFormKey, TattooRequestFormField>
>;

// Used in the follow-up if the custom tattoo is choosen
export const TATT_REQ_FLASH_FOLLOW_UP_FORM  = {
  ref_images: {
    label: "Flassh Id",
    id: "flash_id",
    type: "hidden",
    schema: z
      .string()
      .transform((value) => JSON.parse(value))
      .pipe(z.array(z.string()))
      .optional(),
    required: false,
  },
}as const satisfies Partial<
  Record<TattooRequestFormKey, TattooRequestFormField>
>;

//
// Lists -- Forms in an Array.
//

export const TATT_REQ_ENTRY_FORM_LIST: TattooRequestFormField[] =
  Object.values(TATT_REQ_ENTRY_FORM);

  export const TATT_REQ_BASE_FORM_LIST: TattooRequestFormField[] =
Object.values(TATT_REQ_BASE_FORM)

export const TATT_REQ_FOLLOW_UP_FORM_LIST: TattooRequestFormField[] =
  Object.values(TATT_REQ_FOLLOW_UP_FORM);

  //
  // Keys of a particular form
  // 

export const TATT_REQ_FOLLOW_UP_FORM_KEYS = Object.keys(
  TATT_REQ_FOLLOW_UP_FORM,
) as (keyof typeof TATT_REQ_FOLLOW_UP_FORM)[];

  //
  // Schemas of forms
  // 

export const TATT_REQ_BASE_FORM_SCHEMA = z.object(
  Object.fromEntries(
    TATT_REQ_BASE_FORM_LIST.map((field) => [field.id, field.schema]),
  ),
);

export const TATT_REQ_ENTRY_FORM_SCHEMA = z.object(
  Object.fromEntries(
    TATT_REQ_ENTRY_FORM_LIST.map((field) => [field.id, field.schema]),
  ),
);

export const TATT_REQ_FOLLOW_UP_FORM_SCHEMA = z.object(
  Object.fromEntries(
    TATT_REQ_FOLLOW_UP_FORM_LIST.map((field) => [field.id, field.schema]),
  ),
);
