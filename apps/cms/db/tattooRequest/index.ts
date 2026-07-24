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

import { getRecentlyCreatedRequests as getRecentlyCreatedRequestsDb } from "@hyperinkstudio/db";

const getRecentlyCreatedRequests = getRecentlyCreatedRequestsDb;

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

// page
// component that gets the tattoo request which is inside a page. this can be a template for how to page my pages also reusable in other parts of the app
// when I get the tattoo request, it then uses the email and phone to look up the client
// if there is no client, create one based on the data we have
// otherwise use the client ID we got when looking up to create a new tattoo
// use the rest of the  returned quest data to will out a form. this form data is now client_tattoo! even though it was made from other the request.
// the artist can update parts of the for if they wish, give them a button to do that. Otherwise the form should be "locked" with a button to edit it, or, to submit as a tattoo.
