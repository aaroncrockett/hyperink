import { cache } from "react";
import { createSSClient, getAuthedUser } from "@/auth/server";
// import type { AuthUser, Client } from "@hyperink/service-providers";

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
  async (getType: GetType = "user", getMetaData: boolean = false) => {
    const dbClient = await createSSClient();
    const {
      data: { user },
    } = await getAuthedUser(dbClient);

    if (!user) {
      return { user: null };
    }

    if (getType === "user") {
      return {
        user,
        userId: user.id,
      };
    }

    if (getType === "profile" || getType === "user-profile") {
      // const profileData = getProfileData(dbClient, user);
      // const authMetadata = getMetaData ? profileData.authMetadata : null;
      // if (getType === "profile") {
      //   return {
      //     profile: profile,
      //     userId: user.id,
      //     authMetadata: authMetadata ,
      //   };
      // }
      //   if (getType === "user-profile") {
      //     return {
      //     profile: profile,
      //     userId: user.id,
      //     user,
      //     authMetadata: authMetadata ,
      // };
    }

    return {
      user: null,
      userId: null,
      profile: null,
      authMetadata: null,
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
