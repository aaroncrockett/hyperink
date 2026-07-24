import { Heading, Page } from "@hyperinkstudio/ui-react/components";

type TattooRequestPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TattooRequestPage({
  params,
}: TattooRequestPageProps) {
  const { id } = await params;

  // fetch request by id
  // const request = await getTattooRequest(id);

  return (
    <Page>
      <Heading as="h1" text="tattoo request" />
    </Page>
  );
}
