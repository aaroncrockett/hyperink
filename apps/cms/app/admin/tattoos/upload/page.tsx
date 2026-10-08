import { getUsersTagOptions } from "@hyperink/api-domain-helpers/options";
import { Page, ErrorDisplay } from "@hyperink/ui-react/components";
//
import { ViewTransition } from "@/ui";
import { getAuthedUser, createSSClient } from "@/auth/server";
//
import { TattoosForm } from "./_components/TattoosForm";
//
export default async function TattooUploadPage() {
  const serverClient = await createSSClient();

  // const {
  //   data: { user },
  // } = await getAuthedUser(serverClient);

  // if (!user) return <ErrorDisplay error="no user" />;

  return (
    <ViewTransition transition="slide">
      <Page className="bg-surface-50-950 h-full">
        <h1 className="hI-h1">Upload</h1>
        <TattoosForm />
      </Page>
    </ViewTransition>
  );
}
