// Local
import { createSSClient } from "@/auth/server";
import { getLastTenTattooRequests } from "@/db/api/tattooRequest";
import { TattooRequests } from "../(features)/TattooRequests";
// Local UI
import { Page, Heading } from "@/ui";

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
