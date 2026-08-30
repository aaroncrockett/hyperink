export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { FormError } from "@hyperinkstudio/ui-react-next/components";
import { denormalizeFromKabobCase } from "@hyperinkstudio/utils";
// Local @
import { createSSClient } from "@/auth/server";
//
import { Heading, Page, ViewTransition } from "@/ui";
// Local
import {
  getFlashByDefaultCollection,
  getCollProfileTaggingOpts,
  getFlashPublicUrl,
} from "@/business/flash";
//
import { Flash } from "./_components/Flash";
//

const serverClient = await createSSClient({
  noCache: true,
});

const { data: collectionOpts } = await getCollProfileTaggingOpts(serverClient);

const { data: defaultCollectionFlash, collection } =
  await getFlashByDefaultCollection(serverClient);

const displayCasedCollection = denormalizeFromKabobCase(collection);

export default async function FlashPage() {
  if (!defaultCollectionFlash) {
    return <FormError error="error getting: getFlashByDefaultCollection" />;
  }
  if (!collectionOpts) {
    return <FormError error="There are no colleciton options!" />;
  }

  const flashData = await Promise.all(
    defaultCollectionFlash.map(async (data) => {
      const { data: url } = await getFlashPublicUrl(serverClient, data.path);

      return {
        ...data,
        publicUrl: url.publicUrl,
      };
    }),
  );

  if (!flashData) {
    return <FormError error="Error: problem with getFlashPublicUrl" />;
  }

  return (
    <ViewTransition transition="nav-forward">
      <Page>
        <Heading
          as="h2"
          h2TextAtrs="text-surface-800-200"
          text="All Flash"
        ></Heading>

        <Flash
          collectionOpts={collectionOpts}
          flash={flashData}
          collection={displayCasedCollection}
        />
      </Page>
    </ViewTransition>
  );
}
