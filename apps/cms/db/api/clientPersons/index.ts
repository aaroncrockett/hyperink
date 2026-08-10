import { z } from "zod";

import {
  createClientPerson as dbCreateClientPerson,
  getClientPersonsRecentlyUpdated,
  getClientPersonsByEmailOrPhone as getClientPersonsByEmailOrPhoneDb,
  updateClientPerson as updateClientPersonDb,
} from "@hyperinkstudio/db";

import { ClientTable } from "@hyperinkstudio/db";

export const createClientPerson = dbCreateClientPerson;

export const getClientPersonsByEmailOrPhone = getClientPersonsByEmailOrPhoneDb;

export const getLastTenClients = getClientPersonsRecentlyUpdated;

export const updateClientPerson = updateClientPersonDb;

export type ClientData = {
  id: keyof ClientTable;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  schema: z.ZodType;
  required?: boolean;
  value?: string;
};

// Used to lookup a client
export const LOOKUP_CLIENT_COLS = {
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
};
// used when creating a client
export const CREATE_CLIENT_COLS = {
  ...LOOKUP_CLIENT_COLS,
  gender: {
    label: "Gender",
    id: "gender",
    type: "text",
    schema: z.string().trim().optional(),
    required: false,
  },
  blue_sky: {
    label: "Blue Sky",
    id: "blue_sky",
    type: "text",
    schema: z.string().trim().optional(),
    required: false,
  },
  instagram: {
    label: "Instagram",
    id: "instagram",
    type: "text",
    schema: z.string().trim().optional(),
    required: false,
  },
};

// used when updating a client
export const EDITABLE_CLIENT_COLS = {
  ...CREATE_CLIENT_COLS,
  last_name: {
    label: "Last Name",
    id: "last_name",
    type: "text",
    schema: z.string().trim(),
    required: true,
  },
  first_name: {
    label: "First Name",
    id: "first_name",
    type: "text",
    schema: z.string().trim(),
    required: true,
  },
};
export const ALL_CLIENT_COLS = {
  ...EDITABLE_CLIENT_COLS,
  created_at: {
    id: "created_at",
    label: "Created At",
  },
  updated_at: {
    id: "updated_at",
    label: "Updated At",
  },
};

// Objects as array items
export const LOOKUP_CLIENT_COLS_LIST = Object.values(LOOKUP_CLIENT_COLS);
export const CREATE_CLIENT_COLS_LIST = Object.values(CREATE_CLIENT_COLS);
export const EDITABLE_CLIENT_COLS_LIST = Object.values(EDITABLE_CLIENT_COLS);

// Keys as arrays
export const LOOKUP_CLIENT_KEYS = Object.values(LOOKUP_CLIENT_COLS);
export const CREATE_CLIENT_KEYS = Object.values(CREATE_CLIENT_COLS);
export const EDITABLE_CLIENT_KEYS = Object.values(EDITABLE_CLIENT_COLS);
// Helpers
export const getClientColLabel = (key: keyof typeof ALL_CLIENT_COLS) => {
  return ALL_CLIENT_COLS[key].label;
};
// Schema
export const EDITABLE_CLIENT_FORM_SCHEMA = z.object(
  Object.fromEntries(
    EDITABLE_CLIENT_COLS_LIST.map((field) => [field.id, field.schema]),
  ),
);

