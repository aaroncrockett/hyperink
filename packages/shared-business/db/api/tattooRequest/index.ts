//hyperink
import {
  createTattooRequest as createTattooRequestDb,
  getRecentlyCreatedRequests as getRecentlyCreatedRequestsDb,
  getTattooRequestById as getTattooRequestByIdDb,
} from "@hyperinkstudio/db";
// Local
import * as Types from "./types";

export * from "./types";
export * from "./options";
export * from "./objs";
export * from "./keys";
export * from "./lists";
export * from "./schemas";

export { TYPE as BASE_TYPE } from "./base";

export const createTattooRequest = createTattooRequestDb;

export const getTattooRequestById = getTattooRequestByIdDb;

export const getLastTenTattooRequests = getRecentlyCreatedRequestsDb;

export const getLastThreeTattooRequests = (client: Types.Client) => {
  return getRecentlyCreatedRequestsDb(client, 3);
};
