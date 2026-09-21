import { ProfileForm } from "./_components/ProfileForm";
import { getUserData } from "@/app/_helpers";
//
const { user, userId, providerMetadata } = await getUserData("user");

export default async function IntroProfile() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="text-secondary-500 text-center">
        <p>
          This app is currently in private beta and access is limited to invited
          users.
        </p>
        <p>
          Fill out some contact info and I will get back with you within a
          couple of days.
        </p>
        {userId}
      </div>

      {user && userId && (
        <ProfileForm userId={userId} providerMetadata={providerMetadata} />
      )}
    </div>
  );
}
