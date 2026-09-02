import type { Client, TattooRequest } from "@hyperinkstudio/services";
import * as TatReq_Src from "@hyperinkstudio/business/tattooRequest";
import {
  getKeysFromCollection,
  getValuesFromCollection,
} from "@hyperinkstudio/utils";

export type TattReqAdminShort = Pick<
  TatReq_Src.TattooRequest,
  "preferred_name" | "email" | "phone" | "created_at"
>;

export const TATT_REQ_ADMIN_SHORT = {
  preferred_name: TatReq_Src.Base.PREFERRED_NAME,
  email: TatReq_Src.Base.EMAIL,
  phone: TatReq_Src.Base.PHONE,
  created_at: TatReq_Src.Base.CREATED_AT,
};

export const TATT_REQ_ADMIN_EDITABLE = {
  preferred_name: TatReq_Src.Base.PREFERRED_NAME,
  email: TatReq_Src.Base.EMAIL,
  phone: TatReq_Src.Base.PHONE,
  seen_at: TatReq_Src.Base.SEEN_AT,
};

export const TATT_REQ_ADMIN_SHORT_LIST =
  getValuesFromCollection(TATT_REQ_ADMIN_SHORT);

export const TATT_REQ_ADMIN_SHORT_KEYS = getKeysFromCollection(
  TATT_REQ_ADMIN_EDITABLE,
);

export const TATT_REQ_ADMIN_EDITABLE_LIST = getValuesFromCollection(
  TATT_REQ_ADMIN_EDITABLE,
);

export const TATT_REQ_ADMIN_EDITABLE_KEYS =
  getKeysFromCollection(TATT_REQ_ADMIN_SHORT);

export type TattReqFormDisplay = TatReq_Src.TattReqFormDisplay;

export const getTattooRequestById = TatReq_Src.getTattooRequestById;

export const getLastThreeTatReqs = (
  client: Client,
  select: Partial<TattooRequest>[] = [],
) => TatReq_Src.getRecentlyCreatedRequests(client, select, 3);
