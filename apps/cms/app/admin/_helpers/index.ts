import { redirect } from "next/navigation";
//
import { getUserData } from "@/app/_helpers";
//

export const init = async () => {
  const { user, profile, userId, authMetadata, errors } = await getUserData(
    "user-profile",
    true,
  );

  if (errors) return { errors };

  if (user && authMetadata && !authMetadata.isEmailVerified) {
    return {
      errors: {
        userError:
          "your email has not been verified through your provider, please verify before you sign up.",
      },
    };
  }

  if (user && profile && !profile?.is_verified) {
    return {
      notVerified:
        "You have not been verified yet. I will be contacting you soon:! :D",
    };
  }

  if (user && (!profile || profile.to_verify === null)) {
    redirect("/admin/intro-profile");
  }

  return { userId };
};
