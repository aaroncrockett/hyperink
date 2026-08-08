import * as Types from "./types";
import { PlacementOptions, SizeOptions, TattooTypeOptions } from "./options";
import * as BASE from "./base";

export const TATT_REQ_BASE_FORM = {
  preferred_name: BASE.PREFERRED_NAME,
  email: BASE.EMAIL,
  phone: BASE.PHONE,
} as const satisfies Partial<
  Record<Types.TattooRequestFormKey, Types.TattooRequestFormField>
>;

// Base plus Type of Form contacted for Template 2
export const TATT_REQ_ENTRY_FORM = {
  ...TATT_REQ_BASE_FORM,
  type: BASE.TYPE,
} as const satisfies Partial<
  Record<Types.TattooRequestFormKey, Types.TattooRequestFormField>
>;

// READ / DISPLAY ONLY
// Short display for Template 1 mobile and home widget
export const TATT_REQ_ENTRY_FORM_SHORT_DISPLAY = {
  preferred_name: BASE.PREFERRED_NAME,
  type: BASE.TYPE,
  created_at: BASE.CREATED_AT,
} as const satisfies Partial<
  Record<Types.TattooRequestFormKey, Types.TattooRequestFormField>
>;

// Remainder of form. Used by Template 1, Template 2
export const TATT_REQ_FOLLOW_UP_FORM = {
  first_name: BASE.FIRST_NAME,
  last_name: BASE.LAST_NAME,
  gender: BASE.GENDER,
  bluesky_id: BASE.BLUESKY_ID,
  instagram_id: BASE.INSTAGRAM_ID,
  description: BASE.DESCRIPTION,
  year_born: BASE.YEAR_BORN,
  placement: BASE.PLACEMENT,
} as const satisfies Partial<
  Record<Types.TattooRequestFormKey, Types.TattooRequestFormField>
>;
