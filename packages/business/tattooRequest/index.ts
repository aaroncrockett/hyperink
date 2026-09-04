import * as base_src from "./base";

import { clientTattooBase } from "../clientTattoo";

import { clientPersonBase } from "../clientPerson";

export const base = base_src;

export const TattReqBase = {
  ...base_src,
  ...clientTattooBase,
  ...clientPersonBase,
};

export {
  createTattooRequest,
  getRecentlyCreatedRequests,
  getTattooRequestById,
  updateTattooRequest,
} from "@hyperinkstudio/api";

export * from "./types";
