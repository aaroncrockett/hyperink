import type {
  Client,
  ClientTattoo,
  TattooRequest,
} from "@hyperinkstudio/services";

import {
  TattReqBase,
  getRecentlyCreatedRequests as getRecentlyCreatedRequests_src,
} from "@hyperinkstudio/business/tattooRequest";

export {
  getTattooRequestById,
  updateTattooRequest,
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

export const TATT_REQ_ADMIN = {
  preferred_name: TattReqBase.PREFERRED_NAME,
  email: TattReqBase.EMAIL,
  phone: TattReqBase.PHONE,
  type: TattReqBase.TYPE,
};

export const CLIENT_TATT_ADMIN = {
  title: TattReqBase.TITLE,
};

export const TATT_REQ_ADMIN_SHORT_LIST =
  getValuesFromCollection(TATT_REQ_ADMIN_SHORT);

export const TATT_REQ_ADMIN_SHORT_KEYS =
  getKeysFromCollection(TATT_REQ_ADMIN_SHORT);

export const TATT_REQ_ADMIN_LIST = getValuesFromCollection(TATT_REQ_ADMIN);

export const TATT_REQ_ADMIN_KEYS = getKeysFromCollection(TATT_REQ_ADMIN);

export const CLIENT_TATT_ADMIN_LIST =
  getValuesFromCollection(CLIENT_TATT_ADMIN);

export const CLIENT_TATT_ADMIN_KEYS = getKeysFromCollection(CLIENT_TATT_ADMIN);

export type TattReqFormEditable = typeof TATT_REQ_ADMIN;

export type ClientTattFormEditable = typeof TATT_REQ_ADMIN;

export type TattReqEditable = Pick<
  TattooRequest,
  "preferred_name" | "email" | "phone" | "type"
>;

export type ClientTattEditable = Pick<ClientTattoo, "title">;

export const getRecentlyCreatedRequests = getRecentlyCreatedRequests_src;

export const getLastThreeTatReqs = (
  client: Client,
  select: Partial<TattooRequest>[] = [],
) => getRecentlyCreatedRequests(client, select, 3);
