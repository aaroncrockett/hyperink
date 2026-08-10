// Hyper Ink
import { Heading, Page } from "@hyperinkstudio/ui-react-next/components";
// @/auth
import { createSSClient } from "@/auth/server";
// @/db
import {
  getDisplayProfileTaggingOpts,
  TAGGING_OPTS_BASE_FORM,
  type TaggingOptionsValues,
} from "@/db/api/profileTaggingOpts";

// Local
import { OptionsForm } from "./_components/OptionsForm";

type TaggingOptsFormKey = keyof typeof TAGGING_OPTS_BASE_FORM;

type TattooRequestPageProps = {
  params: Promise<{
    id: TaggingOptsFormKey;
  }>;
};
export default async function TaggingOptsPage({
  params,
}: TattooRequestPageProps) {
  const paramId = await params;

  const serverClient = await createSSClient();

  const { data: taggingOpts } =
    await getDisplayProfileTaggingOpts(serverClient);

  const singleTaggingOpts = taggingOpts?.[0]
    ? ({ ...taggingOpts[0] } as TaggingOptionsValues)
    : null;

  if (singleTaggingOpts === null) return;

  return (
    <Page>
      <Heading as="h1" text="Edit Tagging Options" />

      <OptionsForm paramId={paramId.id} option={singleTaggingOpts} />
    </Page>
  );
}
