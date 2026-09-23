import { Input, Page, FormClient as Form } from "@hyperink/ui-react/components";
//
import { createSSClient, getAuthedUser } from "@/auth/server";
//
import { INTRO_COLLECTION } from "@/app/admin/options/tagging/create-collection/data";
import { createCollection } from "./actions";
export default async function CreateCollectionPage() {
  const serverClient = await createSSClient();
  const {
    data: { user },
  } = await getAuthedUser(serverClient);

  if (!user) return;
  return (
    <Page>
      <Form action={createCollection}>
        <Input
          name={INTRO_COLLECTION.collections?.id}
          label={INTRO_COLLECTION.collections?.label}
          id={INTRO_COLLECTION.collections?.id}
        />
        <input
          type="hidden"
          className="hidden"
          name={INTRO_COLLECTION.profile_id?.id}
          id={INTRO_COLLECTION.profile_id?.id}
          value={user.id}
        ></input>
      </Form>
    </Page>
  );
}
