import { Page, ErrorDisplay } from "@hyperink/ui-react/components";

import { createSSClient, getAuthedUser } from "@/auth/server";

import { getUsersFlashOptions } from "@hyperink/api-domain-helpers/options";

import { ViewTransition } from "@/ui";
import { FlashOptions } from "./_components/Flash_Options";

export default async function PreferencesPage() {
  const client = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(client);

  if (!user) return <ErrorDisplay error="no user found" />;

  const { data: flashOptsData, error: flashOptsError } =
    await getUsersFlashOptions(client, user?.id);

  const { data: tagOptsData, error: tagOptsError } = await getUsersFlashOptions(
    client,
    user?.id,
  );

  if (flashOptsError)
    return <ErrorDisplay error="error getting flash options" />;

  return (
    <ViewTransition transition="slide">
      <Page className=" bg-surface-50-950 h-full">
        <h1 className="hI-h1">Flash Preferences</h1>
        <FlashOptions
          id={user.id}
          tagOpts={tagOptsData}
          flashOpts={flashOptsData}
        />
      </Page>
    </ViewTransition>
  );
}
