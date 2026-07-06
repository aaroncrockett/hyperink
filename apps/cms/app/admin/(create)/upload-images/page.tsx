"use server";

import { Form, Heading } from "@inktree/ui-react/components";
import { uploadImage } from "./actions";
import Provider from "./_components/UploadImageProvider";
import { FormContent } from "./_components/FormContent";

export default async function UploadImagePage() {
  return (
    <Provider>
      <div className="bg-slate-50 p-6 border flex flex-col space-y-4">
        <Heading text="Upload Image or Images" as="h3" />

        <Form action={uploadImage}>
          <FormContent />
        </Form>
      </div>
    </Provider>
  );
}
