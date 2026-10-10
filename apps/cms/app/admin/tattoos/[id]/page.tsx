//
import { getTattooById } from "@hyperink/api-domain-helpers/tattoo";
import { ErrorDisplay, Page } from "@hyperink/ui-react/components";
//
import { createSSClient, getAuthedUser } from "@/auth/server";
import { ViewTransition } from "@/ui";
//
import { EditTattoo } from "./_components/EditTattoo";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function TattooItemEdit({ params }: Props) {
  const { id } = await params;

  const client = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(client);

  if (!user) return <ErrorDisplay error="no user" />;

  const { data, error } = await getTattooById(
    client,
    ["title", "description"],
    id,
  );

  if (!data || error) return <ErrorDisplay error="no user" />;

  return (
    <ViewTransition transition="slide">
      <Page>
        <h1 className="hI-h1">Edit Tattoo</h1>
        <EditTattoo id={id} tattooItem={data} />
      </Page>
    </ViewTransition>
  );
}
