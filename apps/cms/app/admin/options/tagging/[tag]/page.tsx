//
import { createSSClient, getAuthedUser } from "@/auth/server";
//
import { Page } from "@hyperink/ui-react/components";
//
import { getOptions } from "@hyperink/api-domain-helpers/options";
//
import { TaggingForm } from "./_components/TaggingForm";

// type TaggingOptsFormKey = keyof ProfileTaggingOptionsDisplay;

type PageProps = {
  params: Promise<{
    tag: string;
  }>;
};
export default async function TagOfTagsOptionsPage({ params }: PageProps) {
  const serverClient = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(serverClient);

  if (!user) return;
  const { tag } = await params;

  const tagOptions = await getOptions(serverClient, user.id, "tags");

  const options = tagOptions.data[tag];

  return (
    <Page>
      <h1 className="hI-h1">Edit Tagging Options</h1>

      <p className="hI-h4">
        <span>Editing</span>
        <span className="text-2xl "> {tag}</span>
      </p>
      <TaggingForm profileId={user.id} type={tag} options={options} />
    </Page>
  );
}
