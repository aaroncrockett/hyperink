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
  const tattRequest = getTattooRequestById(ssrClient, id);

  // fetch request by id
  // const request = await getTattooRequest(id);

  return (
    <Page>
      <Heading as="h1" text="tattoo request" />
    </Page>
  );
}
