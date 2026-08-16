import { Page, Heading } from "@/ui";
import { FlashForm } from "./_components/FlashForm";

export default async function FlashUploadPage() {
  return (
    <Page>
      <Heading as="h1" text="Flash"></Heading>
      {/* upload */}
      <FlashForm />
    </Page>
  );
}
