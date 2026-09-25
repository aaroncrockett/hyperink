import { redirect } from "next/navigation";
//
import { getUserData } from "@/app/_helpers";
//

export const init = async () => {
  const { user, profile, providerMetadata, userId, error } = await getUserData(
    "user-profile",
    [],
  );

  if (user && providerMetadata && !providerMetadata.isEmailVerified) {
    return {
      error: {
        message:
          "your email has not been verified through your provider, please verify before you sign up.",
      },
      data: null,
    };
  }

  if (user && profile && !profile?.is_verified) {
    return {
      error: {
        message:
          "You have not been verified yet. I will be contacting you soon:! :D",
      },
      data: null,
    };
  }

  if (user && (!profile || profile.to_verify === null)) {
    redirect("/admin/intro-profile");
  }

  if (error) return { error };

  return profile;
};
