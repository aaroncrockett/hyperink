// Local
import {
  createServerClientAndAuth,
  getAuthedUser,
  getProfileId,
} from "@/utils/db/server";

// hyperink
import { Page, Heading } from "@hyperinkstudio/ui-react/components/client";

export default async function AdminPage() {
  const authedClient = await createServerClientAndAuth();

  const {
    data: { user },
  } = await getAuthedUser(authedClient);

  let userId: string | undefined = undefined;

  if (user) {
    const { data } = await getProfileId(authedClient, user.id);
    userId = data?.id?.toString() ?? undefined;
  }

  return (
    <Page>
      <Heading text="Admin" as="h2" />

      {userId ? (
        <p>Hello {user?.user_metadata.full_name}</p>
      ) : (
        <>
          Looks like you haven&apos;t created your profile yet, bro.
          <button className="btn">Create Profile</button>
        </>
      )}
    </Page>
  );
}
