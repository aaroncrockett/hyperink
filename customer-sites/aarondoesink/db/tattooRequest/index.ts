import { z } from "zod";

import type { TattooRequest, Profile } from "../types";

import {
  createTattooRequest as createTattooRequestDb,
  getProfileIdByArtistId as getProfileIdByArtistIdDb,
} from "@hyperinkstudio/db";

export const getProfileIdByArtistId = getProfileIdByArtistIdDb;
export const createTattooRequest = createTattooRequestDb;

type TattooRequestExtension = "artist_id";

type TattooRequestFormKey = keyof TattooRequest | TattooRequestExtension;

type TattooRequestFormField = {
  label: string;
  id: TattooRequestFormKey;
  type: React.HTMLInputTypeAttribute;
  schema: z.ZodType;
};

export const TATTOO_REQUEST_FORM = {
  artist_id: {
    label: "Artist Id",
    id: "artist_id",
    type: "hidden",
    schema: z.string(),
  },
  email: {
    label: "Email",
    id: "email",
    type: "email",
    schema: z.email("Please enter a valid email address"),
  },
  preferred_name: {
    label: "Preferred Name",
    id: "preferred_name",
    type: "text",
    schema: z.string().trim().min(1, "Preferred name is required"),
  },
  phone: {
    label: "Phone",
    id: "phone",
    type: "tel",
    schema: z.string().trim().min(1, "Phone is required"),
  },
  gender: {
    label: "Gender",
    id: "gender",
    type: "text",
    schema: z.string().trim().optional(),
  },
} as const satisfies Partial<
  Record<TattooRequestFormKey, TattooRequestFormField>
>;

export const TATTOO_REQUEST_FORM_LIST = Object.values(TATTOO_REQUEST_FORM);

export const TATTOO_REQUEST_FORM_KEYS = Object.keys(
  TATTOO_REQUEST_FORM,
) as (keyof typeof TATTOO_REQUEST_FORM)[];

export const EDITABLE_TATTOO_REQUEST_SCHEMA = z.object(
  Object.fromEntries(
    TATTOO_REQUEST_FORM_LIST.map((field) => [field.id, field.schema]),
  ),
);
