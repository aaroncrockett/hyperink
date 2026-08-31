import { Base } from "@hyperinkstudio/business/tattooRequest";
export const TATT_REQ_BODY = [
  Base.PREFERRED_NAME,
  Base.EMAIL,
  Base.PHONE,
  Base.GENDER,
  Base.BLUESKY_ID,
  Base.INSTAGRAM_ID,
  Base.NOTES,
];

export const TYPE_FIELD = Base.TYPE;

export type TattooRequestDisplayKey = keyof typeof TATT_REQ_BODY;
