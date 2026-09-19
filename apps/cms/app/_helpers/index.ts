import { cache } from "react";
import { createSSClient, getAuthedUser } from "@/auth/server";
// import type { AuthUser, Client } from "@hyperink/service-providers";

import { getUserProfile } from "@hyperink/helpers/profile";

export type AuthMetadata = {
  provider: string;
  isEmailVerified: boolean;
  email: string;
  phone: string;
  name: string;
  fullName: string;
};

type GetType = "user" | "profile" | "user-profile";

export const getUserData = cache(
  async (getType: GetType = "user", getMetaData = false) => {
    const dbClient = await createSSClient();

    const {
      data: { user },
    } = await getAuthedUser(dbClient);

    const safeErrorMsg =
      "Unable to load your account. Please try again, and if the error continues, contact Hyperink.";

    if (user && getType === "user") {
      return {
        user,
        userId: user.id,
        errors: null,
      };
    }

    if (user && (getType === "profile" || getType === "user-profile")) {
      const { data: profileData, error: profileError } = await getUserProfile(
        dbClient,
        [],
        user.id,
      );

      if (profileError) {
        return {
          user,
          userId: null,
          profile: null,
          errors: { userError: safeErrorMsg },
        };
      }
      const authMetadata = getMetaData ? user.user_metadata : null;

      if (getType === "profile") {
        return {
          profile: profileData,
          userId: user.id,
          authMetadata,
          errors: null,
        };
      }

      return {
        profile: profileData,
        userId: user.id,
        user,
        authMetadata,
        errors: null,
      };
    }

    return {
      user: null,
      userId: null,
    };
  },
);

// export const getProfileData = (dbClient: Client, user: AuthUser | null) => {
//   const authMetadata: AuthMetadata = {
//     isEmailVerified: false,
//     email: "",
//     phone: "",
//     name: "",
//     fullName: "",
//   };
//   authMetadata.isEmailVerified = user?.user_metadata.email_verified;
//   authMetadata.phone = user?.phone ?? "";
//   authMetadata.email = user?.email ?? user?.user_metadata.email ?? "";
//   authMetadata.name = user?.user_metadata.name ?? "";
//   authMetadata.fullName = user?.user_metadata.full_name ?? "";
//   const profile = await getProfileByUserId(dbClient, user.id);
// const profile = await getProfileByUserId(dbClient, user.id);
//   if (!profile) {
//     return { profile: null, authMetadata: authMetadata };
//   }
// return { profile, authMetadata: authMetaData };
// };
