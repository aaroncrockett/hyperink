// @ Local

import { getUsersTagOptions } from "@hyperink/api-domain-helpers/options";
import { Page, ErrorDisplay } from "@hyperink/ui-react/components";
//
import { FlashForm } from "./_components/FlashForm";
import { getAuthedUser, createSSClient } from "@/auth/server";

export default async function FlashUploadPage() {
  const serverClient = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(serverClient);

  if (!user) return <ErrorDisplay error="no user" />;

  const { data: tagOptsData, error } = await getUsersTagOptions(
    serverClient,
    user.id,
  );

  if (!tagOptsData) return <ErrorDisplay error="no tag options returned" />;

  if (error) return <ErrorDisplay error={error.message} />;

  const collections = tagOptsData.collections;

  return (
    // <ViewTransition transition="nav-forward">
    <Page>
      <h1 className="hI-h1">Upload</h1>
      <FlashForm collectionOpts={collections} />
    </Page>
    // </ViewTransition>
  );
}
