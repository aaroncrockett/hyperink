// React
import { Page, Heading } from "@hyperinkstudio/ui-react-next/components";
// Local
import { createSSClient } from "@/db/server";
import { getLastTenTattooRequests } from "@/db/tattooRequest";
import { TattooRequests } from "../(features)/TattooRequests";

const serverClient = await createSSClient();
const { data: tattooRequests } = await getLastTenTattooRequests(serverClient);

export default async function TattooRequestsPage() {
  return (
    <Page>
      <Heading as="h1" text="Tattoo Requests" />
      <TattooRequests requests={tattooRequests ?? []} />
    </Page>
  );
}
