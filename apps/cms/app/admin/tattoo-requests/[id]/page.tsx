// React

// Hyper Ink
import { Heading, Page } from "@hyperinkstudio/ui-react/components";
// Local
import { getTattooRequestById } from "@/db/tattooRequest";
import { createSSClient } from "@/db/server";
import { TattooForm } from "./_components/TattooForm";

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

  if (!tattRequest) return null;

  return (
    <Page>
      <Heading as="h1" text="Tattoo Request" />
      {/* Look up the client by the email and phone */}

      <TattooForm tattRequest={tattRequest} />
    </Page>
  );
}
