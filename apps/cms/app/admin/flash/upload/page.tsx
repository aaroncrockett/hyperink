import { Page, Heading } from "@hyperinkstudio/ui-react-next/components";
import { FlashForm } from "./_components/FlashForm";

export default async function FlashUploadPage() {
  return (
    <Page>
      <Heading as="h2" text="Flash"></Heading>
      {/* upload */}
      <FlashForm />
    </Page>
  );
}
