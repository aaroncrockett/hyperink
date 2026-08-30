import { FormError } from "@hyperinkstudio/ui-react-next/components";
// Local @
import { createSSClient } from "@/auth/server";
//
import { Heading, Page, ViewTransition } from "@/ui";
// Local
import {
  getFlashByDefaultCollection,
  getFlashPublicUrl,
} from "@/business/flash";
//
import { Flash } from "./_components/Flash";
//

const serverClient = await createSSClient();
const { data: defaultCollectionFlash, collection } =
  await getFlashByDefaultCollection(serverClient);

export default async function FlashPage() {
  if (!defaultCollectionFlash) {
    return <FormError error="error getting: getFlashByDefaultCollection" />;
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
        <Flash flash={flashData} collection={collection} />
      </Page>
    </ViewTransition>
  );
}
