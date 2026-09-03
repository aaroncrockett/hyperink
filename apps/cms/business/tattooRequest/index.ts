import type {
  Client,
  ClientTattoo,
  TattooRequest,
} from "@hyperinkstudio/services";
import * as TattReq_Src from "@hyperinkstudio/business/tattooRequest";
import {
  getKeysFromCollection,
  getValuesFromCollection,
} from "@hyperinkstudio/utils";

export const TATT_REQ_ADMIN_SHORT = {
  preferred_name: TattReq_Src.Base.PREFERRED_NAME,
  email: TattReq_Src.Base.EMAIL,
  phone: TattReq_Src.Base.PHONE,
  created_at: TattReq_Src.Base.CREATED_AT,
};

export const TATT_REQ_ADMIN_EDITABLE = {
  preferred_name: TattReq_Src.Base.PREFERRED_NAME,
  email: TattReq_Src.Base.EMAIL,
  phone: TattReq_Src.Base.PHONE,
  type: TattReq_Src.Base.TYPE,
  seen_at: TattReq_Src.Base.SEEN_AT,
};

export const CLIENT_TATT_ADMIN_EDITABLE = {
  title: TattReq_Src.Base.TITLE,
};

export const TATT_REQ_ADMIN_SHORT_LIST =
  getValuesFromCollection(TATT_REQ_ADMIN_SHORT);

export const TATT_REQ_ADMIN_SHORT_KEYS =
  getKeysFromCollection(TATT_REQ_ADMIN_SHORT);

export const TATT_REQ_ADMIN_EDITABLE_LIST = getValuesFromCollection(
  TATT_REQ_ADMIN_EDITABLE,
);

export const TATT_REQ_ADMIN_EDITABLE_KEYS = getKeysFromCollection(
  TATT_REQ_ADMIN_EDITABLE,
);

export const CLIENT_TATT_ADMIN_EDITABLE_LIST = getValuesFromCollection(
  CLIENT_TATT_ADMIN_EDITABLE,
);

export const CLIENT_TATT_ADMIN_EDITABLE_KEYS = getKeysFromCollection(
  CLIENT_TATT_ADMIN_EDITABLE,
);

export type TattReqFormEditable = typeof TATT_REQ_ADMIN_EDITABLE;

export type ClientTattFormEditable = typeof TATT_REQ_ADMIN_EDITABLE;

export type TattReqEditable = Pick<
  TattooRequest,
  "preferred_name" | "email" | "phone" | "type" | "seen_at"
>;

export type ClientTattEditable = Pick<ClientTattoo, "title">;

export const getTattooRequestById = TattReq_Src.getTattooRequestById;

export const getLastThreeTatReqs = (
  client: Client,
  select: Partial<TattooRequest>[] = [],
) => TattReq_Src.getRecentlyCreatedRequests(client, select, 3);
