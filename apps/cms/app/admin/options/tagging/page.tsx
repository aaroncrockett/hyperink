import { redirect } from "next/navigation";

import { ErrorsDisplay, Page } from "@hyperink/ui-react/components";
import { getUsersTagOptions } from "@hyperink/api-domain-helpers/options";
//
import { createSSClient, getAuthedUser } from "@/auth/server";
import { Tagging } from "./_components/Tagging";

export default async function TaggingOptionsPage() {
  const serverClient = await createSSClient();

  const {
    data: { user },
  } = await getAuthedUser(serverClient);

  if (!user) return;

  const { data, error } = await getUsersTagOptions(serverClient, user.id);

  if (error)
    return (
      <Page>
        <ErrorsDisplay errors={error} />
      </Page>
    );

  if (data) return <Tagging opts={data} />;

  if (!data) redirect("/admin/options/tagging/create-collection");
}
