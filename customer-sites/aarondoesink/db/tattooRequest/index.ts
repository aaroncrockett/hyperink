import type { TattooRequest } from "../types";

import {
  createTattooRequest as createTattooRequestDb,
  getProfileIdByArtistId as getProfileIdByArtistIdDb,
} from "@hyperinkstudio/db";

export const getProfileIdByArtistId = getProfileIdByArtistIdDb;

export const createTattooRequest = createTattooRequestDb;

// USED TO LOOK UP A CLIENT
type TattooRequestCol = {
  label: string;
  value: keyof TattooRequest;
  type: React.HTMLInputTypeAttribute;
};

export const EDITABLE_TATTOO_REQUEST_COLS_KEY_VAL = {
  email: {
    label: "Email",
    value: "email",
    type: "email",
  },
  preferred_name: {
    label: "Preferred Name",
    value: "preferred_name",
    type: "text",
  },
  phone: {
    label: "Phone",
    value: "phone",
    type: "tel",
  },
  gender: {
    label: "Gender",
    value: "gender",
    type: "text",
  },
} as const satisfies Partial<Record<keyof TattooRequest, TattooRequestCol>>;

export const EDITABLE_TATTOO_REQUEST_COLS_KEY_VAL_LIST = Object.values(
  EDITABLE_TATTOO_REQUEST_COLS_KEY_VAL,
);

export const EDITABLE_TATTOO_REQUEST_COLS = Object.keys(
  EDITABLE_TATTOO_REQUEST_COLS_KEY_VAL,
) as (keyof typeof EDITABLE_TATTOO_REQUEST_COLS_KEY_VAL)[];
