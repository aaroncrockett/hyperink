import { Client } from "@hyperinkstudio/services";
//hyperink
import {
  createTattooRequest as createTattooRequestDb,
  getRecentlyCreatedRequests as getRecentlyCreatedRequestsDb,
  getTattooRequestById as getTattooRequestByIdDb,
} from "@hyperinkstudio/api";

// Local
export * from "./types";
export * from "./objs";
export * from "./keys";
export * from "./lists";
export * from "./schemas";

export { TYPE as BASE_TYPE } from "./base";

export const createTattooRequest = createTattooRequestDb;

export const getTattooRequestById = getTattooRequestByIdDb;

export const getLastTenTattooRequests = getRecentlyCreatedRequestsDb;

export const getLastThreeTattooRequests = (client: Client) => {
  return getRecentlyCreatedRequestsDb(client, 3);
};
