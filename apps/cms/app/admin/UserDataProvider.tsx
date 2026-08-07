import type { AuthUser, Profile, Client } from "@hyperinkstudio/db";

import { createSSClient, getAuthedUser, getProfileByUserId } from "@/db/server";

type Nullable<T> = T | null;

type ChildProps = {
  user: Nullable<AuthUser>;
  pvtProfile: Nullable<Profile>;
  dbClient: Nullable<Client>;
  pvtProfileId: string;
};

export async function AdminData({
  children,
}: {
  children: (data: ChildProps) => React.ReactNode;
}) {
  const dbClient = await createSSClient();

  const getClientIfUserExists = (user: AuthUser | null) => {
    // Prevent unauthenticated code paths from using the database client.
    return user ? dbClient : null;
  };

  const {
    data: { user },
  } = await getAuthedUser(dbClient);

  const { data: pvtProfile } = user
    ? await getProfileByUserId(dbClient, user.id)
    : { data: null };

  return children({
    user,
    pvtProfile,
    pvtProfileId: pvtProfile?.id ?? "",
    dbClient: getClientIfUserExists(user), // IMPORTANT Prevent unauthenticated code paths from using the database client.
  });
}
