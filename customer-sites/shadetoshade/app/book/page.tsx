// Hyperink
import { Heading, Page } from "@hyperinkstudio/ui-react/components";

// Local
import { FormContentTmp1 } from "./_components/FormContentTmp1";

export default function BookPage() {
  return (
    <Page>
      <Heading as="h1" text="Tattoo Request Form" />

      <FormContentTmp1 />
    </Page>
  );
}
