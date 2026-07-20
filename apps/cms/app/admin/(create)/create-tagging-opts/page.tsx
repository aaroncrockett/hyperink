"use server";

//hyperink
import { Page, Heading } from "@hyperinkstudio/ui-react/components/client";
// local parents
import { getProfileTaggingOpts } from "@/utils/db/profileTaggingOpts";
import { createServerClientAndAuth } from "@/utils/db/server";
// local
import { default as FormWrapper } from "./_components/FormWrapper";

const supabase = await createServerClientAndAuth();

const { data } = await getProfileTaggingOpts(supabase);

// ensure we pass an object (not `any[] | null`) to FormWrapper

console.log("hjuihjhhh?");

console.log(data);

export default async function CreateTattooOptionsPage() {
  // const [clientState, actionState] = useActionState(
  //   upsertProfileTaggingOpts,
  //   initialState,
  // );
  return (
    <Page>
      <Heading text="Create Tagging Options" as="h2" />
      <FormWrapper data={data} />
    </Page>
  );
}
