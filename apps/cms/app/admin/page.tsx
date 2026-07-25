import Link from "next/link";
// Local @
import { createSSClient, getAuthedUser, getProfileId } from "@/db/server";
import { getLastThreeTattooRequests } from "@/db/tattooRequest";
// Local
import { IsLoggedIn } from "./_components/IsLoggedIn";
import { IsLoggedOut } from "./_components/IsLoggedOut";
import { TattooRequests } from "./(features)/TattooRequests";
import { LINKS_ADMIN } from "../consts";

// hyperink
import { Page, Heading } from "@hyperinkstudio/ui-react/components";

const serverClient = await createSSClient();
const { data: tattooRequests } = await getLastThreeTattooRequests(serverClient);

export default async function AdminPage() {
  const authedClient = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  let userId: string | undefined = undefined;

  if (user) {
    const { data } = await getProfileId(authedClient, user.id);
    userId = data?.id;
  }

  return (
    <Page>
      <Heading text="Admin" as="h2" />

      {userId && user && (
        <IsLoggedIn user={user}>
          <TattooRequests
            lead={<Heading text="Tattoo Requests" as="h4" />}
            requests={tattooRequests ?? []}
            trail={
              <Link
                href={LINKS_ADMIN.tattooRequests.href}
                className="underline text-primary-400-600"
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
