import { Page, ErrorDisplay } from "@hyperink/ui-react/components";

import { createSSClient, getAuthedUser } from "@/auth/server";

import {
  getUsersFlashOptions,
  getUsersTagOptions,
} from "@hyperink/api-domain-helpers/options";

import { ViewTransition } from "@/ui";
import { TattooOptions } from "./_components/Tattoo_Options";

export default async function PreferencesPage() {
  const client = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(client);

  if (!user) return <ErrorDisplay error="no user found" />;

  const { data: defaultCollection, error: flashOptsError } =
    await getUsersFlashOptions(client, user?.id);
  console.log(defaultCollection);

  if (flashOptsError) return <ErrorDisplay error="error getting tag options" />;

  const { data: tagOptsData, error: tagOptsError } = await getUsersTagOptions(
    client,
    user?.id,
  );

  if (tagOptsError) return <ErrorDisplay error="error getting flash options" />;

  return (
    <ViewTransition transition="slide">
      <Page className=" bg-surface-50-950 h-full">
        <h1 className="hI-h1">Tattoo Preferences placeholder</h1>
        {/* <FlashOptions
          id={user.id}
          tagOpts={tagOptsData}
          defaultCollection={defaultCollection}
        /> */}
      </Page>
    </ViewTransition>
  );
}
