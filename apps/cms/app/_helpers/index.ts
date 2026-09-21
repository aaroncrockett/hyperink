import { cache } from "react";
import { createSSClient, getAuthedUser } from "@/auth/server";
// import type { AuthUser, Client } from "@hyperink/service-providers";

import { getUserProfile } from "@hyperink/api-domain-helpers/profile";

export type ProviderMetadata = {
  email: string;
  fullName: string;
  isEmailVerified: boolean;
  name: string;
  phone: string;
  provider: string;
};

type GetType = "user" | "profile" | "user-profile";

// getType === "user" = just user info. good for first filling out profile. includes provider data to pre-fill a form. doesn't fetch a profile.
// getType === "profile" = good after a profile is already created. contains the userId (same as profileId) and the profile object. Does not contain the user object or provider data.
// getType === "user-profile" = if you need every thing.

export const getUserData = cache(async (getType: GetType = "user") => {
  const dbClient = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(dbClient);

  const safeErrorMsg =
    "Unable to load your account. Please try again, and if the error continues, contact Hyperink.";

  const providerMetadata: ProviderMetadata = {
    email: "",
    fullName: "",
    isEmailVerified: false,
    name: "",
    phone: "",
    provider: "",
  };

  if (user && (getType === "user" || getType === "user-profile")) {
    providerMetadata.email = user?.email ?? user?.user_metadata.email ?? "";
    providerMetadata.fullName = user?.user_metadata.full_name ?? "";
    providerMetadata.isEmailVerified = user?.user_metadata.email_verified;
    providerMetadata.name = user?.user_metadata.name ?? "";
    providerMetadata.phone = user?.phone ?? "";
    providerMetadata.provider = user?.app_metadata.provider ?? "";
  }

  if (user && getType === "user") {
    return {
      user,
      userId: user.id,
      providerMetadata,
      profile: null,
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
        providerMetadata: null,
        errors: { userError: safeErrorMsg },
      };
    }

    if (getType === "profile") {
      return {
        user: null,
        userId: user.id,
        providerMetadata: null,
        profile: profileData,
        errors: null,
      };
    }

    return {
      user,
      userId: user.id,
      providerMetadata,
      profile: profileData,
      errors: null,
    };
  }

  return {
    user: null,
    userId: null,
    providerMetadata: null,
    profile: null,
    errors: null,
  };
});
