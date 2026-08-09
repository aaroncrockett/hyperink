import Link from "next/link";
// Local @
import { type TattooRequest } from "@/db/types";
import { getLastThreeTattooRequests } from "@/db/tattooRequest";
import { createSSClient } from "@/auth/server";

// hyperink UI
import { Heading, Page } from "@hyperinkstudio/ui-react-next/components";

import { TattooRequests } from "./(features)/TattooRequests";

// Local Per Page
import { getUserData } from "./getUserData";

// Local Other
import { ADMIN_TATT_REQ } from "@/consts";

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
            <Link
              href={ADMIN_TATT_REQ.href}
              className="underline text-secondary-500"
            >
              See More requests
            </Link>
          }
        />
      )}
    </Page>
  );
}
