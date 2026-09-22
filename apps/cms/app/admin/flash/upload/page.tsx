// @ Local

import { getUsersTagOptions } from "@hyperink/api-domain-helpers/options";
import { Heading, Page } from "@hyperink/ui-react/components";
//
import { FlashForm } from "./_components/FlashForm";
import { getAuthedUser, createSSClient } from "@/auth/server";

export default async function FlashUploadPage() {
  const serverClient = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(serverClient);

  if (!user) return;

  const { data: tagOpts } = await getUsersTagOptions(
    serverClient,
    ["tag_opts"],
    user.id,
  );

  return (
    // <ViewTransition transition="nav-forward">
    <Page>
      <Heading as="h1">Upload</Heading>
      <FlashForm tagOpts={tagOpts} />
    </Page>
    // </ViewTransition>
  );
}
