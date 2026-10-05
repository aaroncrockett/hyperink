//
import { getFlashById } from "@hyperink/api-domain-helpers/flash";
import { getUsersTagOptions } from "@hyperink/api-domain-helpers/options";
import { ErrorDisplay, Page } from "@hyperink/ui-react/components";
//
import { createSSClient, getAuthedUser } from "@/auth/server";
import { ViewTransition } from "@/ui";
//
import { EditFlash } from "./_components/EditFlash";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function FlashItemEdit({ params }: Props) {
  const { id } = await params;

  const client = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(client);

  if (!user) return <ErrorDisplay error="no user" />;

  const { data: tagOptsData, error: tagError } = await getUsersTagOptions(
    client,
    user.id,
  );

  if (!tagOptsData) return <ErrorDisplay error="no tag options returned" />;

  if (tagError)
    return <ErrorDisplay error={tagError.message ?? "tag options error"} />;

  const collections = tagOptsData.collections;

  const { data, error } = await getFlashById(
    client,
    ["collection", "readable_name", "total_availability", "description"],
    id,
  );

  if (!data || error) return <ErrorDisplay error="no user" />;

  return (
    <ViewTransition transition="slide">
      <Page>
        <h1 className="hI-h1">Edit Flash</h1>
        <EditFlash collections={collections} flashItem={data} />
      </Page>
    </ViewTransition>
  );
}
