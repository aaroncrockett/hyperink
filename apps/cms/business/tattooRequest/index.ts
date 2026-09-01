import type { Client, TattooRequest } from "@hyperinkstudio/services"; //
import * as TatReq_Src from "@hyperinkstudio/business/tattooRequest";

export const getLastThreeTatReqs = (
  client: Client,
  select: Partial<TattooRequest>[] = [],
) => TatReq_Src.getRecentlyCreatedRequests(client, select, 3);
