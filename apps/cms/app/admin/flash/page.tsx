import { Page } from "@hyperink/ui-react/components";
//
import { ErrorDisplay } from "@hyperink/ui-react/components";
import { getUsersFlashAndTagOptions } from "@hyperink/api-domain-helpers/flash";
//
import { createSSClient, getAuthedUser } from "@/auth/server";
import { ViewTransition } from "@/ui";
//
import { initFlash } from "./helpers";
import { Flash } from "./_components/Flash";
//
export default async function FlashPage() {
  const client = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(client);

  if (!user) return <ErrorDisplay error="no authed user" />;

  const { data: optsData, error: optsError } = await getUsersFlashAndTagOptions(
    client,
    user.id,
  );

  const flashOpts = optsData?.flashOpts;
  const tagOpts = optsData?.tagOpts;
  const collections = tagOpts?.collections ?? [];

  if (optsError) return <ErrorDisplay error="get options error" />;

  const { defaultCollection, emptyDefault, flashData, flashError } =
    await initFlash(client, user.id, flashOpts);

  if (flashError) return <ErrorDisplay error="get flash error" />;

  if (!flashData)
    return (
      <ViewTransition transition="slide">
        <Page className="bg-surface-50-950 h-full">
          <p className="p-2 rounded card preset-filled-warning-500">
            NoFlash yet! Add some! :D
          </p>
        </Page>
      </ViewTransition>
    );

  return (
    <ViewTransition transition="slide">
      <Page className="bg-surface-50-950 h-full">
        {emptyDefault && (
          <p className="p-2 rounded card preset-filled-warning-500">
            Your default collection is empty of flash. Edit some flash to add it
            to your default collection.
          </p>
        )}
        {defaultCollection === "" && (
          <p className="p-2 rounded card preset-filled-warning-500">
            You don&lsquo;t have a default collection yet. Choose one here -
          </p>
        )}
        <Flash
          flash={flashData}
          collection={defaultCollection}
          collections={collections}
          user_id={user.id}
        />
      </Page>
    </ViewTransition>
  );
}
