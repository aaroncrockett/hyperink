"use client";

import { useActionState } from "react";
import { Form, Heading, Page } from "@inktree/ui-react/components";

// import FormContent from "./FormContentWrapper";
import { getClient, uploadImage } from "./actions";

const initClientState = {
  client: null,
  error: null,
};

export default function UploadImagePage() {
  const [clientState, clientAction, clientPending] = useActionState(
    getClient,
    initClientState,
  );

  // const [uploadState, uploadAction, uploadPending] = useActionState(
  //   uploadImage,
  //   initialState,
  // );

  return (
    <Page>
      <Heading text="Upload Images" as="h2" />

      <Form action={clientAction}>
        <input
          name="email"
          type="email"
          placeholder="client@example.com"
          required
        />

        <button type="submit" disabled={clientPending}>
          {clientPending ? "Searching..." : "Find Tattoos"}
        </button>

        {clientState.error && <p>{clientState.error}</p>}
      </Form>
      {clientState.client?.email ? "email" : "none"}
      {clientState.client?.phone ? "phone?" : "no phone bro"}

      {/* {clientByPhoneState.data && (
        <Form action={uploadAction}>
          <FormContent
            clientTattoos={clientState.data}
            isPending={uploadPending}
          />
        </Form>
      )} */}
    </Page>
  );
}
