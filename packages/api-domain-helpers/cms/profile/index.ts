import type { Client } from "@hyperink/service-providers";
import {
  getProfile,
  createProfile,
  type ProfileUIRow,
} from "@hyperink/api/profile";
import { execute, single } from "../../internal-helpers/";
export const getUserProfile = async (
  client: Client,
  selectKeys: (keyof ProfileUIRow)[],
  id: ProfileUIRow["id"],
) => {
  return await single(getProfile, client, selectKeys, [
    { columnKey: "id", value: id },
  ]);
};
export const createUserProfile = async (
  client: Client,
  inserts: Partial<ProfileUIRow>[] | Partial<ProfileUIRow>,
) => {
  return await execute(createProfile, client, inserts);
};
