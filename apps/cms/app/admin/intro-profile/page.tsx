import { redirect } from "next/navigation";
//
import { ErrorDisplay } from "@hyperink/ui-react/components";
//
import { ProfileForm } from "./_components/ProfileForm";
import { getInitUserAndProfileData } from "@/app/_helpers";

export default async function IntroProfile() {
  const {
    data: { user, profile, userId, providerMetadata },
    error,
  } = await getInitUserAndProfileData([]);
  if (profile && profile.is_verified) redirect("/admin");
  if (error) return <ErrorDisplay error={error.message} />;
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
      </div>

      {user && userId && (
        <ProfileForm userId={userId} providerMetadata={providerMetadata} />
      )}
    </div>
  );
}
