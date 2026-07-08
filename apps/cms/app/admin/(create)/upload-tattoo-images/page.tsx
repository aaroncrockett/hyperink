"use server";

import { Form, Heading, Page } from "@inktree/ui-react/components";
import { uploadImage } from "./actions";
import FormContent from "./FormContentWrapper";

export default async function UploadImagePage() {
  return (
    <Page>
      <Heading text="Upload Images" as="h2" />

      <Form action={uploadImage}>
        <FormContent />
      </Form>
    </Page>
  );
}
