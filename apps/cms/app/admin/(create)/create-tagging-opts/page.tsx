"use server";

//hyperink
import { Page, Heading } from "@hyperinkstudio/ui-react/components";
// local parents
import { getProfileTaggingOpts } from "@/db/profileTaggingOpts";
import { createSSClient } from "@/db/server";
const supabase = await createSSClient();

const { data } = await getProfileTaggingOpts(supabase);

export default async function CreateTattooOptionsPage() {
  return (
    <Page>
      <Heading text="Create Tagging Options" as="h2" />
    </Page>
  );
}
