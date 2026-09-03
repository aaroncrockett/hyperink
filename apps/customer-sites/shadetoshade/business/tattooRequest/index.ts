import { Base } from "@hyperinkstudio/business/tattooRequest";
import { Client } from "@hyperinkstudio/services";
import type { TattooRequest as TattReq_src } from "@hyperinkstudio/business/tattooRequest";
import { createTattooRequest as createTatReq_src } from "@hyperinkstudio/business";

export type TattooRequest = TattReq_src;
export type TattooRequestDisplayKey = keyof typeof TATT_REQ_BODY;

export type TattReqFormDisplay = Pick<
  TattReq_src,
  | "preferred_name"
  | "email"
  | "phone"
  | "gender"
  | "bluesky_id"
  | "instagram_id"
  | "notes"
>;

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
export const FLASH_ID = Base.FLASH_ID;
export const FLASH_NAME = Base.FLASH_NAME;

export const createTattooRequest = async (
  client: Client,
  values: Partial<TattReqFormDisplay> & { user_id: string },
) => {
  const { data: tattReqData, error } = await createTatReq_src(
    client,
    values,
    "select",
  );
  const data = tattReqData as TattReqFormDisplay;
  return { data, error };
};
