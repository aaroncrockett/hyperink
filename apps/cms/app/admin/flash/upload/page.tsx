// @ Local
import { createSSClient } from "@/auth/server";
//
import { getDisplayProfileTaggingOpts } from "@/business/flash";
import { type ProfileTaggingOptionsDisplay } from "@/business/profileTaggingOpts";
//
import { Page, Heading } from "@/ui";
// Local
import { FlashForm } from "./_components/FlashForm";

const serverClient = await createSSClient();
const { data: taggingOpts } = await getDisplayProfileTaggingOpts(serverClient);

const singleTaggingOpts = taggingOpts?.[0]
  ? ({ ...taggingOpts[0] } as Partial<ProfileTaggingOptionsDisplay>)
  : null;

export default async function FlashUploadPage() {
  return (
    <Page>
      <Heading as="h1" text="Flash"></Heading>
      <FlashForm taggingOpts={singleTaggingOpts} />
    </Page>
  );
}
