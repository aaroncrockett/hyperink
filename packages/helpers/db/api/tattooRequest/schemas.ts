//
// Schemas of forms
//

import { z } from "zod";

import {
  TATT_REQ_BASE_FORM_LIST,
  TATT_REQ_ENTRY_FORM_LIST,
  TATT_REQ_FOLLOW_UP_FORM_LIST,
} from "./lists";

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
