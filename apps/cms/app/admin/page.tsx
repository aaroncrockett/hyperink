// Local @
import { type TattooRequest } from "@/db/types";
import { getLastThreeTattooRequests } from "@/db/api/tattooRequest";
import { createSSClient } from "@/auth/server";
// Local Cosnts
import { ADMIN_TATT_REQ } from "@/consts";
// Local UI
import { Page, Heading } from "@/ui";
// Local Other
import { TattooRequests } from "./(features)/TattooRequests";
import { getUserData } from "./getUserData";
import { NextLinkWrapper } from "@/ui";

export default async function AdminHomePage() {
  let tattooRequests: Partial<TattooRequest>[] | null = null;

  const { pvtProfileId, user } = await getUserData();

  if (pvtProfileId) {
    const dbClient = await createSSClient();
    const { data: tattReqData } = await getLastThreeTattooRequests(dbClient);
    tattooRequests = tattReqData;
  }

  return (
    <Page>
      {pvtProfileId && (
        <div className="flex flex-col gap-4">
          <p>Hello {user?.user_metadata.full_name}</p>
        </div>
      )}
      {tattooRequests && (
        <TattooRequests
          lead={<Heading text="Tattoo Requests" as="h2" />}
          requests={tattooRequests ?? []}
          trail={
            <NextLinkWrapper
              href={ADMIN_TATT_REQ.href}
              className="underline text-secondary-500"
            >
              See More requests
            </NextLinkWrapper>
          }
        />
      )}
    </Page>
  );
}
