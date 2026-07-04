"use server";
import { ImageInputs } from "../../ImageInputs/index";
import { Form, Heading } from "@inktree/ui-react/components";
import { uploadImage } from "./actions";

export default async function UploadImagePage() {
  return (
    <div className="bg-slate-50 p-6 border flex flex-col space-y-4">
      <Heading text="Upload Image or Images" as="h3" />

      <Form action={uploadImage}>
        <ImageInputs />
      </Form>
    </div>
  );
}
