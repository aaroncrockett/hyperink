// React
import { Page, Heading } from "@hyperinkstudio/ui-react/components";
// Local
import { createSSClient } from "@/db/server";
import { getLastTenTattooRequests } from "@/db/tattooRequest";
import { TattooRequests } from "../(features)/TattooRequests";

export default async function TattooRequestsPage() {
  const serverClient = await createSSClient();
  const { data: tattooRequests } = await getLastTenTattooRequests(serverClient);

  return (
    <Page>
      <Heading as="h1" text="Tattoo Requests" />
      <div>
        <TattooRequests requests={tattooRequests ?? []} />
      </div>
    </Page>
  );
}
