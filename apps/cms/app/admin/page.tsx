// Local
import { createSSClient, getAuthedUser, getProfileId } from "@/db/server";
import { getLastTenTattooRequests } from "@/db/tattooRequest";
import { TattooRequests } from "./(features)/TattooRequests";

// hyperink
import { Page, Heading } from "@hyperinkstudio/ui-react/components";

const serverClient = await createSSClient();
const { data: tattooRequests } = await getLastTenTattooRequests(serverClient);

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
      <TattooRequests requests={tattooRequests ?? []} />

      {userId && <p>Hello {user?.user_metadata.full_name}</p>}
      {!userId && (
        <>
          <p>Looks like you haven&apos;t created your profile yet.</p>
          <button className="btn">Create Profile</button>
        </>
      )}
    </Page>
  );
}
