// _initdata.ts
import { cache } from "react";
import { createSSClient, getAuthedUser } from "@/auth/server";
import { getProfileByUserId } from "@/db/profile";

export const getUserData = cache(async () => {
  const dbClient = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(dbClient);

  const { data: pvtProfile } = user
    ? await getProfileByUserId(dbClient, user.id)
    : { data: null };

  return {
    user,
    pvtProfile,
    pvtProfileId: pvtProfile?.id ?? "",
  };
});
