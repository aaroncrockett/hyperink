import { Base } from "@hyperinkstudio/business/tattooRequest";
import { Client } from "@hyperinkstudio/services";
import type {
  TattooRequest as TattReq_src,
  TattReqFormDisplay as TattReqFormDisplay_src,
} from "@hyperinkstudio/business/tattooRequest";
import { createTattooRequest as createTatReq_src } from "@hyperinkstudio/business";

export type TattReqFormDisplay = TattReqFormDisplay_src;
export type TattooRequest = TattReq_src;
export type TattooRequestDisplayKey = keyof typeof TATT_REQ_BODY;

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
