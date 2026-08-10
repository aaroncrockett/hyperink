// Hyperink UI
import { Page, Heading } from "@hyperinkstudio/ui-react-next/components";
// @ auth
import { createSSClient } from "@/auth/server";
// @/db
import {
  getDisplayProfileTaggingOpts,
  type TaggingOptionsValues,
} from "@/db/api/profileTaggingOpts";
// @/app
import { getUserData } from "@/app/admin/getUserData";
// Local
import { TaggingOptsDisplay } from "./_components/TaggingOptsDisplay";

const serverClient = await createSSClient();
const { data: taggingOpts } = await getDisplayProfileTaggingOpts(serverClient);

const singleTaggingOpts = taggingOpts?.[0]
  ? ({ ...taggingOpts[0] } as TaggingOptionsValues)
  : null;

// const { pvtProfileId } = await getUserData();

export default function TaggingOptsPage() {
  return (
    <Page>
      <Heading as="h1" text="Tagging Options" />
      <p>Customize your options for your own tattoo workflow and forms</p>
      <TaggingOptsDisplay opts={singleTaggingOpts} />
    </Page>
  );
}
