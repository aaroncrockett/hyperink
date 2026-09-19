import type { Client } from "@hyperink/service-providers";
import { getProfile, type ProfileUIRow } from "@hyperink/api/profile";
export const getUserProfile = async (
  client: Client,
  selectKeys: (keyof ProfileUIRow)[],
  id: ProfileUIRow["id"],
) => {
  const { data, error } = await getProfile(client, selectKeys, [
    { columnKey: "id", value: id },
  ])
    .single()
    .overrideTypes<ProfileUIRow, { merge: false }>();

  return {
    data,
    error,
  };
};
