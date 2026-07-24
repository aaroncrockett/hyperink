import { z } from "zod";

import type { TattooRequest, ServerClient } from "../types";

type TattooRequestData = TattooRequest & {
  artist_id: string;
};

type TattooRequestExtension = "artist_id";

export type TattooRequestFormKey = keyof TattooRequest | TattooRequestExtension;

export type TattooRequestFormField = {
  label: string;
  id: TattooRequestFormKey;
  type: React.HTMLInputTypeAttribute;
  schema: z.ZodType;
  required?: boolean;
  value?: string;
};

import {
  createTattooRequest as createTattooRequestDb,
  getProfileIdByArtistId as getProfileIdByArtistIdDb,
} from "@hyperinkstudio/db";

type CreateTattRequestData = {
  error: Record<string, string> | null;
  results: Partial<TattooRequestData> | null;
};

export async function createTattooRequest(
  client: ServerClient,
  requestData: Partial<TattooRequestData>,
) {
  const { artist_id: artistId, ...onlyTattooRequestData } = requestData;

  const results: CreateTattRequestData = {
    error: null,
    results: null,
  };

  if (!artistId) {
    results.error = { artistId: "artist Id is undefined" };
    return results;
  }

  const { data: id, error: profileError } = await getProfileIdByArtistIdDb(
    client,
    artistId,
  );

  if (profileError) {
    results.error = {
      profileIdError: "This profile isn't found by the artists Id.",
    };
    return results;
  }
  if (id === null) {
    results.error = {
      profileIdError: "This profile Id reuturned",
    };
    return results;
  }

  const { data, error: tattRequestError } = await createTattooRequestDb(
    client,
    {
      user_id: id,
      ...onlyTattooRequestData,
    },
  );

  if (tattRequestError) {
    results.error = {
      tattReuestError: "tattoo request error",
    };
    return results;
  }

  results.results = data;
  return results;
}

export const TATTOO_REQUEST_FORM = {
  artist_id: {
    label: "Artist Id",
    id: "artist_id",
    type: "hidden",
    schema: z.string().trim().min(3, "Required"),
    required: true,
    value: "shadetoshadetattoo",
  },
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
