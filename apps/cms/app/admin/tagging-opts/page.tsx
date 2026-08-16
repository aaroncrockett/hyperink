// @ auth
import { createSSClient } from "@/auth/server";
// @/db
import {
  getDisplayProfileTaggingOpts,
  type ProfileTaggingOptionsDisplay,
} from "@/db/api/profileTaggingOpts";
// Local
import { TaggingOptsDisplay } from "./_components/TaggingOptsDisplay";
// Local UI
import { Page, Heading } from "@/ui";

const serverClient = await createSSClient();
const { data: taggingOpts } = await getDisplayProfileTaggingOpts(serverClient);

const singleTaggingOpts = taggingOpts?.[0]
  ? ({ ...taggingOpts[0] } as ProfileTaggingOptionsDisplay)
  : null;

export default function TaggingOptsPage() {
  return (
    <Page>
      <Heading as="h1" text="Tagging Options" />
      <p>Customize your options for your own tattoo workflow and forms</p>
      <TaggingOptsDisplay opts={singleTaggingOpts} />
    </Page>
  );
}
