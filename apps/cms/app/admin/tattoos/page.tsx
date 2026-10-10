import { Page } from "@hyperink/ui-react/components";
//
import { ErrorDisplay } from "@hyperink/ui-react/components";
//
import { createSSClient, getAuthedUser } from "@/auth/server";
import { ViewTransition } from "@/ui";
//
import { getTattoos } from "@hyperink/api-domain-helpers/tattoo";
import { Tattoos } from "./_components/Tattoos";
//
export default async function TattoosPage() {
  const client = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(client);

  if (!user) return <ErrorDisplay error="no authed user" />;

  const { data: tattooData, error: tattooError } = await getTattoos(
    client,
    [],
    [{ profile_tattoo_id: user.id }],
  );

  if (tattooError) return <ErrorDisplay error="get tattoos error" />;

  if (!tattooData || !tattooData.length)
    return (
      <ViewTransition transition="slide">
        <Page className="bg-surface-50-950 h-full">
          <p className="p-2 rounded card">No Tattoos yet. Upload some.</p>
        </Page>
      </ViewTransition>
    );

  return (
    <ViewTransition transition="slide">
      <Page className="bg-surface-50-950 h-full">
        <Tattoos tattoos={tattooData} profile_tattoo_id={user.id} />
      </Page>
    </ViewTransition>
  );
}
