import { Page } from "@hyperink/ui-react/components";
//
import { ErrorDisplay } from "@hyperink/ui-react/components";
import {
  getUsersFlashAndTagOptions,
  getFlash,
} from "@hyperink/api-domain-helpers/flash";
//
import { createSSClient, getAuthedUser } from "@/auth/server";
import { ViewTransition } from "@/ui";
//
import { FLASH_METADATA_KEYS, type FlashUI } from "./data";
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

  let defaultCollection = "";
  let firstCollection = "";

  if (flashOpts && flashOpts.defaultCollection) {
    defaultCollection = flashOpts.defaultcollection;
  }
  // if no default collection, get the first collection
  if (!defaultCollection.length && collections.length) {
    firstCollection = tagOpts[0];
  }
  const initCollection = defaultCollection
    ? defaultCollection
    : firstCollection;

  const flashSelectKeys = [...FLASH_METADATA_KEYS] as (keyof FlashUI)[];

  const where = [
    { user_id: user.id },
    // if default collection, gey by default collection as well as by id
    ...(initCollection ? [{ collection: initCollection }] : []),
  ];

  const { data: flashData, error: flashError } = await getFlash(
    client,
    flashSelectKeys,
    where,
  );

  if (flashError) return <ErrorDisplay error="get flash error" />;

  if (!flashData)
    return (
      <Page>
        <p>NoFlash yet!</p>
      </Page>
    );

  return (
    <ViewTransition transition="slide">
      <Page className="bg-surface-50-950 h-full">
        <Flash
          flash={flashData}
          collection={initCollection}
          collections={collections}
          userId={user.id}
        />
      </Page>
    </ViewTransition>
  );
}
