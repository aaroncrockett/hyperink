// Local
import {
  createServerClientAndAuth,
  getAuthedUser,
  getProfileId,
} from "@/db/server";

// hyperink
import { Page, Heading } from "@hyperinkstudio/ui-react/components";

export default async function AdminPage() {
  const authedClient = await createServerClientAndAuth();

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
