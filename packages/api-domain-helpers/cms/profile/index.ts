import type { Client } from "@hyperink/service-providers";
import { HIAPIError } from "@hyperink/api";
import { getProfile, type ProfileUIRow } from "@hyperink/api/profile";
import { single } from "@hyperink/api-domain-helpers";
export const getUserProfile = async (
  client: Client,
  selectKeys: (keyof ProfileUIRow)[],
  id: ProfileUIRow["id"],
) => {
  return await single(getProfile, client, selectKeys, [
    { columnKey: "id", value: id },
  ]);
};
