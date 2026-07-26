import { Heading, Page } from "@hyperinkstudio/ui-react/components";
import { getTattooRequestById } from "@/db/tattooRequest";
import { createSSClient } from "@/db/server";

type TattooRequestPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TattooRequestPage({
  params,
}: TattooRequestPageProps) {
  const { id } = await params;
  const ssrClient = await createSSClient();

  const { data: tattRequest } = await getTattooRequestById(ssrClient, id);

  return (
    <Page>
      <Heading as="h1" text="Tattoo Request" />

      {tattRequest && (
        <>
          <p>{tattRequest.email}</p>
          <p>asdf so much more</p>
        </>
      )}
    </Page>
  );
}
