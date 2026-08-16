//
// Lists -- Forms in an Array.
//

import * as Types from "./types";

import {
  TATT_REQ_ENTRY_FORM,
  TATT_REQ_BASE_FORM,
  TATT_REQ_FOLLOW_UP_FORM,
  TATT_REQ_ENTRY_FORM_SHORT_DISPLAY,
} from "./index";

export const TATT_REQ_ENTRY_FORM_LIST: Types.TattooRequestData<"type">[] =
  Object.values(TATT_REQ_ENTRY_FORM);

export const TATT_REQ_BASE_FORM_LIST: Types.TattooRequestData<"type">[] =
  Object.values(TATT_REQ_BASE_FORM);

export const TATT_REQ_FOLLOW_UP_FORM_LIST: Types.TattooRequestData<"type">[] =
  Object.values(TATT_REQ_FOLLOW_UP_FORM);

export const TATT_REQ_ENTRY_FORM_SHORT_DISPLAY_LIST: Types.TattooRequestData<"type">[] =
  Object.values(TATT_REQ_ENTRY_FORM_SHORT_DISPLAY);
