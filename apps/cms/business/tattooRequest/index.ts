import type {
  Client,
  ClientTattoo,
  TattooRequest,
} from "@hyperinkstudio/services";

import {
  TattReqBase,
  getTattooRequestById as getTattooRequestById_src,
  getRecentlyCreatedRequests as getRecentlyCreatedRequests_src,
} from "@hyperinkstudio/business/tattooRequest";

import {
  getKeysFromCollection,
  getValuesFromCollection,
} from "@hyperinkstudio/utils";

export const TATT_REQ_ADMIN_SHORT = {
  preferred_name: TattReqBase.PREFERRED_NAME,
  email: TattReqBase.EMAIL,
  phone: TattReqBase.PHONE,
  created_at: TattReqBase.CREATED_AT,
};

export const TATT_REQ_ADMIN_EDITABLE = {
  preferred_name: TattReqBase.PREFERRED_NAME,
  email: TattReqBase.EMAIL,
  phone: TattReqBase.PHONE,
  type: TattReqBase.TYPE,
  seen_at: TattReqBase.SEEN_AT,
};

export const CLIENT_TATT_ADMIN_EDITABLE = {
  title: TattReqBase.TITLE,
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

export const getTattooRequestById = getTattooRequestById_src;
export const getRecentlyCreatedRequests = getRecentlyCreatedRequests_src;

export const getLastThreeTatReqs = (
  client: Client,
  select: Partial<TattooRequest>[] = [],
) => getRecentlyCreatedRequests(client, select, 3);
