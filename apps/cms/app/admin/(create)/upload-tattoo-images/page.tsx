"use server";
// hyperinkstudio
import { Heading, Page } from "@hyperinkstudio/ui-react/components";
// Local Parent

import { getProfileTaggingOpts } from "@/db/profileTaggingOpts";
import { createSSClient } from "@/db/server";
// Local

// local parents

// local
import { default as FormWrapper } from "./_components/FormWrapper";

const supabase = await createSSClient();

const { data: taggingOpts } = await getProfileTaggingOpts(supabase);

export default async function UploadTattooImagePage() {
  return (
    <Page>
      <Heading text="Upload Tattoo Images" as="h2" />

      <FormWrapper
        taggingOpts={taggingOpts && taggingOpts[0] ? taggingOpts[0] : null}
      />
    </Page>
  );
}
