export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

// Local
import { createSSClient } from "@/auth/server";
import { getLastThreeTatReqs } from "@/business/tattooRequest";
import { TattooRequests } from "../(features)/TattooRequests";
// Local UI
import { Page, Heading } from "@/ui";

const serverClient = await createSSClient();
const { data: tattooRequests } = await getLastThreeTatReqs(serverClient);

export default async function TattooRequestsPage() {
  return (
    <Page>
      <Heading as="h1" text="Tattoo Requests" />
      <TattooRequests requests={tattooRequests ?? []} />
    </Page>
  );
}
