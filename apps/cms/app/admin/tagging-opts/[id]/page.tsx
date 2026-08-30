// @/auth
import { createSSClient } from "@/auth/server";
// @/db
import {
  getDisplayProfileTaggingOpts,
  denormalizeTagging,
  type ProfileTaggingOptionsDisplay,
} from "@/business/profileTaggingOpts";
// Local UI
import { Page, Heading } from "@/ui";
// Local
import { OptionsForm } from "./_components/OptionsForm";

type TaggingOptsFormKey = keyof ProfileTaggingOptionsDisplay;

type PageProps = {
  params: Promise<{
    id: TaggingOptsFormKey;
  }>;
};
export default async function TaggingOptsPage({ params }: PageProps) {
  const paramId = await params;

  const serverClient = await createSSClient();

  const { data: taggingOpts } =
    await getDisplayProfileTaggingOpts(serverClient);

  const singleTaggingOpts = taggingOpts?.[0]
    ? ({ ...taggingOpts[0] } as ProfileTaggingOptionsDisplay)
    : null;

  if (singleTaggingOpts === null) return;

  const options = denormalizeTagging(singleTaggingOpts);

  return (
    <Page>
      <Heading as="h1" text="Edit Tagging Options" />

      <Heading as="h4">
        <span className="italic!">Editing</span>{" "}
        <span className="text-xl! uppercase"> {paramId.id}</span>
      </Heading>
      <OptionsForm paramId={paramId.id} option={options} />
    </Page>
  );
}
