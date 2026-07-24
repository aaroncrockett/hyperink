"use server";

//hyperink
import { Page, Heading } from "@hyperinkstudio/ui-react/components";
// local parents
import { getProfileTaggingOpts } from "@/db/profileTaggingOpts";
import { createServerClientAndAuth } from "@/db/server";
// local
import { default as FormWrapper } from "./_components/FormWrapper";

const supabase = await createServerClientAndAuth();

const { data } = await getProfileTaggingOpts(supabase);

export default async function CreateTattooOptionsPage() {
  return (
    <Page>
      <Heading text="Create Tagging Options" as="h2" />
      <FormWrapper data={data && data[0] ? data[0] : null} />
    </Page>
  );
}
