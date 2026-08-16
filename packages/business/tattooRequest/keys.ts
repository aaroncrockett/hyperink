//
// Keys of a particular form
//

import {
  TATT_REQ_FOLLOW_UP_FORM,
  TATT_REQ_ENTRY_FORM,
  TATT_REQ_BASE_FORM,
  TATT_REQ_ENTRY_FORM_SHORT_DISPLAY,
} from "./objs";

export const TATT_REQ_FOLLOW_UP_FORM_KEYS = Object.keys(
  TATT_REQ_FOLLOW_UP_FORM,
) as (keyof typeof TATT_REQ_FOLLOW_UP_FORM)[];

export const TATT_REQ_ENTRY_FORM_KEYS = Object.keys(
  TATT_REQ_ENTRY_FORM,
) as (keyof typeof TATT_REQ_ENTRY_FORM)[];

export const TATT_REQ_BASE_FORM_KEYS = Object.keys(
  TATT_REQ_BASE_FORM,
) as (keyof typeof TATT_REQ_BASE_FORM)[];

export const TATT_REQ_ENTRY_FORM_SHORT_DISPLAY_KEYS = Object.keys(
  TATT_REQ_ENTRY_FORM_SHORT_DISPLAY,
) as (keyof typeof TATT_REQ_ENTRY_FORM_SHORT_DISPLAY)[];
