import Link from "next/link";
// Local @
import { createSSClient, getAuthedUser, getProfileId } from "@/db/server";
import { getLastThreeTattooRequests } from "@/db/tattooRequest";
import type { TattooRequest } from "@hyperinkstudio/db";
// Local
import { IsLoggedIn } from "./_components/IsLoggedIn";
import { IsLoggedOut } from "./_components/IsLoggedOut";
import { TattooRequests } from "./(features)/TattooRequests";
import { LINKS_ADMIN } from "../consts";

// hyperink
import { Page, Heading } from "@hyperinkstudio/ui-react/components";

export default async function AdminPage() {
  const authedClient = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  let userId: string | undefined = undefined;
  let tattooRequests: Partial<TattooRequest>[] | null = null;

  if (user) {
    const { data: userIdData } = await getProfileId(authedClient, user.id);
    userId = userIdData?.id;
    const { data: tattReqData } =
      await getLastThreeTattooRequests(authedClient);
    tattooRequests = tattReqData;
  }

  return (
    <Page>
      <Heading text="Admin" as="h1" />

      {userId && user && tattooRequests && (
        <IsLoggedIn user={user}>
          <TattooRequests
            lead={<Heading text="Tattoo Requests" as="h2" />}
            requests={tattooRequests ?? []}
            trail={
              <Link
                href={LINKS_ADMIN.tattooRequests.href}
                className="underline text-secondary-500"
              >
                See More requests
              </Link>
            }
          />
        </IsLoggedIn>
      )}
      {!userId && <IsLoggedOut />}
    </Page>
  );
}
