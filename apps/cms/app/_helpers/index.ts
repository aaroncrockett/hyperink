import { createSSClient, getAuthedUser } from "@/auth/server";

import { getUserProfile } from "@hyperink/api-domain-helpers/profile";
import { type ProfileUIRow } from "@hyperink/api/profile";
import { User } from "@supabase/supabase-js";

export type ProviderMetadata = {
  email: string;
  fullName: string;
  isEmailVerified: boolean;
  name: string;
  phone: string;
  provider: string;
};

export const getInitUserAndProfileData = async (
  select: (keyof ProfileUIRow)[],
) => {
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

  providerMetadata.email = user?.email ?? user?.user_metadata.email ?? "";
  providerMetadata.fullName = user?.user_metadata.full_name ?? "";
  providerMetadata.isEmailVerified = user?.user_metadata.email_verified;
  providerMetadata.name = user?.user_metadata.name ?? "";
  providerMetadata.phone = user?.phone ?? "";
  providerMetadata.provider = user?.app_metadata.provider ?? "";

  type UserProfileDateData = {
    user: User | null;
    userId: string | null;
    profile: ProfileUIRow | null;
    providerMetadata: null | ProviderMetadata;
  };

  let userProfileData: UserProfileDateData = {
    user,
    userId: null,
    profile: null,
    providerMetadata: null,
  };

  if (!user || !user.id) {
    return {
      data: userProfileData,
      error: { message: safeErrorMsg },
    };
  }

  const { data: profileData, error: profileError } = await getUserProfile(
    dbClient,
    select,
    user?.id,
  );

  if (profileError) {
    return {
      data: userProfileData,
      error: { message: safeErrorMsg },
    };
  }

  userProfileData = {
    user,
    userId: user.id,
    profile: profileData,
    providerMetadata: providerMetadata,
  };

  return {
    data: userProfileData,
    error: null,
  };
};
