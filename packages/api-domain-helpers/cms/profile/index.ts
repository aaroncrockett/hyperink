import type { Client } from "@hyperink/service-providers";
import {
  getProfile,
  createProfile,
  type ProfileUIRow,
} from "@hyperink/api/profile";

export const getUserProfile = async (
  client: Client,
  selectKeys: (keyof ProfileUIRow)[],
  id: ProfileUIRow["id"],
) => {
  return await getProfile(client, selectKeys, [{ id }]);
};
export const createUserProfile = async (
  client: Client,
  inserts: Partial<ProfileUIRow>,
) => {
  return createProfile(client, [inserts]);
};
