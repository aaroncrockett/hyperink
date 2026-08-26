// Local @
import { Page, Heading, ViewTransition } from "@/ui";
//
import { getFlashDisplayOptions } from "@/business/flash/flashOptions";
import { getCollProfileTaggingOpts } from "@/business/flash";
//
import { createSSClient } from "@/auth/server";
//
import { PreferencesForm } from "./_components/PreferencesForm";

const serverClient = await createSSClient();

const { data: flashOptionsArr } = await getFlashDisplayOptions(serverClient);
const { data: flashCollectionOptionsArr } =
  await getCollProfileTaggingOpts(serverClient);

export default async function PreferencesPage() {
  return (
    <ViewTransition transition="nav-forward">
      <Page>
        <Heading
          as="h2"
          h2TextAtrs="text-surface-800-200"
          text="Preferences"
        ></Heading>
        <PreferencesForm
          flashOptionsArr={flashOptionsArr ?? []}
          flashCollectionOptionsArr={flashCollectionOptionsArr ?? []}
        />
      </Page>
    </ViewTransition>
  );
}
